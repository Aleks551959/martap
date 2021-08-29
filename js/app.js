$('.header-slider').slick({

    arrows: false,
    dots: true,
    vertical: true,
    dotsClass: 'header-dots',
    autoplay: 2000

});

$('.header__menu-btn').on('click', function() {
    $('.menu__list').slideToggle();
});