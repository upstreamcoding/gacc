function checkPromoCode(promo) {
  var sanitizedPromo = promo.toLowerCase();

  switch(sanitizedPromo) {
    case 'lawcc':
    case 'beautyshoppe':
    case 'globalwonks':
    case 'district5':
    case 'upskill20':
    case 'witpgh':
      return 'upskill20';
    case 'ilovepgh':
    case 'ilovepittsburgh':
      return 'ilovepgh';
    case 'bundle':
      return 'bundle'; // $500 off
    // case 'together':
    //   return 'together'; // COVID-19
    case 'hardship':
      return 'hardship'; // COVID-19 $30/mo
    case 'audit':
      return 'audit'; // 14-day free trial

    default:
      return null;
  }
}

function clearDiscount(promo){
  // hide clear-promo button
  $('#clear-promo').hide();
  // show redeem button
  $('#redeem').show();
  // clear promo field value & enable
  $('[name="promo"]').val('');
  // enable promo field
  $('[name="promo"]').prop('readonly', false);
  // hide discount UI
  $('.discount-elem-hidden').hide();
  // show regular price
  $('.regular-price').show();
  // revert enroll button href
  $('#enroll').attr('href', `/apply?series=${$('#series-slug').val()}`);
  // clear success alert
  $('#promo--alert-success').remove();
  // if URL params, remove from URL params
  if (document.location.search) {
    document.location.search = '';
  }
}

function redeemDiscount(promo){
  if (!promo) {
    return false;
  }

  var discount = checkPromoCode(promo);

  if (discount === null) {
    return false;
  }

  $('[name="promo"]').val(discount);
  // disable field
  $('[name="promo"]').prop('readonly', true);
  // hide redeem button
  $('#redeem').hide();
  // show clear button
  $('.discount-elem-hidden').show();
  // hide regular price
  $('.regular-price').hide();
  // show discount UI
  $('.discount-'+ discount).show();
  // show discount on application
  $('#discount-application').show();
  $('.discount-text[promo=' + discount + ']').show();
  // update enroll button href
  var href = $('#enroll').attr('href');
  var promo = $('[name="promo"]').val();

  $('#enroll').attr('href', href += '&promo=' + promo);

  // alert
  $('#promo--alert-success').remove();

  if (promo) {
    if (promo !== 'pro' && promo !== 'premium' && promo !== 'starter') {
      toastr.success(
        `(PROMO CODE: ${promo})`,
        'Discount applied!'
      );
    } else {
      $('.discount-form').hide();
    }
  }
}

function promoEventHandlers() {
  $('.discount-form').on('submit', function(e) {
    e.preventDefault();

    if (e.currentTarget.promo.value === '') {
      return false;
    }

    // redeemDiscount(e.currentTarget.promo.value);
    var promoCode = e.currentTarget.promo.value;
    var promoInput = document.getElementById('promo-input');

    if (checkPromoCode(promoCode)) {
      // Promo Code is valid
      promoInput.setAttribute('readonly', true);
      document.getElementById('redeem').innerHTML = 'Loading...';
      document.location.search = 'promo=' + promoCode + '&action=redeem';
    } else {
      // Promo Code NOT valid
      promoInput.value = '';
      promoInput.setAttribute('placeholder', 'Enter a valid Promo Code');
    }
  });

  $('#clear-promo').on('click', function() {
    clearDiscount();
  });

  var searchObj = searchToObject();

  if (searchObj) {
    if (searchObj.referral) {
      // Application
      $('#discount-application').hide();
      $('#application--referral').val(searchObj.referral);
      $('#application--referral-name').text(searchObj.referral);

      // Series
      $('.discount-form').hide();  // no stacking discounts - hide input
      searchObj.promo = 'bff500';  // no stacking discounts - force promo
      // ENROLL BUTTON (TODO: add cookie support)
      var $membershipOptions = $('#membership-options');
      var href = $membershipOptions.attr('href');

      $membershipOptions.attr('href', href += '?referral=' + searchObj.referral);
      // /ENROLL BUTTON

      $('#referral-program').show();
    }

    if (searchObj.promo) {
      redeemDiscount(searchObj.promo);

      if (searchObj.action && searchObj.action === 'redeem') {
        document.getElementById('promo-redeem').scrollIntoView();
      }
    }
  }
}
