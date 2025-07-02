// слайдер хедер

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.hero__img');
    slides.forEach((slide, i) => {
        slide.classList.remove('active'); 
        if (i === index) {
            slide.classList.add('active'); 
        }
    });
}

function changeSlide(index) {
    currentSlide = index; 
    showSlide(currentSlide); 
}

showSlide(currentSlide);

//бургер

document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

// слайдер отзывы

new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    pagination: {
        el: '.testimonials__pagination',
    },
});

// слайдер отзывы 2 
new Swiper('.testimonials__slider', {

    spaceBetween: 0,
    slidesPerView: 1,

    navigation: {
        nextEl: '.testimonials__next',
        prevEl: '.testimonials__prev',
    },

    pagination: {
        el: '.testimonials__pagination2',
    },
});