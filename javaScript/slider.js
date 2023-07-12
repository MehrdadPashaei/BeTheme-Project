class Swiper {
    constructor(element, param2) {
        
    }

}

let swiper = new Swiper(document.querySelector('.swiper-container'), {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 5,
    spaceBetween: 50,
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});
swiper()