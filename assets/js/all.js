"use strict";

// slick套件載入不成功
$('.slick-body').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  autoplay: true,
  arrows: true,
  dots: false,
  responsive: [{
    breakpoint: 992,
    setting: {
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000
    }
  }, {
    breakpoint: 480,
    setting: {
      centerMode: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 4000
    }
  }]
});
//# sourceMappingURL=all.js.map
