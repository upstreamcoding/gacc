var stripeKey = (window.location.host.search('upstreamcoding') >= 0) ? 'pk_live_HGTm3HmmkRZiGd4sMZ7cu2rj' : 'pk_test_ZIeS6KHOcDTjgGMnynizQ072';
var stripe = Stripe(stripeKey);
var UPSTREAM_CODING = '7bc6APXSkbx7hNHrVHljjm';
var PITTSBURGH = '6Mrrk5VeyUKjs0ROPaCIWJ';

function buyMembership(target, type) {
  var test = (window.stripe._keyMode === 'test') ? true : false;
  // var sku = (test) ? window.UPSTREAM.checkout.skutest : window.UPSTREAM.checkout.sku;
  var plan = (test) ? window.UPSTREAM.checkout.plantest : window.UPSTREAM.checkout.plan;
  var membership = window.UPSTREAM.checkout.membership;
  // var membershipActivation = (test) ? 'sku_Eu5n4aX2kTKYVv' : 'sku_Eu5mqiDyfq0QU6';
  var codingSeries = {
    // Intensives
    react: {
      classId: '1whPZZHrKXrsJIUQxGW4Ut',
      stripeSku: (test) ? 'sku_GVSFRVKyaEDUGI' : 'sku_GVSEZ5adhINCJJ'
    },
    python: {
      classId: '4JhvfaVPo3oR0EelGNQwTn',
      stripeSku: (test) ? 'sku_FE1aCX5oKAAaK8' : 'sku_FE1Xez10IUJEzy'
    },
    kotlin: {
      classId: '8ZtSJGWiiRIhV8bArYKkm',
      stripeSku: (test) ? 'sku_GVSNJtu8vq2y5Q' : 'sku_GVSJCN6NCen652'
    },
    // Orbits
    webdev: {
      classId: '6vmNH1lMAeBddDOeigMFoN',
      // stripeSku: (test) ? 'sku_EwzWFY5NzcBhCl' : 'sku_EwzeUWR54lM9BO'
    },
    webdev1: {
      classId: '55KTxejj0ImqC6ZHXEr5rU',
      stripeSku: (test) ? 'sku_IjPZG57emMB9Rj' : 'sku_IjPYDt3cayaa2T',
      promo: {
        upskill20: {
          stripeSku: (test) ? 'sku_IqPDUJuT15lGXx' : 'sku_IqPA4lEvcqVUIX'
        }
      }
    },
    javascript: {
      classId: '44pvlTkmyuZYwmcWCdEVsB',
      stripeSku: (test) ? 'sku_FE1JeAQnmooUg2' : 'sku_FE18EJPV9AR5zb'
    }
  };
  var series = '';
  var referral = '';
  var items = [];
  var membership = 'premium';
  var planData = { plan, quantity: 1 };
  var cancelUrl = 'https://upstreamcoding.com/membership?ref=membershipcancel';

  var searchObj = searchToObject();

  if (searchObj) {
    // PROMO (membership)
    if (searchObj.promo) {
      if (searchObj.promo === 'bundle') {
        planData.plan = (test) ? 'plan_H3uWWuxCM5Y5Tl' : 'plan_H3uVhdg4kU5C9g';
      }
      if (searchObj.promo === 'together') {
        series = '';
        membership = 'starter';
        planData.plan = (test) ? 'plan_H3uWWuxCM5Y5Tl' : 'plan_H3uVhdg4kU5C9g'; // 60-Day
      }
      if (searchObj.promo === 'audit') {
        series = '';
        membership = 'starter';
        // planData.plan = (test) ? 'plan_H9r6eKcHEvmjEb' : 'plan_H9r8fpEUUGvarE'; // 14-Day Trial
        planData.plan = (test) ? 'price_1GrzmwIhTPMiKcYmMFGQPiFd' : 'price_1GrzVrIhTPMiKcYmp5nf1bYM'; // 30-Day Trial
      }
      if (searchObj.promo === 'hardship') {
        series = '';
        membership = 'starter';
        planData.plan = (test) ? 'plan_H0oerpqInWcVag' : 'plan_H0nhye8r9DLcaQ'; // Financial Hardship Membership
      }
    }

    // SERIES
    if (searchObj.series) {
      items.push({ sku: codingSeries[searchObj.series].stripeSku, quantity: 1 });

      series = '/' + codingSeries[searchObj.series].classId;
    }

    // if (searchObj.referral) {
    //   referral = '&referral=' + searchObj.referral;
    // }
  }

  // WEBDEV
  if (series === '' && membership !== 'starter') {
    series = '/' + codingSeries['webdev'].classId;
  }

  if (planData && planData.plan) {
    items.push(planData);
  }

  if (window.UPSTREAM.checkout) {
    if (window.UPSTREAM.checkout.series) {
      var checkoutSeries = window.UPSTREAM.checkout.series;
      // SKU
      if (window.UPSTREAM.checkout.sku || window.UPSTREAM.checkout.skutest) {
        var seriesDataFormatted = { sku: codingSeries[checkoutSeries].stripeSku, quantity: 1 };

        // Promo & Series Promo
        if (searchObj) {
          if (searchObj.promo && codingSeries[checkoutSeries].promo) {
            var checkoutSeriesPromo = codingSeries[checkoutSeries].promo;
            var promo = checkPromoCode(searchObj.promo);

            if (checkoutSeriesPromo[promo]) {
              seriesDataFormatted.sku = checkoutSeriesPromo[promo].stripeSku;
            }
          }
        }

        items.push(seriesDataFormatted);

        series = '/' + codingSeries[checkoutSeries].classId;
      }

      // I LOVE PGH
      if (promo === 'ilovepgh' && codingSeries[checkoutSeries] && codingSeries[checkoutSeries].classId) {
        document.location = 'https://app.turbinelms.com/login/upstreamcoding/?action=signup&classId=' + codingSeries[checkoutSeries].classId;

        return false;
      }

      if (window.UPSTREAM.checkout.cancelurl) {
        cancelUrl = window.UPSTREAM.checkout.cancelurl;
      }
    }
  }

  var org = UPSTREAM_CODING;
  var location = PITTSBURGH;
  var successUrl = window.location.protocol + '//auth.turbinelms.com/register/student/' + membership + '/' + org + '/' + location + series + referral; // TODO use login/upstreamcoding?action=signup&classId=

  window.stripe.redirectToCheckout({
    items,
    // Note that it is not guaranteed your customers will be redirected to this
    // URL *100%* of the time, it's possible that they could e.g. close the
    // tab between form submission and the redirect.
    successUrl,
    cancelUrl,
  }).then(function (result) {
    console.error(result);

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
    }
  });
}

function bindMembershipModalEvents(target) {
  if (!window.UPSTREAM) window.UPSTREAM = {}

  // data-sku="xxx"
  // data-skutest="xxx"
  // data-plan="yyy"
  // data-plantest="yyy"
  // data-membership="premium"

  window.UPSTREAM.checkout = target.dataset;

  $('#tos--accept-btn').on('click', function() {
    $('#tos--accept-check').trigger('click');
    buyMembership(target);
  });
  $('#tos--accept-check').on('click', function(e) {
    if (e.currentTarget.checked) {
      $('#tos--accept-btn').removeAttr('disabled');
    } else {
      $('#tos--accept-btn').attr('disabled', '');
    }
  });
}

function membershipChart() {
  $('tr > td:first-child, tr > th:first-child').attr('colspan', 2);
  $('.membership-btn-cell').removeAttr('colspan');

  if (window.mediaQuery.matches) {
    // Web
    $('.sep').attr('colspan', 4);
  } else {
    // Mobile
    $('.sep').attr('colspan', 12);
    $('.membership-btn-cell').attr('colspan', 12);
  }
}

function membershipEventHandlers() {
  window.mediaQuery = window.matchMedia('(min-width: 991px)');
  window.mediaQuery.addListener(membershipChart);

  membershipChart();

  var searchObj = searchToObject();

  if (searchObj && document.location.pathname === '/membership') {
    if (searchObj.series) {
      $('#series-addon').show();
      $('.card-series-container').hide();
      $('.card-series-container[series="' + searchObj.series + '"]').show();
      $('.series-addon-price').hide();
      $('.series-addon-price[series="' + searchObj.series + '"]').show();

      redeemDiscount('bundle');
    }
  }

  $('#membership-chart').on('click', '.nav-item', function(event) {
    event.stopImmediatePropagation();
    var pos = $(this).index() + 2;

    $('tr').find('td:not(:eq(0))').hide();
    $('td:nth-child(' + pos + ')').css('display','table-cell');
    $('tr').find('th:not(:eq(0))').hide();
    $(this).siblings().find('.nav-link').removeClass('active');
    $(this).children('.nav-link').addClass('active');
  });

  $('#tos--accept-modal').on('show.bs.modal', function (event) {
    bindMembershipModalEvents(event.relatedTarget);
  });
}
