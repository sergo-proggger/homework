(function () {
  'use strict';

  /* -------------------------------------------------------
     1) Разбрасываем звёзды по фону блока (декор).
     Позиции/размеры чуть рандомизированы, но воспроизводимы
     на каждой перезагрузке — без "прыжков" при ресайзе.
  ------------------------------------------------------- */
  var STAR_LAYOUT = [
    { type: 'spark', x: 6,  y: 10, s: 1.1, o: 0.9, d: 3.2 },
    { type: 'dot',   x: 14, y: 28, s: 1,   o: 0.7, d: 4.1 },
    { type: 'dot',   x: 22, y: 14, s: 0.8, o: 0.6, d: 3.6 },
    { type: 'spark', x: 30, y: 34, s: 0.8, o: 0.8, d: 4.6 },
    { type: 'dot',   x: 9,  y: 46, s: 1,   o: 0.5, d: 5.1 },
    { type: 'dot',   x: 90, y: 12, s: 1,   o: 0.75, d: 3.9 },
    { type: 'spark', x: 94, y: 30, s: 1,   o: 0.85, d: 3.4 },
    { type: 'dot',   x: 84, y: 22, s: 0.9, o: 0.6, d: 4.4 },
    { type: 'dot',   x: 96, y: 46, s: 0.9, o: 0.55, d: 5.4 },
    { type: 'spark', x: 78, y: 42, s: 0.7, o: 0.7, d: 4.9 },
    { type: 'dot',   x: 3,  y: 60, s: 0.8, o: 0.45, d: 5.8 },
    { type: 'dot',   x: 98, y: 62, s: 0.8, o: 0.45, d: 5.2 }
  ];

  function renderStars() {
    var wrap = document.getElementById('show-block-stars');
    if (!wrap) return;

    var frag = document.createDocumentFragment();

    STAR_LAYOUT.forEach(function (star) {
      var el = document.createElement('span');
      el.className = 'sb-star sb-star--' + star.type;
      el.style.left = star.x + '%';
      el.style.top = star.y + '%';
      el.style.setProperty('--sb-star-s', star.s);
      el.style.setProperty('--sb-star-o', star.o);
      el.style.setProperty('--sb-star-d', star.d + 's');
      el.style.setProperty('--sb-star-delay', (star.x % 3) + 's');

      if (star.type === 'spark') {
        el.innerHTML =
          '<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M12 0c.8 5.6 2.4 8.4 8.4 9.6-6 1.2-7.6 4-8.4 9.6-.8-5.6-2.4-8.4-8.4-9.6C9.6 8.4 11.2 5.6 12 0z"/>' +
          '</svg>';
      }

      frag.appendChild(el);
    });

    wrap.appendChild(frag);
  }

  /* -------------------------------------------------------
     2) Кнопка «play» на превью видео.
     Реальный источник видео подставляется в data-video-src —
     пока просто переключаем состояние и подготавливаем крючок
     для встраивания плеера.
  ------------------------------------------------------- */
  function initPlayButton() {
    var section = document.getElementById('show-block');
    var button = document.getElementById('show-block-play');
    if (!section || !button) return;

    button.addEventListener('click', function () {
      var videoSrc = button.getAttribute('data-video-src');
      section.classList.add('is-playing');

      if (videoSrc) {
        var iframe = document.createElement('iframe');
        iframe.src = videoSrc;
        iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
        iframe.setAttribute('allowfullscreen', '');
        iframe.style.position = 'absolute';
        iframe.style.inset = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = '0';
        button.appendChild(iframe);
        button.disabled = true;
      } else {
        // Плейсхолдер до подключения реального видео.
        console.info('[show-block] сюда подключается видео (data-video-src на кнопке #show-block-play)');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderStars();
    initPlayButton();
  });
})();
