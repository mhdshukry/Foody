var swiper = new swiper('.review-slider', {
    // Optional parameters
    spaceBetween: 20,
    loop: true,

    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidePerView: 1,
        },
        768: {
            slidePerView: 2,
        },
        1020: {
            slidePerView: 3,
        },
        1780: {
            slidePerView: 4,
        },
        2420: {
            slidePerView: 5,
        },
        3120: {
            slidePerView: 6,
        },
    },

});


var swiper = new Swiper(".container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});
