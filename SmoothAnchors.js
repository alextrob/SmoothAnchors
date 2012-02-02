// Copyright (C) 2012 Alex Robinson (http://alextrob.net/)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy 
// of this software and associated documentation files (the "Software"), to deal 
// in the Software without restriction, including without limitation the rights 
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
// copies of the Software, and to permit persons to whom the Software is 
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in 
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE 
// SOFTWARE.

(function( $ ) {
	$.fn.SmoothAnchors = function() {

		function scrollBodyTo(destination, hash) {

			// Change the hash first, then do the scrolling. This retains the standard functionality of the back/forward buttons.

			var scrollmem = $(document).scrollTop();
			window.location.hash = hash;
			$(document).scrollTop(scrollmem);
			$("html,body").animate({scrollTop:destination}, 200);
			
		}

		if (typeof $().on == "function") {
			$(document).on('click', 'a[href^="#"]', function() {
				
				var href = $(this).attr("href");
				
				if ($(href).length == 0) {
					
					var nameSelector = "[name=" + href.replace("#", "") + "]";

					if (href == "#") {
						scrollBodyTo(0, href);
					}
					else if ($(nameSelector).length != 0)  {
						scrollBodyTo($(nameSelector).offset().top, href);
					}
					else {
						// fine, we'll just follow the original link. gosh.
						window.location = href;
					}
				}
				else {
					scrollBodyTo($(href).offset().top, href);
				}
				return false;
			});
		}
		else {
			$('a[href^="#"]').click(function() {
				var href = $(this).attr("href");
				
				if ($(href).length == 0) {
					
					var nameSelector = "[name=" + href.replace("#", "") + "]";

					if (href == "#") {
						scrollBodyTo(0, href);
					}
					else if ($(nameSelector).length != 0)  {
						scrollBodyTo($(nameSelector).offset().top, href);
					}
					else {
						// fine, we'll just follow the original link. gosh.
						window.location = href;
					}
				}
				else {
					scrollBodyTo($(href).offset().top, href);
				}
				return false;
			});
		}
	};
})( jQuery );