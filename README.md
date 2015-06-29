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

## Description

Am Pop is built with developers and designers in mind that need to see the design without the admin bar hovering on top of content. Plugin adds a button to handle visibility (show and hide) of Admin Bar and Edit-link when logged in. Am Pop requires jQuery to be installed (not included in Plugin).

*How does it work?* The plugin uses jQuery slideToggle() to show and hide the admin bar. It also containes jQuery Cookie Plugin v1.4.1 by Klaus Hartl (https://github.com/carhartl/jquery-cookie) to remember current state while browsing thru the website. The almost non existing design is built with CSS3.

#### Main functionality
* Am Pop v1 adds a box in the upper left corner of browser for site admins to toggle visibility of the Wordpress admin bar.
* When toggled the plugin toggles to a low transparency box which fades in and out on hover
* While toggled users have a option to enter the dashboard by clicking an ’Edit’ link. Click takes user to `domain.com/wp-admin`.

## Installation

1. Upload `plugin-name.php` to the `/wp-content/plugins/` directory
1. Activate `Kidkie Admin Menu Pop` through the 'Plugins' menu in WordPress

* The plugin works when activated

### Code comments

When activated Ampop looks thru the body for class-name `.edit-link` and hides all elements. To change this, edit line `22` and `26` in `jquery.ampop.js` to match your setup.

The plugin uses element `#wpadminbar` to toggle Wordpress Admin Bar. This can be edited to suit your needs on lines `18`, `32` and `48` in `jquery.ampop.js`.

### Screenshots

Can be found in /assets/

* Screen 1. The plugin is hidden unless you are logged in
* Screen 2. The button for showing and hiding the Admin Bar is positioned in the upper left corner
* Screen 3. While active you can show and hide the Admin Bar, the current state is stored with a jQuery Cookie Plugin
* Screen 4. On ’hover’ the button is lit up, on top of toggling the visibility you have the choice to click your way into the dashboard.

### Changelog

#### 1.0
* Uploaded to Wordpress.com Plugin Directory
* JS and CSS moved into /assets/ directory
