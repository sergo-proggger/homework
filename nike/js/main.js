document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})

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