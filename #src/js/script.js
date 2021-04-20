const feedbackSlider = new Swiper('.feedback-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // autoplay: true,
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
    spaceBetween: 20,
    keyboard: true,
    breakpoints:{
        942:{
            slidesPerView: 2,
            slidesPerGroup: 2
        }
    }
});