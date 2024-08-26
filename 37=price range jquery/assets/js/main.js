/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";

	

	

	function priceRange() {
		$("#sliderRange").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#rangeAmount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#rangeAmount").val("$" + $("#sliderRange").slider("values", 0) + " - $" + $("#sliderRange").slider("values", 1));
	}
	priceRange();

	

})(jQuery);