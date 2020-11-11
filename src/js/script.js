$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.svg"></button>',
  });
});