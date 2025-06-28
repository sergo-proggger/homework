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

// видео

const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

video.addEventListener('pause', () => {
    playButton.style.display = 'block';
});

video.addEventListener('play', () => {
    playButton.style.display = 'none';
});
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.style.display = 'none'; 
    }
});
video.addEventListener('ended', () => {
    playButton.style.display = 'none';
});

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