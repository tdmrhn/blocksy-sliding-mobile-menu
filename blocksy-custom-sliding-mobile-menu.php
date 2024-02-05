<?php
/*
Plugin Name: Blocksy Custom Sliding Mobile Menu
Description: Custom sliding mobile menu, only works for Content Blocks > WP Core Navigation Block (add ct-sliding class)
Version: 0.1
Author: dmrhn
Author URI: https://dmrhn.com
*/

add_action('wp_enqueue_scripts', function () {
    $plugin_data = get_file_data(__FILE__, array('Version' => 'Version'));
    $version = $plugin_data['Version'];

    wp_enqueue_style('blocksy-sliding-menu-styles', plugin_dir_url(__FILE__) . 'styles.min.css', array(), $version, 'all');
    wp_enqueue_script('blocksy-sliding-menu-script', plugin_dir_url(__FILE__) . 'script.min.js', array(), $version, true);
}, 90);
