/*!
* Plugin Name: Kidkie Admin Menu Pop
* Plugin URI: https://github.com/Kidkie/Kidkie-Admin-Menu-Pop
* Description: Plugin built for developers for handling visibility of Admin Bar and Edit-link when logged in.
* Version: 1.2
* Author: Martin Ekelund
* Author URI: https://github.com/Kidkie/
* License: Released under the MIT license
*/

/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
jQuery(function($){
	// Settings
	// Wordpress Admin bar ID
	var adminBarID = "#wpadminbar";
	// Edit-button Class
	var editButtonClass = ".edit-link";
	$('body').addClass( "kidkie-ampop" );
    if( $.cookie( "ampop" ) == '' ){
        $.cookie( "ampop", "1");
    }
    $(adminBarID).wrap( "<div id='wpadminbar-am-pop'></div>" );
    $("#wpadminbar-am-pop").append( "<div class='wpadminbar_ampop_tools'><div class='wpadminbar_ampop_trigger'></div></div>" );
    $.fn.editVisibility = function(state) {
        if(state == 1) {
            $(editButtonClass).each(function() {
                $( this ).hide();
            });
        } else {
            $(editButtonClass).each(function() {
                $( this ).show();
            });
        }
    };
    if( $.cookie( "ampop" ) == 1 ){
    	$(adminBarID).slideToggle('fast', function(){});
       	$( "#wpadminbar-am-pop" ).addClass( "ampop-active" );
        $.fn.editVisibility(1);
        $('body').addClass( "kidkie-ampop-active" );
    } else {
        $.fn.editVisibility(2);
    }
    $.fn.amVisible = function(text) {
		$.cookie("ampop", "1");
        $.fn.editVisibility(1);
    };
    $.fn.amHidden = function(text) {
		$.cookie("ampop", "2");
        $.fn.editVisibility(2);
    }; 
    $( ".wpadminbar_ampop_trigger" ).click(function() {
		$(adminBarID).slideToggle('fast', function(){
			var $link = $( ".wpadminbar_ampop_trigger" );
			$(this).is( ":visible" ) ? $.fn.amHidden('Hide') : $.fn.amVisible('Show');
		});
		var obj = "#wpadminbar-am-pop";
		$( ".ampop-inactive" ).not($(obj)).removeClass( "ampop-active" );
		$(obj).toggleClass( "ampop-active" );
		
		$( ".kidkie-ampop-active" ).not($('body')).removeClass( "kidkie-ampop-active" );
		$('body').toggleClass( "kidkie-ampop-active" );
		
		event.stopPropagation();
    });
});