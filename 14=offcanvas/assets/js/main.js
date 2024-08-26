/***************************************************
==================== JS INDEX ======================
*****************************************************/

(function ($) {
	"use strict";

	


	
	// 05. Offcanvas Js
	$(".filter-offcanvas-open").on("click", function () {
		$(".filter-offcanvas").addClass("filter-open");
		$(".filter-offcanvas-overlay").addClass("filter-overlay-open");
	});
	
	$(".filter-offcanvas-close").on("click", function () {
		$(".filter-offcanvas").removeClass("filter-open");
		$(".filter-offcanvas-overlay").removeClass("filter-overlay-open");
	});
	
	// 09. Body overlay Js
	$(".filter-offcanvas-overlay").on("click", function () {
		$(".filter-offcanvas").removeClass("filter-open");
		$(".filter-offcanvas-overlay").removeClass("filter-overlay-open");
	});






})(jQuery);