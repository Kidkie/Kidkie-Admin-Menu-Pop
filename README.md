# Kidkie-Admin-Menu-Pop

Kidkie Admin Menu Pop is built with Wordpress-developers and designers in mind that need to see the design without the admin bar hovering on top of content.

## Kidkie Admin Menu Pop
* Contributors: Kidkie
* Tags: show hide administrator bar design logged in
* Created with Wordpress 4.2.2
* Tested up to: Wordpress 4.2.2
* Stable tag: Wordpress 4.2.2
* License: Released under the MIT license
* License URI: http://opensource.org/licenses/MIT

Plugin built for developers for handling visibility (show and hide) of Admin Bar and Edit-link when logged in.

## Description

Kidkie Admin Menu Pop is built with developers and designers in mind that need to see the design without the admin bar hovering on top of content.

Kidkie Admin Menu Pop uses jQuery show() and hide() to show and hide the admin bar.
Kidkie Admin Menu Pop uses jQuery Cookie Plugin v1.4.1 by Klaus Hartl (https://github.com/carhartl/jquery-cookie) to remember current state.

## Installation

1. Upload `plugin-name.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

*. The plugin works when activated

* While inactive the plugin adds a box in the upper left corner of browser
* While active the plugin adds a low transparency box in the upper left corner of browser
* While inactive you also have a option to enter your dashboard by clicking an ’Edit’ link. Version 1 send you to ’domain.com/wp-admin’.

### Screenshots

Can be found in /addets/

1. The plugin is hidden unless you are logged in
2. The button for showing and hiding the Admin Bar is positioned in the upper left corner
3. While active you can show and hide the Admin Bar, the current state is stored with a jQuery Cookie Plugin
4. On ’hover’ the button is lit up, on top of toggling the visibility you have the choice to click your way into the dashboard.

### Changelog

= 1.0 =
* Uploaded to Wordpress.com Plugin Directory
* JS and CSS moved into /assets/ directory
