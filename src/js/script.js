$(document).ready(function () {
  // Slider
  $('.carousel__inner').slick({
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right.svg"></button>',
  });

  // Tabs
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function () {
    $(this)
      .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content--active').eq($(this).index()).addClass('catalog__content--active');
  });

  // Toggle card-content
  // $('.catalog-item__link').each(function (i) {
  //   $(this).on('click', function (e) {
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active')
  //   })
  // })

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content--active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list--active');
      })
    })
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
});