<?php get_header(); ?>

<style>
/* ============================================================
   ОСНОВНЫЕ СТИЛИ
   ============================================================ */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Georgia', serif;
    background: #FDF8F0;
    color: #4A3525;
    line-height: 1.6;
    overflow-x: hidden;
    max-width: 100vw;
}

.container {
    max-width: 480px;
    margin: 0 auto;
    padding: 0 16px;
}

/* ============================================================
   ОБЪЁМНЫЙ ФОН С ЭФФЕКТАМИ
   ============================================================ */
.hero-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: radial-gradient(ellipse at 20% 50%, #8BAF5A 0%, #6A8F4A 40%, #4A7A2A 100%);
    overflow: hidden;
}

.hero-bg .light-spot {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.3;
    animation: lightPulse 4s ease-in-out infinite;
}

.hero-bg .light-spot:nth-child(1) {
    width: 400px;
    height: 400px;
    top: -100px;
    left: -100px;
    background: rgba(255, 230, 150, 0.5);
    animation-delay: 0s;
}

.hero-bg .light-spot:nth-child(2) {
    width: 300px;
    height: 300px;
    bottom: -50px;
    right: -50px;
    background: rgba(255, 200, 100, 0.4);
    animation-delay: 1.5s;
}

.hero-bg .light-spot:nth-child(3) {
    width: 250px;
    height: 250px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 220, 120, 0.2);
    animation-delay: 3s;
}

@keyframes lightPulse {
    0%, 100% { opacity: 0.2; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(1.2); }
}

.hero-bg .bg-animal {
    position: absolute;
    font-size: 6rem;
    opacity: 0.25;
    filter: drop-shadow(0 8px 30px rgba(0,0,0,0.15));
    animation: animalFloat 6s ease-in-out infinite;
}

.hero-bg .bg-animal:nth-child(1) { bottom: 10%; left: 2%; animation-delay: 0s; font-size: 7rem; opacity: 0.3; }
.hero-bg .bg-animal:nth-child(2) { bottom: 15%; right: 2%; animation-delay: 1.2s; font-size: 7rem; opacity: 0.3; }
.hero-bg .bg-animal:nth-child(3) { bottom: 5%; left: 25%; animation-delay: 2.5s; font-size: 3.5rem; opacity: 0.3; }
.hero-bg .bg-animal:nth-child(4) { bottom: 8%; right: 25%; animation-delay: 0.8s; font-size: 5rem; opacity: 0.25; }
.hero-bg .bg-animal:nth-child(5) { bottom: 12%; left: 48%; animation-delay: 1.8s; font-size: 5rem; opacity: 0.25; }
.hero-bg .bg-animal:nth-child(6) { bottom: 4%; left: 68%; animation-delay: 3.2s; font-size: 4rem; opacity: 0.25; }
.hero-bg .bg-animal:nth-child(7) { top: 20%; left: 8%; animation-delay: 0.5s; font-size: 4.5rem; opacity: 0.2; }
.hero-bg .bg-animal:nth-child(8) { top: 30%; right: 6%; animation-delay: 1.5s; font-size: 4.5rem; opacity: 0.2; }
.hero-bg .bg-animal:nth-child(9) { top: 50%; left: 15%; animation-delay: 2.2s; font-size: 3.5rem; opacity: 0.2; }
.hero-bg .bg-animal:nth-child(10) { top: 45%; right: 15%; animation-delay: 0.8s; font-size: 3.5rem; opacity: 0.2; }
.hero-bg .bg-animal:nth-child(11) { top: 15%; left: 40%; animation-delay: 1.8s; font-size: 4rem; opacity: 0.15; }
.hero-bg .bg-animal:nth-child(12) { top: 60%; left: 55%; animation-delay: 2.8s; font-size: 3rem; opacity: 0.15; }

@keyframes animalFloat {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-15px) scale(1.02); }
}

/* ============================================================
   ПРЕВЬЮ-ОБЛОЖКА
   ============================================================ */
.cover-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: linear-gradient(160deg, rgba(106, 143, 74, 0.95) 0%, rgba(74, 122, 42, 0.95) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    backdrop-filter: blur(4px);
}

.cover-overlay.hidden {
    opacity: 0;
    pointer-events: none;
    transform: scale(1.1);
}

.cover-content {
    text-align: center;
    padding: 30px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;
}

.cover-icon {
    font-size: 5rem;
    margin-bottom: 16px;
    animation: coverBounce 2s ease-in-out infinite;
    filter: drop-shadow(0 8px 30px rgba(0,0,0,0.2));
}

@keyframes coverBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

.cover-title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #FFFFFF;
    text-transform: uppercase;
    letter-spacing: 6px;
    line-height: 1.1;
    margin-bottom: 4px;
    text-align: center;
    text-shadow: 0 4px 30px rgba(0,0,0,0.15);
}

.cover-title .highlight {
    color: #F5E6C8;
}

.cover-subtitle {
    font-size: 1.2rem;
    color: #F5E6C8;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 12px;
    text-align: center;
    text-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

.cover-divider {
    width: 60px;
    height: 3px;
    background: #D4A373;
    margin: 10px auto;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(212, 163, 115, 0.3);
}

.cover-date {
    font-size: 1rem;
    color: #F5E6C8;
    letter-spacing: 2px;
    margin-bottom: 24px;
    text-align: center;
    text-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.cover-arrow {
    display: inline-block;
    font-size: 2rem;
    color: #FFFFFF;
    animation: arrowPulse 1.6s ease-in-out infinite;
    cursor: pointer;
    padding: 12px 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-radius: 50px;
    transition: all 0.3s;
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(4px);
    text-decoration: none;
    margin: 0 auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.cover-arrow:hover {
    background: rgba(255,255,255,0.2);
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
}

.cover-arrow span {
    display: block;
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 2px;
    margin-top: 4px;
    text-align: center;
}

@keyframes arrowPulse {
    0%, 100% { transform: translateY(0); opacity: 0.7; }
    50% { transform: translateY(10px); opacity: 1; }
}

.cover-animals {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    padding: 0 10px 10px;
    z-index: 2;
    pointer-events: none;
}

.cover-animal {
    font-size: 4rem;
    opacity: 0.9;
    text-shadow: 0 4px 20px rgba(0,0,0,0.15);
    animation: coverAnimalFloat 3s ease-in-out infinite;
    filter: drop-shadow(0 4px 15px rgba(0,0,0,0.1));
}

.cover-animal:nth-child(2) { animation-delay: 0.3s; }
.cover-animal:nth-child(3) { animation-delay: 0.6s; }
.cover-animal:nth-child(4) { animation-delay: 0.9s; }
.cover-animal:nth-child(5) { animation-delay: 1.2s; }
.cover-animal:nth-child(6) { animation-delay: 1.5s; }

@keyframes coverAnimalFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

.cover-cow .ear { display: inline-block; animation: coverEarWiggle 2s ease-in-out infinite; }
.cover-chicken .head { display: inline-block; animation: coverChickenPeck 1.5s ease-in-out infinite; }
.cover-pig .ear { display: inline-block; animation: coverEarWiggle 2.5s ease-in-out infinite; }
.cover-sheep .leg { display: inline-block; animation: coverLegMove 1.8s ease-in-out infinite; }
.cover-duck .head { display: inline-block; animation: coverDuckBob 2s ease-in-out infinite; }
.cover-horse .ear { display: inline-block; animation: coverEarWiggle 2.2s ease-in-out infinite; }

@keyframes coverEarWiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(15deg) scale(1.05); }
    75% { transform: rotate(-15deg) scale(1.05); }
}
@keyframes coverChickenPeck {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(-5deg); }
}
@keyframes coverLegMove {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
@keyframes coverDuckBob {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(5deg); }
}

/* ============================================================
   ДЕСКТОП: QR-КОД
   ============================================================ */
.desktop-warning {
    display: none;
    text-align: center;
    padding: 40px 20px;
    min-height: 100vh;
    background: #FDF8F0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.desktop-warning .icon { font-size: 4rem; margin-bottom: 16px; }
.desktop-warning h2 { font-size: 1.6rem; color: #4A3525; margin-bottom: 12px; }
.desktop-warning p { color: #5A4A3A; font-size: 1rem; max-width: 360px; }
.desktop-warning .qr-code { background: #fff; padding: 16px; border-radius: 16px; margin: 16px 0; border: 2px solid #E8DDD0; }
.desktop-warning .qr-code img { display: block; width: 180px; height: 180px; }

@media (min-width: 769px) {
    .mobile-content { display: none !important; }
    .desktop-warning { display: flex !important; }
}

@media (max-width: 768px) {
    .desktop-warning { display: none !important; }
    .mobile-content { display: block !important; }
}

/* ============================================================
   НАВИГАЦИЯ
   ============================================================ */
nav {
    background: #6A8F4A;
    padding: 14px 0;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

nav ul {
    display: flex;
    justify-content: center;
    gap: 16px;
    list-style: none;
    flex-wrap: wrap;
}

nav a {
    color: #FFFFFF;
    text-decoration: none;
    font-size: 0.7rem;
    font-family: 'Georgia', serif;
    letter-spacing: 0.5px;
    transition: color 0.3s;
    text-transform: uppercase;
    font-weight: 600;
}

nav a:hover { color: #F5E6C8; }

/* ============================================================
   СЕКЦИИ — УВЕЛИЧЕННОЕ РАССТОЯНИЕ МЕЖДУ БЛОКАМИ
   ============================================================ */
section {
    padding: 78px 0 !important;
    min-height: auto !important;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2;
}

.section-card {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(6px);
    border-radius: 24px !important;
    padding: 24px 20px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.08);
    border: 2px solid rgba(255,255,255,0.2);
    text-align: center;
    position: relative;
    z-index: 5;
}

/* Убираем лишние отступы у всех секций */
#main,
#info,
#wish,
#rsvp {
    padding: 78px 0 !important;
    margin: 0 !important;
}

#main .section-card,
#info .section-card,
#wish .section-card,
#rsvp .section-card {
    border-radius: 24px !important;
    margin: 0 !important;
}

/* Адаптив */
@media (max-width: 480px) {
    section {
        padding: 78px 0 !important;
    }
}

/* ============================================================
   ВОРОТА
   ============================================================ */
.gate-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.gate-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(74, 53, 37, 0.6);
    backdrop-filter: blur(8px);
    z-index: 1;
}

.gate-left,
.gate-right {
    position: absolute;
    top: 0;
    height: 100%;
    width: 50%;
    z-index: 2;
    background: #6A8F4A;
    transition: transform 1.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.gate-left { left: 0; transform: translateX(0); border-right: 8px solid #4A3525; }
.gate-right { right: 0; transform: translateX(0); border-left: 8px solid #4A3525; }

.gate-left .gate-text,
.gate-right .gate-text {
    font-size: 1.2rem;
    color: #F5E6C8;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 4px;
    position: absolute;
    bottom: 20%;
    text-align: center;
}

.gate-left .gate-text span,
.gate-right .gate-text span {
    display: block;
    font-size: 0.8rem;
    color: #D4A373;
}

.gate-open .gate-left { transform: translateX(-100%); }
.gate-open .gate-right { transform: translateX(100%); }
.gate-open::before { opacity: 0; transition: opacity 0.6s ease 0.8s; }
.gate-container.gate-open { pointer-events: none; }
.gate-container.hidden { display: none; }

@media (max-width: 480px) {
    .gate-left .gate-text,
    .gate-right .gate-text { font-size: 0.8rem; bottom: 15%; }
    .gate-left .gate-text span,
    .gate-right .gate-text span { font-size: 0.6rem; }
}

/* ============================================================
   ЖИВОТНЫЕ НА ФОНЕ
   ============================================================ */
.farm-animals {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}

.animal-cow { position: absolute; bottom: 10%; left: 2%; font-size: 9rem; opacity: 0.7 !important; text-shadow: 0 0 30px rgba(255,255,255,0.3); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-cow .ear { display: inline-block; animation: earWiggle 2s ease-in-out infinite; }
.animal-cow-2 { position: absolute; top: 20%; left: 12%; font-size: 6rem; opacity: 0.6 !important; text-shadow: 0 0 30px rgba(255,255,255,0.25); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-cow-2 .ear { display: inline-block; animation: earWiggle 2.8s ease-in-out infinite; }

.animal-horse { position: absolute; bottom: 22%; right: 2%; font-size: 9rem; opacity: 0.7 !important; text-shadow: 0 0 30px rgba(255,255,255,0.3); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-horse .ear { display: inline-block; animation: earWiggle 2.5s ease-in-out infinite; }
.animal-horse-2 { position: absolute; top: 35%; right: 8%; font-size: 6rem; opacity: 0.6 !important; text-shadow: 0 0 30px rgba(255,255,255,0.25); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-horse-2 .ear { display: inline-block; animation: earWiggle 3.2s ease-in-out infinite; }

.animal-chicken { position: absolute; bottom: 6%; left: 25%; font-size: 4.5rem; opacity: 0.8 !important; text-shadow: 0 0 30px rgba(255,255,255,0.3); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-chicken .head { display: inline-block; animation: chickenPeck 1.5s ease-in-out infinite; }
.animal-chicken-2 { position: absolute; top: 50%; left: 6%; font-size: 3.5rem; opacity: 0.7 !important; text-shadow: 0 0 30px rgba(255,255,255,0.25); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-chicken-2 .head { display: inline-block; animation: chickenPeck 1.8s ease-in-out infinite; }

.animal-pig { position: absolute; bottom: 8%; right: 25%; font-size: 7rem; opacity: 0.7 !important; text-shadow: 0 0 30px rgba(255,255,255,0.3); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-pig .ear { display: inline-block; animation: earWiggle 3s ease-in-out infinite; }
.animal-pig-2 { position: absolute; bottom: 40%; right: 32%; font-size: 5rem; opacity: 0.6 !important; text-shadow: 0 0 30px rgba(255,255,255,0.25); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-pig-2 .ear { display: inline-block; animation: earWiggle 2.2s ease-in-out infinite; }

.animal-sheep { position: absolute; bottom: 13%; left: 45%; font-size: 7rem; opacity: 0.7 !important; text-shadow: 0 0 30px rgba(255,255,255,0.3); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-sheep .leg { display: inline-block; animation: legMove 1.8s ease-in-out infinite; }
.animal-sheep-2 { position: absolute; top: 18%; right: 18%; font-size: 5rem; opacity: 0.6 !important; text-shadow: 0 0 30px rgba(255,255,255,0.25); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-sheep-2 .leg { display: inline-block; animation: legMove 2s ease-in-out infinite; }

.animal-duck { position: absolute; bottom: 4%; left: 65%; font-size: 5rem; opacity: 0.75 !important; text-shadow: 0 0 30px rgba(255,255,255,0.3); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-duck .head { display: inline-block; animation: duckBob 2s ease-in-out infinite; }
.animal-duck-2 { position: absolute; top: 45%; left: 48%; font-size: 4rem; opacity: 0.65 !important; text-shadow: 0 0 30px rgba(255,255,255,0.25); filter: drop-shadow(0 4px 20px rgba(0,0,0,0.1)); }
.animal-duck-2 .head { display: inline-block; animation: duckBob 2.2s ease-in-out infinite; }

@keyframes earWiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(20deg) scale(1.05); }
    75% { transform: rotate(-20deg) scale(1.05); }
}
@keyframes chickenPeck {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-25px) rotate(-8deg); }
}
@keyframes legMove {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-15px) scale(1.05); }
}
@keyframes duckBob {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-18px) rotate(10deg); }
}

/* ============================================================
   ГЛАВНАЯ
   ============================================================ */
.hero-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #6A8F4A;
    text-transform: uppercase;
    letter-spacing: 6px;
    margin-bottom: 4px;
}

.hero-subtitle {
    font-size: 1rem;
    color: #D4A373;
    font-weight: 600;
    letter-spacing: 3px;
}

.hero-name {
    font-size: 4rem;
    font-weight: 800;
    color: #4A3525;
    line-height: 1.1;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin: 6px 0;
}

.hero-age {
    display: inline-block;
    background: #D4A373;
    color: #fff;
    padding: 6px 28px;
    border-radius: 30px;
    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 4px;
    letter-spacing: 3px;
}

.hero-tagline {
    font-size: 1.5rem;
    font-weight: 700;
    color: #4A3525;
    margin: 14px 0 6px;
    letter-spacing: 1px;
}

.hero-tagline span {
    color: #6A8F4A;
}

.hero-farm-icons {
    font-size: 2.5rem;
    letter-spacing: 14px;
    margin: 8px 0;
}

.hero-date {
    font-size: 1.4rem;
    font-weight: 700;
    color: #D4A373;
    letter-spacing: 3px;
}

.hero-date span {
    color: #4A3525;
}

.hero-time {
    font-size: 1rem;
    color: #5A4A3A;
    margin-top: 2px;
}

.farm-badge {
    display: inline-block;
    background: rgba(106, 143, 74, 0.15);
    color: #6A8F4A;
    padding: 4px 16px;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: 1px solid rgba(106, 143, 74, 0.2);
}

/* ============================================================
   ДАТА И МЕСТО
   ============================================================ */
.info-grid { display: grid; gap: 10px; margin: 16px 0; text-align: left; }
.info-row { display: flex; align-items: center; gap: 12px; background: #FDF8F0; padding: 10px 14px; border-radius: 12px; }
.info-row .icon { font-size: 1.2rem; width: 28px; text-align: center; }
.info-row .label { font-weight: 600; color: #4A3525; font-size: 0.85rem; }
.info-row .value { color: #5A4A3A; font-size: 0.85rem; }
.address-link { color: #6A8F4A; text-decoration: underline; font-weight: 600; font-size: 0.85rem; }

/* ============================================================
   КАЛЕНДАРЬ — 2026 год
   ============================================================ */
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px;
    margin: 14px 0;
    text-align: center;
}

.calendar-grid .day-name {
    font-size: 0.55rem;
    color: #B09E8C;
    text-transform: uppercase;
    padding: 4px 0;
}

.calendar-grid .day {
    padding: 6px 0;
    font-size: 0.8rem;
    border-radius: 8px;
    background: rgba(255,255,255,0.4);
    color: #4A3525;
    transition: all 0.3s;
    position: relative;
}

.calendar-grid .day.active {
    background: #6A8F4A;
    color: #fff;
    font-weight: 700;
    position: relative;
    padding: 6px 0 8px 0;
    border-radius: 4px 4px 0 0;
}

.calendar-grid .day.active::before {
    content: '▲';
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    color: #6A8F4A;
    font-size: 0.8rem;
    text-shadow: 0 0 10px rgba(106, 143, 74, 0.3);
}

.calendar-grid .day.active::after {
    content: '~';
    position: absolute;
    top: -18px;
    left: 65%;
    color: rgba(255,255,255,0.3);
    font-size: 0.6rem;
    animation: smokeFloat 3s ease-in-out infinite;
}

@keyframes smokeFloat {
    0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
    50% { transform: translateY(-5px) scale(1.2); opacity: 0.6; }
}

.calendar-grid .day.active .fence {
    display: block;
    position: absolute;
    bottom: -2px;
    left: -2px;
    right: -2px;
    height: 4px;
    background: repeating-linear-gradient(
        90deg,
        #D4A373 0px,
        #D4A373 4px,
        transparent 4px,
        transparent 8px
    );
    border-radius: 0 0 4px 4px;
}

/* ============================================================
   ДРЕСС-КОД + WISH-ЛИСТ
   ============================================================ */
.dress-code {
    background: #FDF8F0;
    padding: 14px;
    border-radius: 12px;
    margin: 14px 0;
    border: 1px solid #E8DDD0;
}

.dress-code p { font-size: 0.85rem; color: #5A4A3A; margin: 0; }
.dress-code .label { font-weight: 600; color: #6A8F4A; text-transform: uppercase; letter-spacing: 1px; font-size: 0.75rem; }

.link-list { display: flex; flex-direction: column; gap: 8px; margin: 14px 0; }
.link-list a {
    color: #4A3525;
    text-decoration: none;
    padding: 10px 14px;
    background: #FDF8F0;
    border-radius: 12px;
    transition: background 0.3s;
    font-size: 0.9rem;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 10px;
}
.link-list a:hover { background: #F0E8DD; }
.link-list a .emoji { font-size: 1.2rem; }

.btn-wish {
    display: inline-block;
    background: #6A8F4A;
    color: #fff;
    padding: 12px 32px;
    border-radius: 40px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s;
    margin-top: 10px;
    letter-spacing: 1px;
}

.btn-wish:hover {
    background: #5A7A3A;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(106, 143, 74, 0.3);
}

/* ============================================================
   СТРАНИЦА 8 — ПОДТВЕРЖДЕНИЕ
   ============================================================ */
#rsvp .section-card {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(8px);
    border-radius: 30px;
    padding: 30px 20px;
    box-shadow: 0 8px 40px rgba(0,0,0,0.1);
    border: 2px solid rgba(255,255,255,0.3);
    text-align: center;
    position: relative;
    z-index: 5;
}

.btn-rsvp {
    display: inline-block;
    background: #6A8F4A;
    color: #fff;
    padding: 16px 40px;
    border: none;
    border-radius: 50px;
    font-size: 1.2rem;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Georgia', serif;
    transition: all 0.3s;
    letter-spacing: 1px;
    box-shadow: 0 4px 20px rgba(106, 143, 74, 0.3);
    width: 100%;
    max-width: 320px;
}

.btn-rsvp:hover {
    background: #5A7A3A;
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(106, 143, 74, 0.4);
}

.btn-rsvp:active {
    transform: scale(0.97);
}

#finalPage {
    animation: finalFadeIn 0.8s ease forwards;
}

@keyframes finalFadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}

@media (max-width: 480px) {
    .btn-rsvp {
        font-size: 1rem;
        padding: 14px 28px;
        max-width: 100%;
    }
    #finalPage h2 {
        font-size: 1.6rem;
    }
    .section-card {
        padding: 20px 14px;
    }
}

/* ============================================================
   АУДИО ПЛЕЕР
   ============================================================ */
.audio-player {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    background: rgba(74, 53, 37, 0.9);
    border-radius: 50px;
    padding: 8px 16px 8px 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    border: 1px solid #E8DDD0;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.audio-player button {
    background: none;
    border: none;
    color: #F5EDE3;
    font-size: 1.4rem;
    cursor: pointer;
    padding: 4px 8px;
    transition: transform 0.3s;
}

.audio-player button:hover { transform: scale(1.1); }
.audio-player .track-name { font-size: 0.65rem; color: #F5EDE3; font-weight: 600; max-width: 80px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ============================================================
   ФУТЕР
   ============================================================ */
footer {
    text-align: center;
    padding: 20px 0;
    color: #B09E8C;
    font-size: 0.75rem;
    background: #FDF8F0;
}

.rsvp-name-input input:focus {
    border-color: #6A8F4A;
    background: #FFFFFF;
}
.rsvp-name-input input::placeholder {
    color: #B09E8C;
}
.btn-rsvp-cancel {
    background: transparent !important;
    color: #B09E8C !important;
    border: 1px solid #E8DDD0 !important;
    padding: 12px 30px !important;
    border-radius: 40px !important;
    font-size: 0.95rem !important;
    cursor: pointer !important;
    font-family: 'Georgia', serif !important;
    transition: all 0.3s !important;
    width: 100% !important;
    max-width: 320px !important;
}
.btn-rsvp-cancel:hover {
    background: rgba(0,0,0,0.04) !important;
    border-color: #B09E8C !important;
}
.btn-rsvp-cancel:active {
    transform: scale(0.97);
}
</style>

<!-- ============================================================
   ДЕСКТОП: QR-КОД
   ============================================================ -->
<div class="desktop-warning">
    <div class="icon">🌾</div>
    <h2>Приглашение создано для телефона</h2>
    <p>Пожалуйста, откройте эту ссылку на мобильном устройстве, чтобы всё выглядело идеально.</p>
    <div class="qr-code">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=<?php echo urlencode(get_site_url()); ?>" alt="QR-код" />
    </div>
    <p style="font-size: 0.85rem; color: #B09E8C;">или отсканируйте QR-код</p>
</div>

<!-- ============================================================
   ПРЕВЬЮ-ОБЛОЖКА
   ============================================================ -->
<div class="cover-overlay" id="coverOverlay">
    <div class="cover-animals">
        <div class="cover-animal cover-cow"><span class="ear">🐄</span></div>
        <div class="animal-sheep"><span class="leg">🐑</span></div>
        <div class="cover-animal cover-chicken"><span class="head">🐔</span></div>
        <div class="cover-animal cover-pig"><span class="ear">🐷</span></div>
        <div class="cover-animal cover-sheep"><span class="leg">🐑</span></div>

    </div>

    <div class="cover-content">
        <div class="cover-icon">🚜</div>
        <div class="cover-title">
            <span class="highlight">ДОБРО</span> ПОЖАЛОВАТЬ
        </div>
        <div class="cover-subtitle">🌾 на ферму 🌾</div>
        <div class="cover-divider"></div>
        <p style="color:#F5E6C8; font-size:0.9rem; letter-spacing:1px; margin-bottom:8px; text-align:center;">
            Приглашение на день рождения
        </p>
        <div class="cover-date" style="text-align:center;">🎂 АРСЕНИЙ — 4 ГОДА 🎂</div>
        <a href="#" class="cover-arrow" id="coverEnterBtn" style="margin:0 auto;">
            ↓
            <span>Войти</span>
        </a>
    </div>
</div>

<!-- ============================================================
   ВОРОТА
   ============================================================ -->
<div class="gate-container" id="gateContainer">
    <div class="gate-left">
        <div class="gate-text">
            🌾 ДОБРО ПОЖАЛОВАТЬ 🌾
            <span>на ферму</span>
        </div>
    </div>
    <div class="gate-right">
        <div class="gate-text">
            🚜 ВХОД ОТКРЫТ 🚜
            <span>проходите!</span>
        </div>
    </div>
</div>

<!-- ============================================================
   ЖИВОТНЫЕ НА ФОНЕ
   ============================================================ -->
<div class="farm-animals">
    <div class="animal-cow"><span class="ear">🐄</span></div>
    <div class="animal-cow-2"><span class="ear">🐄</span></div>
    <div class="animal-horse"><span class="ear">🐴</span></div>
    <div class="animal-horse-2"><span class="ear">🐴</span></div>
    <div class="animal-chicken"><span class="head">🐔</span></div>
    <div class="animal-chicken-2"><span class="head">🐔</span></div>
    <div class="animal-pig"><span class="ear">🐷</span></div>
    <div class="animal-pig-2"><span class="ear">🐷</span></div>
    <div class="animal-sheep"><span class="leg">🐑</span></div>
    <div class="animal-sheep-2"><span class="leg">🐑</span></div>
    <div class="animal-duck"><span class="head">🦆</span></div>
    <div class="animal-duck-2"><span class="head">🦆</span></div>
</div>

<!-- ============================================================
   МОБИЛЬНЫЙ КОНТЕНТ
   ============================================================ -->
<div class="mobile-content">

    <nav>
        <ul>
            <li><a href="#main">🌾 Главная</a></li>
            <li><a href="#info">🗓️ Дата</a></li>
            <li><a href="#wish">🎁 Подарки</a></li>
            <li><a href="#rsvp">✉️ Будете ли?</a></li>
        </ul>
    </nav>

    <!-- ГЛАВНАЯ -->
    <section id="main" class="fade-section">
    <div class="container">
        <div class="section-card">
            <div class="hero-farm-icons">🚜 🌾 🐄 🌻</div>
            
            <p style="font-size: 25px; color:#5A4A3A; margin-bottom:6px; line-height:1.5;">
                Совсем скоро на нашей ферме состоится большое событие — <strong style="color:#4A3525;">Арсению 4 года!</strong>
            </p>
            
            <div style="font-size:1.6rem; font-weight:700; color:#6A8F4A; margin:8px 0 10px;">
                🌾 Ворота открыты 🌾
            </div>
            
            <div class="divider"></div>
            
            <div class="hero-date">📅 <span>СУББОТА 14 АВГУСТА</span> 🎂</div>
        </div>
    </div>
</section>

    <!-- ДАТА И МЕСТО -->
    <section id="info" class="fade-section">
        <div class="container">
            <div class="section-card">
                <span class="farm-icon">🗓️</span>
                <h2 style="font-size:1.6rem; color:#4A3525; margin-bottom:4px;">Дата и место</h2>
                <p class="subtitle" style="color:#6A8F4A; font-weight:600; margin-bottom:12px;">🐓 Ждём вас на ферме! 🐓</p>
                <div class="info-grid">
                    <div class="info-row">
                        <span class="icon">📅</span>
                        <span class="label">Дата:</span>
                        <span class="value">14 августа 2026, пятница</span>
                    </div>
                    <div class="info-row">
                        <span class="icon">⏰</span>
                        <span class="label">Время:</span>
                        <span class="value">Сбор гостей с 17:00</span>
                    </div>
                    <div class="info-row">
                        <span class="icon">📍</span>
                        <span class="label">Место:</span>
                        <span class="value">КП «Резиденция Булатово», 223<br>Московская область</span>
                    </div>
                    <div class="info-row" style="justify-content: center; gap: 8px; background: transparent; padding: 0; flex-wrap: wrap;">
                        <span style="font-size: 0.85rem; color: #5A4A3A;">🚗</span>
                        <a href="https://yandex.ru/maps/?rtext=~55.441619,37.424280&rtt=auto" class="address-link" target="_blank">📱 Схема проезда</a>
                        <span style="color: #B09E8C;">|</span>
                        <a href="https://yandex.ru/maps/1/moscow-and-moscow-oblast/house/kp_rezidentsiya_bulatovo_223/Z04YcgVkSkcAQFtvfXh1cHliYA==/?ll=37.424327%2C55.441515&z=17" class="address-link" target="_blank">🗺️ Яндекс.Карты</a>
                    </div>
                </div>
                <div style="margin: 14px 0 6px;">
                    <p style="font-size: 0.8rem; color: #6A8F4A; font-weight: 600;">🌾 Август 2026 🌾</p>
                    <div class="calendar-grid">
                        <span class="day-name">Пн</span>
                        <span class="day-name">Вт</span>
                        <span class="day-name">Ср</span>
                        <span class="day-name">Чт</span>
                        <span class="day-name">Пт</span>
                        <span class="day-name">Сб</span>
                        <span class="day-name">Вс</span>
                        <span class="day"></span><span class="day"></span><span class="day"></span><span class="day"></span><span class="day"></span>
                        <span class="day">1</span><span class="day">2</span>
                        <span class="day">3</span><span class="day">4</span><span class="day">5</span><span class="day">6</span><span class="day">7</span><span class="day">8</span><span class="day">9</span>
                        <span class="day">10</span><span class="day">11</span><span class="day">12</span><span class="day">13</span>
                        <span class="day active">14</span>
                        <span class="day">15</span><span class="day">16</span>
                        <span class="day">17</span><span class="day">18</span><span class="day">19</span><span class="day">20</span><span class="day">21</span><span class="day">22</span><span class="day">23</span>
                        <span class="day">24</span><span class="day">25</span><span class="day">26</span><span class="day">27</span><span class="day">28</span><span class="day">29</span><span class="day">30</span>
                        <span class="day">31</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ДРЕСС-КОД + WISH-ЛИСТ -->
    <section id="wish" class="fade-section">
        <div class="container">
            <div class="section-card">
                <span class="farm-icon">👗</span>
                <h2 style="font-size:1.6rem; color:#4A3525; margin-bottom:4px;">Дресс-код</h2>
                <p class="subtitle" style="color:#6A8F4A; font-weight:600; margin-bottom:12px;">
                    🌾 Фермерский стиль! Будем рады, если вы поддержите тематику праздника. 🌾
                </p>

                <div class="divider"></div>

                <span class="farm-icon" style="font-size:2rem;">🎁</span>
                <h2 style="font-size:1.6rem; color:#4A3525; margin-bottom:4px;">Пожелания и подарки</h2>
                <p class="subtitle" style="color:#6A8F4A; font-weight:600; margin-bottom:12px;">💝 Ваше присутствие — лучший подарок 💝</p>
                
                <div style="display: flex; justify-content: center; gap: 20px; margin: 16px 0 12px; flex-wrap: wrap;">
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; width: 80px;">
                        <span style="font-size: 2.8rem;">🧱</span>
                        <span style="font-size: 0.65rem; color: #5A4A3A; text-align: center;">Конструктор LEGO</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; width: 80px;">
                        <span style="font-size: 2.8rem;">🧣</span>
                        <span style="font-size: 0.65rem; color: #5A4A3A; text-align: center;">Детское полотенце</span>
                    </div>
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; width: 80px;">
                        <span style="font-size: 2.8rem;">📚</span>
                        <span style="font-size: 0.65rem; color: #5A4A3A; text-align: center;">Книга</span>
                    </div>
                </div>

                <div style="background: rgba(255,255,255,0.5); border-radius: 16px; padding: 12px 16px; margin: 8px 0; border-left: 4px solid #6A8F4A;">
                    <p style="font-size: 0.95rem; color: #5A4A3A; text-align: center; margin: 0;">
                        🎁 Если вы хотите порадовать <strong>Арсения</strong>, мы подготовили полный список идей для вдохновения.
                    </p>
                    <a href="https://followish.io/mywishlist/o7risgykucpt71" class="btn-wish">📋 Перейти к списку →</a>
                </div>

                <div class="divider"></div>
            </div>
        </div>
    </section>

<!-- СТРАНИЦА 8 — ПОДТВЕРЖДЕНИЕ -->
<section id="rsvp" class="fade-section">
    <div class="container">
        <div class="section-card">
            <!-- СОСТОЯНИЕ 1: Вопрос и кнопка -->
            <div id="rsvpState">
                <span class="farm-icon">🐄</span>
                <h2 style="font-size:1.8rem; color:#4A3525; margin-bottom:4px;">Вы будете с нами?</h2>
                <p class="subtitle" style="color:#6A8F4A; font-weight:500; margin-bottom:16px;">
                    Нам будет очень приятно узнать, сможете ли вы приехать.
                </p>
                <button class="btn-rsvp" id="rsvpConfirmBtn">✨ Мы придём!</button>
                <p style="font-size: 0.75rem; color: #B09E8C; margin-top: 12px;">
                    🌾 Нажмите на кнопку, чтобы подтвердить своё присутствие
                </p>
            </div>

            <!-- СОСТОЯНИЕ 2: Плашка с именем (скрыта) -->
            <div id="rsvpNameForm" style="display: none;">
                <span class="farm-icon">✍️</span>
                <h2 style="font-size:1.6rem; color:#4A3525; margin-bottom:4px;">Введите ваше имя</h2>
                <p style="font-size:0.95rem; color:#5A4A3A; margin-bottom:16px;">
                    Пожалуйста, представьтесь, чтобы мы знали, кто придёт 🎉
                </p>
                <div class="rsvp-name-input" style="margin-bottom:16px;">
                    <input type="text" id="guestName" placeholder="Например: Анна" 
                           style="width:100%; padding:14px 18px; border:2px solid #E8DDD0; border-radius:14px; font-size:1rem; font-family:'Georgia',serif; background:#FAF6F0; color:#4A3525; outline:none; transition:border-color 0.3s;" />
                </div>
                <button class="btn-rsvp" id="rsvpSubmitName">✅ Подтвердить</button>
                <button class="btn-rsvp-cancel" id="rsvpCancelName" style="margin-top:8px; background:transparent; color:#B09E8C; border:1px solid #E8DDD0; padding:12px 30px; border-radius:40px; font-size:0.95rem; cursor:pointer; font-family:'Georgia',serif; transition:all 0.3s;">
                    🔙 Назад
                </button>
            </div>

            <!-- СОСТОЯНИЕ 3: Финальная страница (скрыта) -->
            <div id="finalPage" style="display: none;">
                <div style="background: rgba(106, 143, 74, 0.08); border-radius: 24px; padding: 32px 20px; border: 2px solid #6A8F4A;">
                    <span style="font-size: 3.5rem; display: block; margin-bottom: 8px;">🎂</span>
                    <h2 style="font-size: 2rem; color: #4A3525; margin-bottom: 6px;">До встречи на ферме!</h2>
                    <p style="font-size: 1.05rem; color: #5A4A3A; margin-bottom: 6px;">
                        Мы уже с нетерпением ждём этот день.
                    </p>
                    <p style="font-size: 1.2rem; color: #6A8F4A; font-weight: 600; margin-bottom: 6px;">
                        До скорой встречи!
                    </p>
                    <p style="font-size: 1rem; color: #D4A373; margin-top: 8px;">
                        С любовью, семья Арсения 🤎
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

    <footer>
        <div class="container">
            <p>🚜 🌾 С любовью, семья Арсения 🌾 🚜</p>
            <p style="font-size: 0.65rem; color: #B09E8C; margin-top: 4px;">🐄 Сделано специально для мобильных устройств 🐄</p>
        </div>
    </footer>

</div>

<!-- ============================================================
   АУДИО ПЛЕЕР
   ============================================================ -->
<div class="audio-player" id="audioPlayer">
    <button id="audioToggle" aria-label="Включить/выключить музыку">
        <span id="audioIcon">🔊</span>
    </button>
    <span class="track-name">🎵 Cotton Eye Joe</span>
</div>

<audio id="bgAudio" loop preload="auto">
    <source src="http://invite.local/wp-content/uploads/2026/07/Campbell_Brothers_-_Cotton_Eye_Joe_SkySound.cc.mp3" type="audio/mpeg">
</audio>

<?php get_footer(); ?>