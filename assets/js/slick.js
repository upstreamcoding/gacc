$('.slicky-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    prevArrow:"<button type='button' class='slick-prev float-left'><i class='fa fa-angle-left fa-5x' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next float-right'><i class='fa fa-angle-right fa-5x' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true
    }
    },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});