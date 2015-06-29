# Kidkie-Admin-Menu-Pop

Kidkie Admin Menu Pop is built with Wordpress-developers and designers in mind that need to see the design without the admin bar hovering on top of content.

## Kidkie Admin Menu Pop (ampop)
* Contributors: Kidkie
* Tags: show hide administrator bar design logged in
* Created with Wordpress 4.2.2
* Tested up to: Wordpress 4.2.2
* Stable tag: Wordpress 4.2.2
* License: Released under the MIT license
* License URI: http://opensource.org/licenses/MIT

Plugin built for developers for handling visibility (show and hide) of Admin Bar and Edit-link when logged in.

## Description

Am Pop is built with developers and designers in mind that need to see the design without the admin bar hovering on top of content.

Am Pop uses jQuery slideToggle() to show and hide the admin bar.
Am Pop includes jQuery Cookie Plugin v1.4.1 by Klaus Hartl (https://github.com/carhartl/jquery-cookie) to remember current state.
Built with CSS3.
Am Pop requires jQuery to work (not included).

## Installation

1. Upload `plugin-name.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

* The plugin works when activated

* Am Pop v1 adds a box in the upper left corner of browser for site admins to toggle visibility of the Wordpress admin bar.
* When toggled the plugin adds a low transparency box in the upper left corner of browser
* While toggled users have a option to enter the dashboard by clicking an ’Edit’ link. Version 1 takes users to `domain.com/wp-admin`.

### Code comments

When activated Ampop looks thru the body for class-name `.edit-link` and hides all elements. To change this, edit line 22 and 26 in `jquery.ampop.js` to match your setup.

The plugin uses element `#wpadminbar` to toggle Wordpress Admin Bar. This can be editied to suit your setup on lines 18, 32 and 48 in `jquery.ampop.js`.

### Screenshots

Can be found in /assets/

1. The plugin is hidden unless you are logged in
2. The button for showing and hiding the Admin Bar is positioned in the upper left corner
3. While active you can show and hide the Admin Bar, the current state is stored with a jQuery Cookie Plugin
4. On ’hover’ the button is lit up, on top of toggling the visibility you have the choice to click your way into the dashboard.

### Changelog

#### 1.0
* Uploaded to Wordpress.com Plugin Directory
* JS and CSS moved into /assets/ directory
