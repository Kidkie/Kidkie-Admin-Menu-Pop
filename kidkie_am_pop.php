<?php
/*
Plugin Name: Kidkie Admin Menu Pop
Plugin URI: http://www.martinekelund.com
Description: Plugin built for developers for handling visibility of Admin Bar and Edit-link when logged in.
Version: 1.0
Author: Martin Ekelund
Author URI: htt://www.martinekelund.com
License: Released under the MIT license
*/

// These are the necessary scripts to make Admin Menu Pop to work
function ampop_script_head() {
	// this plugin should only include scripts for logged in users
	if ( is_user_logged_in() ) {
		$url = plugins_url();
		// All code is handled from and within the JS file below
		wp_register_script( 'add-ampop-js', $url . '/kidkie_am_pop/js/jquery.ampop.min.js', array('jquery'),'',true );
		wp_register_style( 'add-ampop-css', $url . '/kidkie_am_pop/kidkie_am_pop.min.css','','', 'screen' );
		wp_enqueue_script( 'add-ampop-js' );
		wp_enqueue_style( 'add-ampop-css' );
	}
}
add_action( 'wp_enqueue_scripts', 'ampop_script_head' );
// Nothing is inserted in the header atm
function ampop_plugin_footer() {
}
add_action('wp_footer', 'ampop_plugin_footer', 100);
// Nothing is inserted in the footer atm
function ampop_plugin_header() {
}
add_action('wp_head', 'ampop_plugin_header', 100);
?>