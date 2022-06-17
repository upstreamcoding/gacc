function checkboxGroup(containerId) {
  var checked = [];

  $(containerId).find('input:checked').each(function() {
    checked.push($(this).val());
  });

  return checked;
}

function hiringEventHandlers() {
  $('.checkbox-group').change(function() {
    var skills = checkboxGroup('#subject-skills').join(', ');

    $('#skills').val(skills);
  });

  $('#position').change(function(e) {
    $('#position-instructor-experience').hide();

    if (e.currentTarget.value === 'Instructor') {
      $('#position-instructor-experience').show();
    }
  });
}
