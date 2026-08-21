(function() {
    'use strict';

    // ==========================================
    // 1. БУРГЕР-МЕНЮ
    // ==========================================

    var header = document.getElementById('site-header');
    var menuToggle = document.getElementById('menuToggle');
    var navMenu = document.getElementById('navMenu');
    var overlay = document.getElementById('menuOverlay');
    var menuLinks = document.querySelectorAll('.nav-menu a');
    var body = document.body;

    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        }
    }

    function openMenu() {
        menuToggle.classList.add('open');
        navMenu.classList.add('open');
        overlay.classList.add('active');
        body.style.overflow = 'hidden';
    }

    function closeMenu() {
        menuToggle.classList.remove('open');
        navMenu.classList.remove('open');
        overlay.classList.remove('active');
        body.style.overflow = '';
    }

    if (menuToggle && navMenu && overlay) {
        menuToggle.addEventListener('click', function() {
            if (navMenu.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
        overlay.addEventListener('click', closeMenu);
        menuLinks.forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navMenu.classList.contains('open')) {
                closeMenu();
            }
        });
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
                closeMenu();
            }
        });
    }

    // ==========================================
    // 2. АККОРДЕОН
    // ==========================================

    var accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(function(item) {
        var headerEl = item.querySelector('.accordion-header');
        var bodyEl = item.querySelector('.accordion-body');
        if (headerEl && bodyEl) {
            headerEl.addEventListener('click', function() {
                var isOpen = item.classList.contains('open');
                accordionItems.forEach(function(el) {
                    el.classList.remove('open');
                    var b = el.querySelector('.accordion-body');
                    if (b) b.style.maxHeight = '0';
                });
                if (!isOpen) {
                    item.classList.add('open');
                    bodyEl.style.maxHeight = bodyEl.scrollHeight + 'px';
                }
            });
        }
    });

    // ==========================================
    // 3. ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
    // ==========================================

    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var offset = 80;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                if (navMenu && navMenu.classList.contains('open')) {
                    closeMenu();
                }
            }
        });
    });

    // ==========================================
    // 4. АНИМАЦИИ ПРИ СКРОЛЛЕ
    // ==========================================

    var animateElements = document.querySelectorAll('.animate-on-scroll, .animate-from-left, .animate-from-right, .animate-scale, .animate-timer-item, .accordion-item');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    animateElements.forEach(function(el) {
        observer.observe(el);
    });

    // ==========================================
    // 5. ТАЙМЕР ОБРАТНОГО ОТСЧЁТА
    // ==========================================

    function declension(number, forms) {
        var n = Math.abs(number) % 100;
        var n1 = n % 10;
        if (n > 10 && n < 20) return forms[2];
        if (n1 > 1 && n1 < 5) return forms[1];
        if (n1 === 1) return forms[0];
        return forms[2];
    }

    var targetDate = new Date('September 19, 2026 14:00:00').getTime();
    var daysEl = document.getElementById('timer-days');
    var hoursEl = document.getElementById('timer-hours');
    var minutesEl = document.getElementById('timer-minutes');
    var secondsEl = document.getElementById('timer-seconds');
    var daysLabel = document.getElementById('timer-days-label');
    var hoursLabel = document.getElementById('timer-hours-label');
    var minutesLabel = document.getElementById('timer-minutes-label');
    var secondsLabel = document.getElementById('timer-seconds-label');

    var wordForms = {
        days: ['День', 'Дня', 'Дней'],
        hours: ['Час', 'Часа', 'Часов'],
        minutes: ['Минута', 'Минуты', 'Минут'],
        seconds: ['Секунда', 'Секунды', 'Секунд']
    };

    var prevDays = -1,
        prevHours = -1,
        prevMinutes = -1,
        prevSeconds = -1;

    function updateTimer() {
        var now = new Date().getTime();
        var diff = targetDate - now;
        if (diff <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            daysLabel.textContent = 'Дней';
            hoursLabel.textContent = 'Часов';
            minutesLabel.textContent = 'Минут';
            secondsLabel.textContent = 'Секунд';
            return;
        }
        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        var daysStr = String(days).padStart(2, '0');
        var hoursStr = String(hours).padStart(2, '0');
        var minutesStr = String(minutes).padStart(2, '0');
        var secondsStr = String(seconds).padStart(2, '0');

        if (daysEl.textContent !== daysStr) daysEl.textContent = daysStr;
        if (hoursEl.textContent !== hoursStr) hoursEl.textContent = hoursStr;
        if (minutesEl.textContent !== minutesStr) minutesEl.textContent = minutesStr;
        if (secondsEl.textContent !== secondsStr) secondsEl.textContent = secondsStr;

        if (prevDays !== days) {
            daysLabel.textContent = declension(days, wordForms.days);
            prevDays = days;
        }
        if (prevHours !== hours) {
            hoursLabel.textContent = declension(hours, wordForms.hours);
            prevHours = hours;
        }
        if (prevMinutes !== minutes) {
            minutesLabel.textContent = declension(minutes, wordForms.minutes);
            prevMinutes = minutes;
        }
        if (prevSeconds !== seconds) {
            secondsLabel.textContent = declension(seconds, wordForms.seconds);
            prevSeconds = seconds;
        }
    }

    updateTimer();
    setInterval(updateTimer, 1000);

    console.log('✅ Все скрипты загружены!');
})();

(function() {
    
    function initSlider(trackSelector, prevSelector, nextSelector, dotsSelector) {
        var track = document.querySelector(trackSelector);
        var prevBtn = document.querySelector(prevSelector);
        var nextBtn = document.querySelector(nextSelector);
        var dotsContainer = document.querySelector(dotsSelector);
        
        if (!track) return;
        
        var slides = track.querySelectorAll('.slide');
        var total = slides.length;
        var current = 0;
        var isTransitioning = false;
        
        // Создаём точки
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            for (var i = 0; i < total; i++) {
                var dot = document.createElement('button');
                dot.className = 'dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', 'Перейти к слайду ' + (i + 1));
                (function(index) {
                    dot.addEventListener('click', function() {
                        if (!isTransitioning) goTo(index);
                    });
                })(i);
                dotsContainer.appendChild(dot);
            }
        }
        
        var dots = dotsContainer ? dotsContainer.querySelectorAll('.dot') : [];
        
        function goTo(index) {
            if (isTransitioning) return;
            if (index < 0) index = total - 1;
            if (index >= total) index = 0;
            current = index;
            
            isTransitioning = true;
            track.style.transform = 'translateX(-' + (current * 100) + '%)';
            
            if (dots.length) {
                for (var i = 0; i < dots.length; i++) {
                    dots[i].classList.toggle('active', i === current);
                }
            }
            
            setTimeout(function() {
                isTransitioning = false;
            }, 500);
        }
        
        function nextSlide() {
            if (!isTransitioning) goTo(current + 1);
        }
        
        function prevSlide() {
            if (!isTransitioning) goTo(current - 1);
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        
        // Клавиатура
        document.addEventListener('keydown', function(e) {
            var container = track.closest('.slider-container');
            if (!container) return;
            if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        });
        
        // Свайп на мобильных
        var startX = 0;
        var isDragging = false;
        
        track.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });
        
        track.addEventListener('touchend', function(e) {
            if (!isDragging) return;
            isDragging = false;
            var endX = e.changedTouches[0].clientX;
            var diff = startX - endX;
            if (Math.abs(diff) > 30) {
                if (diff > 0) nextSlide();
                else prevSlide();
            }
        }, { passive: true });
        
        // Обновление при ресайзе
        var resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                goTo(current);
            }, 100);
        });
        
        console.log('✅ Слайдер инициализирован:', trackSelector);
    }
    
    function initAll() {
        initSlider('.girls-track', '.girls-prev', '.girls-next', '.girls-dots');
        initSlider('.guys-track', '.guys-prev', '.guys-next', '.guys-dots');
        console.log('🎉 Все слайдеры Dress Code инициализированы!');
    }
    
    if (document.readyState === 'complete') {
        setTimeout(initAll, 150);
    } else {
        window.addEventListener('load', function() {
            setTimeout(initAll, 150);
        });
    }
    
})();
