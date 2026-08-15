<?php
/**
 * Функции темы invite
 */

// ============================================================
// ПОДКЛЮЧЕНИЕ СТИЛЕЙ И СКРИПТОВ
// ============================================================
function invite_assets() {
    wp_enqueue_style('invite-style', get_stylesheet_uri());
    
    // Подключаем main.js и передаём ajax_url
    wp_enqueue_script('invite-main', get_template_directory_uri() . '/assets/js/main.js', array(), '1.0', true);
    wp_localize_script('invite-main', 'ajax_object', array(
        'ajax_url' => admin_url('admin-ajax.php')
    ));
}
add_action('wp_enqueue_scripts', 'invite_assets');

// ============================================================
// ОТПРАВКА RSVP УВЕДОМЛЕНИЙ НА ПОЧТУ
// ============================================================
function send_rsvp_email_callback() {
    $name = isset($_POST['name']) ? sanitize_text_field($_POST['name']) : 'Не указано';
    $vote = isset($_POST['vote']) ? sanitize_text_field($_POST['vote']) : 'Не указано';
    $date = isset($_POST['date']) ? sanitize_text_field($_POST['date']) : '14 августа 2026';
    $time = isset($_POST['time']) ? sanitize_text_field($_POST['time']) : '17:00';
    
    $to = 'sergey.cherokee@gmail.com'; // ЗАМЕНИТЕ НА ВАШ EMAIL
    $subject = '🎉 RSVP: ' . $name . ' - ' . $vote;
    $message = "👤 Имя: " . $name . "\n";
    $message .= "📌 Ответ: " . $vote . "\n";
    $message .= "📅 Дата: " . $date . "\n";
    $message .= "⏰ Время: " . $time . "\n\n";
    $message .= "---\nОтправлено с сайта-приглашения";
    
    $headers = array(
        'Content-Type: text/plain; charset=UTF-8',
        'From: Приглашение <no-reply@' . $_SERVER['HTTP_HOST'] . '>'
    );
    
    $result = wp_mail($to, $subject, $message, $headers);
    
    if ($result) {
        wp_send_json_success('Email отправлен');
    } else {
        wp_send_json_error('Ошибка отправки email');
    }
}
add_action('wp_ajax_send_rsvp_email', 'send_rsvp_email_callback');
add_action('wp_ajax_nopriv_send_rsvp_email', 'send_rsvp_email_callback');

// ============================================================
// РЕГИСТРАЦИЯ ТИПА ЗАПИСИ "ПРОЕКТЫ" (если нужно)
// ============================================================
function invite_portfolio_post_type() {
    register_post_type( 'portfolio', array(
        'labels' => array(
            'name'               => 'Проекты',
            'singular_name'      => 'Проект',
            'add_new'            => 'Добавить проект',
            'add_new_item'       => 'Добавить новый проект',
            'edit_item'          => 'Редактировать проект',
            'new_item'           => 'Новый проект',
            'view_item'          => 'Посмотреть проект',
            'search_items'       => 'Искать проекты',
            'not_found'          => 'Проектов не найдено',
        ),
        'public' => true,
        'has_archive' => false,
        'supports' => array( 'title', 'editor', 'thumbnail', 'excerpt' ),
        'menu_icon' => 'dashicons-portfolio',
    ) );
}
add_action('init', 'invite_portfolio_post_type');

// ============================================================
// ПОДДЕРЖКА МИНИАТЮР
// ============================================================
add_theme_support('post-thumbnails');

// ============================================================
// РЕГИСТРАЦИЯ МЕНЮ
// ============================================================
register_nav_menus(array(
    'primary' => 'Главное меню',
));
?>