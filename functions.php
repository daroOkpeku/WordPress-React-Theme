<?php




function enqueue_react_app_assets()
{
    wp_enqueue_script(
        'my-react-app-script', // A unique handle
        get_template_directory_uri(__FILE__) . '/build/index.js', // Path to your compiled script
        ['wp-element'], // Dependency on the 'wp-element' library
        time(), // Version number (use null or wp_get_theme()->get('Version') for production)
        true // Load in the footer
    );
}
add_action('wp_enqueue_scripts', 'enqueue_react_app_assets');


// Use a unique query var name instead of 'page'
function add_page_query_var($vars)
{
    $vars[] = 'custom_page';
    return $vars;
}
add_filter('query_vars', 'add_page_query_var');

function load_page_detail_template($template)
{
    if (get_query_var('custom_page')) {
        $custom_template = locate_template('page.php');
        if ($custom_template) {
            return $custom_template;
        }
    }
    return $template;
}
add_filter('template_include', 'load_page_detail_template');

// Add rewrite rule
function add_story_detail_rewrite()
{
    add_rewrite_rule(
        '^page/([A-Za-z]+)/?$',
        'index.php?custom_page=$matches[1]',
        'top'
    );
}
add_action('init', 'add_story_detail_rewrite');

// Flush rewrite rules on theme activation
function flush_story_rewrite_rules()
{
    add_story_detail_rewrite();
    flush_rewrite_rules();
    //  Go to Settings > Permalinks in WordPress admin and click Save Changes (this flushes the rewrite rules).
    // Now your URLs will be: http://localhost/wordpress-React/page/{any word}
    // This should work with classic themes! Let me know if it works now.
}
add_action('after_switch_theme', 'flush_story_rewrite_rules');
