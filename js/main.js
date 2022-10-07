//burger menu
let btn = document.querySelector(".menu__btn")
let burger = document.querySelector(".menu__links")

btn.addEventListener("click", function() {
    burger.classList.toggle("active")
})

//swiper
const swiper = new Swiper('.top-slider', {

    pagination: {
        el: '.top-slider-pagination',
        clickable: true
    },

    // Navigation arrows
    navigation: {
        // nextEl: '.top-slider__next-btn',
        // prevEl: '.top-slider__prev-btn',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    spaceBetween: 10,

    breakpoints: {
        768: {
            spaceBetween: 100
        },
    }
});

const swiperq = new Swiper('.quotes-slider', {

    pagination: {
        el: '.quotes-slider-pagination',
        clickable: true
    },

    spaceBetween: 50,

    breakpoints: {
        640: {
            spaceBetween: 100
        },
    }
});

//masonry
// var elem = document.querySelector('.grid');
// var msnry = new Masonry(elem, {
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: 270,
//     gutter: 30,
//     horizontalOrder: true
// });