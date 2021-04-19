const feedbackSlider = new Swiper('.feedback-slider', {
    slidesPerView: 2,
    navigation: {
        nextEl: '.feedback-slider-right',
        prevEl: '.feedback-slider-left',
    },
    loop: true,
    pagination: {
        el: '.feedback-slider-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    spaceBetween: 134,
    keyboard: true,
});