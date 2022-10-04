# Kidkie Admin Menu Pop v1.2

Built for developers and designers with need to preview design without the Wordpress admin bar hovering on top of the site.

### Kidkie Admin Menu Pop (ampop)

Contributors: Kidkie
Donate link: NA
Tags: show hide administrator bar design logged in
Requires at least: 4.2.2
Created with Wordpress 4.2.2
Tested up to: Wordpress 5.9
Stable tag: Wordpress 5.9
License: Released under the MIT license
License URI: http://opensource.org/licenses/MIT

## Description

AmPop is built with developers and designers in mind that need to see the design without the admin bar hovering on top of content. Plugin adds a button to handle visibility (show and hide) of Admin Bar and Edit-link when logged in. AmPop requires jQuery to be installed (not included in Plugin).

How does it work? The plugin uses jQuery slideToggle() to show and hide the admin bar. It also containes jQuery Cookie Plugin v1.4.1 by Klaus Hartl (https://github.com/carhartl/jquery-cookie) to remember current state while browsing thru the website. The low foot print design is built with CSS3.

## Main functionality

AmPop adds a box in the upper left corner of browser for site admins to toggle visibility of the Wordpress admin bar.
When toggled the plugin toggles to a low transparency box which fades in and out on hover
While toggled users have a option to enter the dashboard by clicking an ’Edit’ link. Click takes user to domain.com/wp-admin.

## Installation

Upload plugin-name.php to the /wp-content/plugins/ directory
Activate Kidkie Admin Menu Pop through the 'Plugins' menu in WordPress *

The plugin get's to work when activated, no settings needed.

## Code comments

The plugin uses element ```#wpadminbar``` (Wordpress 4.4) to toggle Wordpress Admin Bar. This can be edited to suit your needs on line 13 in jquery.ampop.js.

```var adminBarID = "#wpadminbar";```

When activated AmPop looks thru the body for class-name ```.edit-link``` and hides all elements. To change this, edit line 15 in jquery.ampop.js to match your setup.

```var editButtonClass = ".edit-link";```

## Screenshots

Can be found in /assets/

* Screenshot 1. The plugin is hidden unless you are logged in
* Screenshot 2. The button for showing and hiding the Admin Bar is positioned in the upper left corner
* Screenshot 3. While active you can show and hide the Admin Bar, the current state is stored with a jQuery Cookie Plugin
* Screenshot 4. On ’hover’ the button is lit up, on top of toggling the visibility you have the choice to click your way into the dashboard.

## Changelog

#### 1.3
Updated the readme with some MD flare.

#### 1.2
Uploaded to Wordpress.com Plugin Directory again.
Changed plugin_dir_url( $file );
Tested with Wordpress 4.4
Fixed an issue where there was a box floating ontop of the browser stopping clicks on navbars etc.
Removed link to Wordpress Admin in the Kidkie Admin Pop Meny "toggle tab".

#### 1.1
Added easier access to Wordpress elements (settings) to jquery.ampop.js.
Moved all files to /assets/ folder

#### 1.0
Uploaded to Wordpress.com Plugin Directory - Fail
JS and CSS moved into /assets/ directory

## Frequently Asked Questions

Submit one at https://github.com/Kidkie/Kidkie-Admin-Menu-Pop

## Upgrade Notice

No upgrades yet

## Authors

Martin Ekelund, https://github.com/Kidkie/
