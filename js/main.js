$('document').ready(function () {

    // ===============BURGER=================
    $('.burger').on('click', function () {
        $('.burger,.header__menu,.overlay').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.overlay').on('click', function () {
        $('.burger,.header__menu,.overlay').removeClass('active');
        $('body').removeClass('lock');
    });

    // ===============SLIDER=================
    $('.home__slider-body, .project__slider-body').slick({
        arrows: false,
    });

    $('.home__arrow-prev').on('click', function (e) {
        e.preventDefault();
        $('.home__slider-body').slick('slickPrev');
    });

    $('.home__arrow-next').on('click', function (e) {
        e.preventDefault();
        $('.home__slider-body').slick('slickNext');
    });
    $('.project__arrow-prev').on('click', function (e) {
        e.preventDefault();
        $('.project__slider-body').slick('slickPrev');
    });

    $('.project__arrow-next').on('click', function (e) {
        e.preventDefault();
        $('.project__slider-body').slick('slickNext');
    });

    // =================================

    if ($(window).width() < 768) {

        $('.testimonial__cards').slick({
            arrows: false,
        });
        $('.testimonial__arrow-prev').on('click', function (e) {
            e.preventDefault();
            $('.testimonial__cards').slick('slickPrev');
        });
    
        $('.testimonial__arrow-next').on('click', function (e) {
            e.preventDefault();
            $('.testimonial__cards').slick('slickNext');
        });

    }

});


