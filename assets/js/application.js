function appResetForm(id) {
  // $(id).modal('hide');
  $(id).find('input[type=text], input[type=tel], input[type=email], textarea, select').val('');
  $(id).find('input[type=checkbox], input[type=radio]').prop('checked', false);
  $(id).find('input[type=submit]').prop('disabled', false);
}

function appDisableSubmitButton(name) {
  $(document.forms[name]).find('input[type=submit]').prop('disabled', true);
}

function appAlert(category) {
  switch(category) {
    case 'codeSeriesAppApplication':
      return `
        <div id="connectWithAdvisor--alert-success" class="alert alert-success" role="alert">
          <strong>Saving...</strong>
        </div>
      `;
      break;
    default:
      break;
  }
}

function appSuccessAlert(category) {
  $('.alert').remove();
  $('body').prepend(appAlert(category));
}

function appUrlByCategory(category) {
  switch(category) {
    case 'codeSeriesAppContact':
      return 'https://script.google.com/macros/s/AKfycbxML1yjiaTq96PRadgRrhSJDm5tXvPbd-rMoYxkikHAgvH7P4pF/exec'; // alan@
      break;
    case 'codeSeriesAppApplication':
      return 'https://script.google.com/macros/s/AKfycbzgqy72LKIUhz9cseGNEVCqbN0O-T6AjCzc6mtUMmrgZTLaagM/exec'; // alan@
      break;
    default:
      return null;
  }
}

function appFormSubmit(category, name) {
  appDisableSubmitButton(name);
  appSuccessAlert(category);

  var serializedData = $(document.forms[name]).serializeObject();
  var url = appUrlByCategory(category);
  var id = `#form--${name}`;

  var jqxhr = $.ajax({
    url,
    method: "GET",
    dataType: "json",
    data: serializedData,
    success: function(data){
      var promoParams = '';

      if (serializedData.promo && serializedData.promo !== '') {
        promoParams = '&promo=' + serializedData.promo;
      }

      if (category === 'codeSeriesAppContact') {
        return document.location.href = '/apply/background?e=' + serializedData.email + promoParams;
      }

      if (category === 'codeSeriesAppApplication') {
        if (serializedData.promo && serializedData.promo === 'together') {
          return document.location.href = '/apply/signup?e=' + serializedData.email + promoParams;
        }

        return document.location.href = '/apply/interview';
      }
    }
  });
}

function appEventHandlers() {
  $('.application-form').on('submit', function(e) {
    e.preventDefault();
    var label = $(this).attr('label');
    var category = $(this).attr('category');
    var name = `${category}--${label}`;

    gtag('event', 'submit', {
      'event_category': category,
      'event_label': label,
      'value': 10
    });

    appFormSubmit(category, name);
  });

  $('#series').change(function() {
    $('.dates-group').hide();
    $('.custom-select--dates').val('');
    $('.custom-select--dates').removeAttr('required');
    $(`#dates--${$(this).val()}`).show().attr('required');
  });

  $('.application-next-step').hide(); // Next Steps variant
  $('.application-next-step[rel="interview"]').show();  // Next Steps variant

  var searchObj = searchToObject();

  if (searchObj) {
    if (searchObj.e) {
      $('#email-from-url').val(searchObj.e);
      $('#application--email').hide();
    }

    if (searchObj.promo) {
      if (searchObj.promo && searchObj.promo === 'together') {
        var activateTrialButton = $('#activate-trial-button');

        if (activateTrialButton.length) {
          activateTrialButton.attr('href', activateTrialButton.attr('href') + '?promo=' + searchObj.promo);
        }

        $('.application-next-step').hide(); // Next Steps variant
        $('.application-next-step[rel="signup"]').show();  // Next Steps variant
      }

      $('#promo-from-url').val(searchObj.promo);
    }

    if (searchObj.n) {
      $('#name-from-url').val(searchObj.n);
      $('#application--name').hide();
    }

    if (searchObj.p) {
      $('#phone-from-url').val(searchObj.p);
      $('#application--phone').hide();
    }
  }
}
