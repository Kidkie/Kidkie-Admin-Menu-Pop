<?php
/*
Plugin Name: Kidkie Admin Menu Pop
Plugin URI: https://github.com/Kidkie/Kidkie-Admin-Menu-Pop
Description: Plugin built for developers for handling visibility of Admin Bar and Edit-link when logged in.
Version: 1.2
Author: Martin Ekelund
Author URI: https://github.com/Kidkie/
License: Released under the MIT license
*/

// These are the necessary scripts to make Kidkie Admin Menu Pop work
function ampop_script_head() {
	// this plugin should only include scripts for logged in users
	if ( is_user_logged_in() ) {
		$dir = plugin_dir_url(__FILE__);
		// All code is handled from and within the JS file below
		wp_register_script( 'add-kidkie-admin-pop', $dir . 'assets/js/jquery.kidkie-admin-pop.min.js', array('jquery'),'1.2',true );
		wp_register_style( 'add-kidkie-admin-pop', $dir . 'assets/kidkie-admin-pop.min.css','','1.2', 'screen' );
		wp_enqueue_script( 'add-kidkie-admin-pop' );
		wp_enqueue_style( 'add-kidkie-admin-pop' );
	}
}
add_action( 'wp_enqueue_scripts', 'ampop_script_head' );
?>