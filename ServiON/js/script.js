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
function burgerActive() {
    const body = document.querySelector("body")
    const button = document.querySelector(".burger-button")
    const burger = document.querySelector(".burger-line")
    const burgerNav = document.querySelector(".burger__nav")
    const burgerLinks = document.querySelectorAll(".scroll-link")
    const burgerActive = "burger-active"
    const menuListActive = "nav-active"

    button.onclick = (e) => {
        e.preventDefault()
        burger.classList.toggle(burgerActive)
        burgerNav.classList.toggle(menuListActive)
        body.classList.toggle("no-scroll")

    }

    burgerLinks.forEach(link => {
        link.onclick = (e) => {
            e.preventDefault()
            burger.classList.remove(burgerActive)
            burgerNav.classList.remove(menuListActive)
            body.classList.remove("no-scroll")
        }
    })
}
burgerActive()


//scroll on page
$('.scroll-link').click(function(e){
    e.preventDefault();
    let target = $($(this).attr('href'));
    if(target.length){
        let scrollTo = target.offset().top;
        $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
});

//plans cards
$('.plans__card').hover(function(){
    $(this).find(".plans__card-button").toggle("card-active")
    // const indexCard = $(this).index()
    // const plansCard = $('.plans__card')
    // plansCard.children(".plans__card-button").eq(indexCard).toggle("card-active");
});

