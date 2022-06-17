function selectActiveLink() {
  var pathname = document.location.pathname;
  var hash = document.location.hash;
  var activePath = pathname + hash;

  $('.navbar-nav .nav-link').each(function() {
    if ((pathname === '/' && !hash)) {
      // do something
    } else {
      if ($(this).attr('href').includes(activePath)) {
        $(this).addClass('active');
      }
    }
  });
}

jQuery(function() {
  selectActiveLink();

  $('.navbar-nav .nav-link').on('click', function() {
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
  });
});
