function onLoadSetWebdev6Cookie() {
  if (Cookies.get('webdev6') === undefined) {
    Cookies.set('webdev6', 'show', { expires: 7, path: '/' });
  }
}

function onScrollTriggerWebdev6Modal() {
  var cookie = 'webdev6';

  if ($('.modal').is(":visible")) {
    clearTimeout(window.modalTimer);
  }

  if (Cookies.get(cookie) === 'show' && !$('.modal').is(":visible")) {
    if (window.location.href.indexOf('skill-verification-service') === -1) {
      $('#modal--requestSyllabus--webdev').attr('cookie', cookie);
      $('#modal--requestSyllabus--webdev').modal('show');
    }
  }
}

function dismissCookie(cookie) {
  Cookies.set(cookie, 'dismissed', { expires: 7, path: '/' });
}

function onModalCloseDismissCookieModal(modal) {
  var cookie = modal.attr('cookie');

  if (cookie !== '' && Cookies.get(cookie) === 'show') {
    dismissCookie(cookie);
    modal.attr('cookie', '');
  }
}

$(document).ready(function(){
  // Syllabus : WEBDEV6 Modal
  // onLoadSetWebdev6Cookie();

  // Cookie Scroll Trigger
  window.modalTimer;

  $(window).scroll(function(){
    if ( window.modalTimer ) {
      clearTimeout(window.modalTimer);
    }

    window.modalTimer = setTimeout(function(){
      onScrollTriggerWebdev6Modal();
    }, 10000);
  });
});
