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

  // Modal

  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.button--mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  // Validate

  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true

        }
      },
      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите минимум 2 символа")
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свой e-mail",
          email: "Неправильно введён e-mail"
        }
      }
    });
  };

  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');
});