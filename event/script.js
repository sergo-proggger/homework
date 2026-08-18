// ============================================================
// ОБЛОЖКА → ВОРОТА → КОНТЕНТ
// ============================================================
(function() {
    var cover = document.getElementById('coverOverlay');
    var enterBtn = document.getElementById('coverEnterBtn');
    var gate = document.getElementById('gateContainer');
    var audio = document.getElementById('bgAudio');

    if (!cover) {
        console.log('Обложка не найдена');
        return;
    }

    var musicStarted = false;

    function startMusic() {
        if (audio && !musicStarted) {
            audio.play().then(function() {
                musicStarted = true;
                console.log('🎵 Музыка запущена');
            }).catch(function(err) {
                console.log('❌ Ошибка аудио:', err);
            });
        }
    }

    function openGates() {
        startMusic();
        cover.classList.add('hidden');

        setTimeout(function() {
            if (gate) {
                gate.classList.add('gate-open');
                setTimeout(function() {
                    gate.classList.add('hidden');
                }, 3000);
            }
        }, 400);
    }

    if (enterBtn) {
        enterBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openGates();
        });
    }

    cover.addEventListener('click', function(e) {
        if (e.target === cover || (e.target.closest('.cover-content') && !e.target.closest('.cover-arrow'))) {
            openGates();
        }
    });

    document.addEventListener('touchstart', function() {
        if (!musicStarted) startMusic();
    }, { once: true });

    document.addEventListener('click', function() {
        if (!musicStarted) startMusic();
    }, { once: true });
})();

// ============================================================
// АНИМАЦИЯ ПОЯВЛЕНИЯ СЕКЦИЙ
// ============================================================
(function() {
    var sections = document.querySelectorAll('.fade-section');
    if (sections.length) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });
        sections.forEach(function(section) {
            observer.observe(section);
        });
    }
})();

// ============================================================
// АУДИО ПЛЕЕР
// ============================================================
(function() {
    var audio = document.getElementById('bgAudio');
    var toggleBtn = document.getElementById('audioToggle');
    var audioIcon = document.getElementById('audioIcon');
    var isPlaying = false;

    if (!audio) {
        console.log('❌ Аудио элемент не найден');
        return;
    }

    function playAudio() {
        if (!isPlaying) {
            audio.play().then(function() {
                isPlaying = true;
                if (audioIcon) audioIcon.textContent = '🔊';
                console.log('🎵 Музыка играет');
            }).catch(function(err) {
                console.log('❌ Ошибка воспроизведения:', err);
            });
        }
    }

    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            if (audioIcon) audioIcon.textContent = '🔇';
        } else {
            playAudio();
        }
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleAudio();
        });
    }

    audio.addEventListener('ended', function() {
        audio.currentTime = 0;
        audio.play().catch(function() {});
    });

    console.log('🎵 Аудио плеер готов');
})();

// ============================================================
// RSVP
// ============================================================
(function() {
    var rsvpBtn = document.getElementById('rsvpConfirmBtn');
    var rsvpState = document.getElementById('rsvpState');
    var rsvpNameForm = document.getElementById('rsvpNameForm');
    var rsvpSubmitName = document.getElementById('rsvpSubmitName');
    var rsvpCancelName = document.getElementById('rsvpCancelName');
    var finalPage = document.getElementById('finalPage');
    var nameInput = document.getElementById('guestName');

    if (!rsvpBtn) {
        console.log('RSVP элементы не найдены');
        return;
    }

    rsvpBtn.addEventListener('click', function() {
        rsvpState.style.display = 'none';
        rsvpNameForm.style.display = 'block';
        if (nameInput) nameInput.focus();
    });

    if (rsvpCancelName) {
        rsvpCancelName.addEventListener('click', function() {
            rsvpNameForm.style.display = 'none';
            rsvpState.style.display = 'block';
            if (nameInput) nameInput.value = '';
        });
    }

    if (rsvpSubmitName) {
        rsvpSubmitName.addEventListener('click', function() {
            var name = nameInput ? nameInput.value.trim() : '';
            if (!name) {
                alert('⚠️ Пожалуйста, введите ваше имя!');
                if (nameInput) nameInput.focus();
                return;
            }

            rsvpNameForm.style.display = 'none';
            finalPage.style.display = 'block';

            // Отправляем через Formspree (замените ID на свой)
            var formData = new FormData();
            formData.append('name', name);
            formData.append('vote', '✅ Придёт');

            fetch('https://formspree.io/f/ВАШ_ID_ФОРМЫ', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(function(response) {
                if (response.ok) {
                    console.log('✅ Email отправлен');
                } else {
                    console.log('❌ Ошибка отправки');
                }
            })
            .catch(function(error) {
                console.error('❌ Ошибка:', error);
            });

            console.log('🎉 Гость подтвердил присутствие:', name);
        });

        if (nameInput) {
            nameInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (rsvpSubmitName) rsvpSubmitName.click();
                }
            });
        }
    }
})();