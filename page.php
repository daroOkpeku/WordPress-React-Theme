<?php
/* Template Name: Page Page */
get_header();

$page_slug = get_query_var('custom_page');
?>
<!-- <div>React Theme </div> -->
<h1>PAGE.PHP IS LOADING!</h1>
<h2>Current page: <?php echo $page_slug; ?></h2>
<div id="home" data-page="<?php echo $page_slug; ?>"></div>
<?php get_footer(); ?>
</body>

</html>