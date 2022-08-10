// function handleCalendlyClick(url) {
//   Calendly.initPopupWidget({ url: url });

//   return false;
// }

function searchToObject() {
  var pairs = window.location.search.substring(1).split("&"),
    obj = {},
    pair,
    i;

  for ( i in pairs ) {
    if ( pairs[i] === "" ) continue;

    pair = pairs[i].split("=");
    obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
  }

  return obj;
}

jQuery(function() {
  // Calendly
  // $('.launch-calendly-popup').click(function() {
  //   var calendlyUrl = $(this).data('calendly-url');

  //   handleCalendlyClick(calendlyUrl);
  // });

  // $('.article-readmore').readmore({
  //   speed: 75,
  //   collapsedHeight: 168,
  //   lessLink: '<a href="#">Read less</a>'
  // });

  // GOOGLE ANALYTICS
  $('.ga-click-event').on('click', function() {
    var label = $(this).attr('ga-label');
    var category = $(this).attr('ga-category');

    gtag('event', 'click', {
      'event_category': category,
      'event_label': label,
      'value': 1
    });
  });

  // EVENT HANDLERS
  modalEventHandlers();
  promoEventHandlers();
  campaignLoadEvents();
  appEventHandlers();
  hiringEventHandlers();
  membershipEventHandlers();

  // SMOOTH SCROLL ANCHOR LINKS
  $('.scroll-to').click(function() {
    var scrollTop = $(this).attr('scroll-top');
    var anchor = $(scrollTop).offset().top;

    $('html, body').animate({
      scrollTop: anchor - 80
    }, 500);

    return false;
  });

    // observablehq
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import define from "https://api.observablehq.com/@trevianxyz/gears-turbine-workforce@486.js?v=3";
new Runtime().module(define, name => {
  if (name === "graphic") return new Inspector(document.querySelector("#observablehq-graphic-acb09c9f"));
  return ["update"].includes(name);
});


    // JQUERY TOGGLECLASS Fn on BUTTON
  $('#young-tab').click(function() {
    $('.young').toggleClass("active");

  $('#individual-tab').click(function() {
    $('.individual').toggleClass("active");

  $('#basic-tab').click(function() {
    $('.basic').toggleClass("active");

  $('#default-tab').click(function() {
    $('.default').toggleClass("active");

  $('#patron-tab').click(function() {
    $('.patron').toggleClass("active");

 });
});


