//slider feedback section
const feedbackSlider = new Swiper('.feedback-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
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

// burger menu
const body = document.querySelector("body")
const button = document.querySelector(".burger-button")
const burger = document.querySelector(".burger-line")
const burgerNav = document.querySelector(".burger__nav")
const burgerActive = "burger-active"
const menuListActive = "nav-active"

button.onclick = (e) => {
    e.preventDefault()
    burger.classList.toggle(burgerActive)
    burgerNav.classList.toggle(menuListActive)
    body.classList.toggle("no-scroll")
}


