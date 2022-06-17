function modalEventHandlers() {
  // Close Modal
  $('.modal').on('hidden.bs.modal', function (e) {
    var modal = e.currentTarget.id;

    onModalCloseDismissCookieModal($('#' + modal));
  });

  $('.modal').on('shown.bs.modal', function () {
    $(this).find('input[autofocus]').trigger('focus');

    $namePhone = $(this).find('.name-phone');

    $(this).find('.modal-input--email').on('keyup', function(e) {
      if ($(this).val().indexOf('@') !== -1) {
        setTimeout(function(){
          $namePhone.show();
        }, 250);
      }
    });
  });
}
