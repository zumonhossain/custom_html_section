$(document).ready(function ($) {
    "use strict";





   

	// Quantity Input - Cart page - Product Details pages
    function quantity() {
        if ( $.fn.inputSpinner ) {
            $("input[type='number']").inputSpinner({
                decrementButton: '<i class="fa-solid fa-minus"></i>',
                incrementButton: '<i class="fa-solid fa-plus"></i>',
                buttonsClass: 'btn-qty',
            });
        }
    }
    quantity();



}(jQuery));