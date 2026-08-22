(function() {
    'use strict';

    // ==========================================
    // 1. БУРГЕР-МЕНЮ
    // ==========================================

    var menuToggle = document.getElementById('menuToggle');
    var navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            menuToggle.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        navMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });

        document.addEventListener('click', function(e) {
            if (navMenu.classList.contains('open')) {
                var target = e.target;
                var isClickInside = navMenu.contains(target) || menuToggle.contains(target);
                if (!isClickInside) {
                    menuToggle.classList.remove('open');
                    navMenu.classList.remove('open');
                }
            }
        });
    }

    // ==========================================
    // 2. ПЛАВНАЯ ПРОКРУТКА
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                var offset = 80;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // 3. FADE-UP АНИМАЦИЯ
    // ==========================================

    var fadeElements = document.querySelectorAll('.fade-up');

    if (fadeElements.length) {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 });

        fadeElements.forEach(function(el) {
            observer.observe(el);
        });
    }

    // ==========================================
    // 4. ТАЙМЕР
    // ==========================================

    var targetDate = new Date('December 31, 2026 20:00:00').getTime();

    var daysEl = document.getElementById('cd-days');
    var hoursEl = document.getElementById('cd-hours');
    var minutesEl = document.getElementById('cd-minutes');
    var secondsEl = document.getElementById('cd-seconds');

    function updateCountdown() {
        var now = new Date().getTime();
        var diff = targetDate - now;

        if (diff <= 0) {
            if (daysEl) daysEl.textContent = '🎉';
            if (hoursEl) hoursEl.textContent = '🎉';
            if (minutesEl) minutesEl.textContent = '🎉';
            if (secondsEl) secondsEl.textContent = '🎉';
            return;
        }

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // ==========================================
    // 5. КОНФЕТТИ
    // ==========================================

    function createCelebration() {
        var emojis = ['🎉', '🥳', '✨', '🎂', '💫', '⭐', '🌟', '🎈', '🎊', '💖', '🌸', '🌺'];
        
        for (var i = 0; i < 60; i++) {
            setTimeout(function(index) {
                var el = document.createElement('div');
                el.style.position = 'fixed';
                el.style.left = Math.random() * 100 + '%';
                el.style.top = '-20px';
                el.style.zIndex = '9999';
                el.style.pointerEvents = 'none';
                el.style.fontSize = (Math.random() * 30 + 20) + 'px';
                el.style.transition = 'all ' + (2 + Math.random() * 2) + 's cubic-bezier(0.25, 0.1, 0.25, 1)';
                el.style.opacity = '1';
                el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                document.body.appendChild(el);
                
                var rotation = Math.random() * 720 - 360;
                var xOffset = (Math.random() - 0.5) * 300;
                
                setTimeout(function() {
                    el.style.transform = 'translate(' + xOffset + 'px, ' + (window.innerHeight + 50) + 'px) rotate(' + rotation + 'deg)';
                    el.style.opacity = '0';
                }, 50);
                
                setTimeout(function() {
                    el.remove();
                }, 5000);
            }, i * 50);
        }
    }

    // ==========================================
    // 6. ПЕЧАТАЮЩИЙСЯ ТЕКСТ
    // ==========================================

    function typeWriter(element, text, speed, callback) {
        if (!element) return;
        var i = 0;
        element.textContent = '';
        element.style.opacity = '1';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    document.addEventListener('DOMContentLoaded', function() {
        var typedEl = document.querySelector('.typed-text');
        if (typedEl) {
            var texts = [
                '✨ Добро пожаловать!',
                '🌟 Особенный вечер',
                '💫 Ждём вас!'
            ];
            var currentIndex = 0;
            
            function startTyping() {
                typeWriter(typedEl, texts[currentIndex], 50, function() {
                    setTimeout(function() {
                        currentIndex = (currentIndex + 1) % texts.length;
                        var deleteInterval = setInterval(function() {
                            if (typedEl.textContent.length > 0) {
                                typedEl.textContent = typedEl.textContent.slice(0, -1);
                            } else {
                                clearInterval(deleteInterval);
                                setTimeout(startTyping, 500);
                            }
                        }, 30);
                    }, 2500);
                });
            }
            startTyping();
        }
    });

    // ==========================================
    // 7. ПАДАЮЩИЕ ЗВЁЗДЫ
    // ==========================================

    function createFallingStars() {
        var container = document.createElement('div');
        container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;overflow:hidden;';
        document.body.appendChild(container);
        
        var emojis = ['✨', '⭐', '🌟', '💫'];
        
        for (var i = 0; i < 25; i++) {
            var star = document.createElement('div');
            var size = Math.random() * 20 + 15;
            var x = Math.random() * 100;
            var delay = Math.random() * 15;
            var duration = 10 + Math.random() * 15;
            
            star.style.cssText = 
                'position:absolute;' +
                'left:' + x + '%;' +
                'top:-40px;' +
                'font-size:' + size + 'px;' +
                'opacity:' + (0.1 + Math.random() * 0.2) + ';' +
                'animation:fallBall ' + duration + 's linear infinite;' +
                'animation-delay:' + delay + 's;' +
                'transform:rotate(' + (Math.random() * 360) + 'deg);';
            star.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            container.appendChild(star);
        }
    }

    setTimeout(createFallingStars, 500);

    // ==========================================
    // 8. СЧЁТЧИК ГОСТЕЙ
    // ==========================================

    var guestCount = 0;

    function updateGuestCounter() {
        var counter = document.querySelector('.guest-counter-number');
        if (counter) {
            guestCount++;
            counter.textContent = guestCount;
            counter.classList.add('pop');
            setTimeout(function() {
                counter.classList.remove('pop');
            }, 300);
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        var footer = document.querySelector('.site-footer .container');
        if (footer) {
            var counterHTML = document.createElement('div');
            counterHTML.className = 'guest-counter-wrap';
            counterHTML.innerHTML = `
                <p style="color:var(--text-secondary);font-size:14px;margin:0;">
                    👥 Подтвердили участие: 
                    <span class="guest-counter-number">0</span>
                    <span style="font-size:14px;color:var(--text-muted);"> человек</span>
                </p>
                <button class="guest-counter-btn" onclick="updateGuestCounter()">
                    ➕ Добавить
                </button>
            `;
            footer.appendChild(counterHTML);
        }
    });

    window.updateGuestCounter = updateGuestCounter;

    // ==========================================
    // 9. РЕАКЦИЯ НА КЛИК
    // ==========================================

    document.addEventListener('click', function(e) {
        if (e.target.closest('a, button, input, .custom-radio, .guest-counter-btn, .theme-toggle-btn, .scroll-top-btn')) return;
        
        var emojis = ['✨', '⭐', '🌟', '💫', '🎉', '💖', '🌸', '🌺'];
        var emoji = emojis[Math.floor(Math.random() * emojis.length)];
        
        for (var i = 0; i < 8; i++) {
            var el = document.createElement('div');
            el.style.position = 'fixed';
            el.style.left = e.clientX + 'px';
            el.style.top = e.clientY + 'px';
            el.style.zIndex = '9999';
            el.style.pointerEvents = 'none';
            el.style.fontSize = (Math.random() * 20 + 16) + 'px';
            el.style.transition = 'all ' + (0.5 + Math.random() * 0.5) + 's cubic-bezier(0.25, 0.1, 0.25, 1)';
            el.style.opacity = '1';
            el.textContent = emoji;
            document.body.appendChild(el);
            
            var angle = Math.random() * 2 * Math.PI;
            var distance = 50 + Math.random() * 100;
            var dx = Math.cos(angle) * distance;
            var dy = Math.sin(angle) * distance - 30;
            
            setTimeout(function() {
                el.style.transform = 'translate(' + dx + 'px, ' + dy + 'px) scale(0.3)';
                el.style.opacity = '0';
            }, 50);
            
            setTimeout(function() {
                el.remove();
            }, 1200);
        }
    });

    // ==========================================
    // 10. КНОПКА "НАВЕРХ"
    // ==========================================

    var scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-top-btn';
    scrollBtn.innerHTML = '✦';
    scrollBtn.title = 'Наверх';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ==========================================
    // 11. СМЕНА ТЕМЫ
    // ==========================================

    var themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.textContent = '🌙';
    themeBtn.title = 'Сменить тему';
    document.body.appendChild(themeBtn);

    var isDark = true;

    themeBtn.addEventListener('click', function() {
        var root = document.documentElement;
        
        if (isDark) {
            root.style.setProperty('--bg-primary', '#f1f5f9');
            root.style.setProperty('--bg-secondary', '#e2e8f0');
            root.style.setProperty('--bg-card', '#ffffff');
            root.style.setProperty('--bg-card-hover', '#f8fafc');
            root.style.setProperty('--text-primary', '#0a0e1a');
            root.style.setProperty('--text-secondary', '#475569');
            root.style.setProperty('--text-muted', '#94a3b8');
            root.style.setProperty('--border', 'rgba(0,0,0,0.08)');
            themeBtn.textContent = '☀️';
            isDark = false;
        } else {
            root.style.setProperty('--bg-primary', '#0a0e1a');
            root.style.setProperty('--bg-secondary', '#111827');
            root.style.setProperty('--bg-card', '#1a2332');
            root.style.setProperty('--bg-card-hover', '#1f2b3d');
            root.style.setProperty('--text-primary', '#f1f5f9');
            root.style.setProperty('--text-secondary', '#94a3b8');
            root.style.setProperty('--text-muted', '#64748b');
            root.style.setProperty('--border', 'rgba(255,255,255,0.06)');
            themeBtn.textContent = '🌙';
            isDark = true;
        }
    });

    // ==========================================
    // 12. ФОРМА RSVP
    // ==========================================

    var rsvpForm = document.getElementById('rsvp-form');
    var rsvpResult = document.getElementById('rsvp-result');
    var rsvpBtnText = document.getElementById('rsvp-btn-text');
    var rsvpBtnLoader = document.getElementById('rsvp-btn-loader');
    var rsvpSubmitBtn = document.getElementById('rsvp-submit-btn');

    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            rsvpSubmitBtn.disabled = true;
            rsvpBtnText.textContent = 'Отправка...';
            rsvpBtnLoader.style.display = 'inline';
            rsvpResult.style.display = 'none';
            
            var name = document.getElementById('rsvp-name').value.trim();
            var presence = document.querySelector('input[name="presence"]:checked').value;
            
            if (!name) {
                rsvpResult.style.display = 'block';
                rsvpResult.innerHTML = '❌ Введите имя';
                rsvpResult.className = 'result-error';
                rsvpSubmitBtn.disabled = false;
                rsvpBtnText.textContent = '🚀 Отправить';
                rsvpBtnLoader.style.display = 'none';
                return;
            }
            
            setTimeout(function() {
                rsvpSubmitBtn.disabled = false;
                rsvpBtnText.textContent = '🚀 Отправить';
                rsvpBtnLoader.style.display = 'none';
                rsvpResult.style.display = 'block';
                
                if (presence === 'Приду') {
                    rsvpResult.innerHTML = '✅ Спасибо ' + name + '! Ждём вас! ✨';
                    rsvpResult.className = 'result-success';
                    createCelebration();
                } else if (presence === 'Не приду') {
                    rsvpResult.innerHTML = '😔 Жаль, ' + name + '. Будем ждать в другой раз!';
                    rsvpResult.className = 'result-sad';
                } else {
                    rsvpResult.innerHTML = '🤔 ' + name + ', подумайте ещё! Будем рады видеть вас!';
                    rsvpResult.className = 'result-maybe';
                }
                
                rsvpForm.reset();
                document.querySelector('input[name="presence"][value="Приду"]').checked = true;
            }, 1500);
        });
    }

    // ==========================================
    // 13. КОНСОЛЬ
    // ==========================================

    console.log('%c✦ САЙТ-ПРИГЛАШЕНИЕ ✦', 'font-size: 24px; font-weight: bold; color: #fbbf24;');
    console.log('%c✨ Создано для портфолио', 'font-size: 16px; color: #94a3b8;');
    console.log('%c🔥 Все скрипты загружены!', 'font-size: 14px; color: #22c55e;');

})();