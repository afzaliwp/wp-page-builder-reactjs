<?php
/*
Plugin Name: AfzaliWP Page Builder
Plugin URI: https://afzaliwp.com/afzaliwp-page-builder
Description: This is a page builder plugin powered by ReactJS.
Author: Mohammad Afzali (AfzaliWP)
Version: 1.0.0
Author URI: https://afzaliwp.com
Text domain: afzali
*/

/**
 * Plugin URL
 *
 * @since 1.0.0
 *
 * @var string The plugin url.
 */
define( 'AFZALIWP_URL', trailingslashit( plugin_dir_url( __FILE__ ) ) );

/**
 * Dist Directory
 *
 * @since 1.0.0
 */
define( 'AFZALIWP_DIST', trailingslashit( plugin_dir_url( __FILE__ ) . '/dist/' ) );


//Add page template to the WordPress file system
add_filter( 'page_template', 'afzaliwp_page_template' );
function afzaliwp_page_template( $page_template ){
    if ( get_page_template_slug() == 'page-builder-template.php' ) {
        $page_template = dirname( __FILE__ ) . '/page-builder-template.php';
    }

    return $page_template;
}

/**
 * Add "Custom" template to page attribute template section.
 */
add_filter( 'theme_page_templates', 'afzaliwp_add_template_to_select', 10, 4 );
function afzaliwp_add_template_to_select( $post_templates, $wp_theme, $post, $post_type ) {
    $post_templates['page-builder-template.php'] = esc_html__( 'Afzaliwp Page Builder', 'afzali' );

    return $post_templates;
}