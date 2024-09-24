$(document).ready(function ($) {
    "use strict";

        // Slider Banner Active
        $(".landing_page_customer_reviews_active").owlCarousel({
            loop: true,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            margin: 28,
            nav: false,
            smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 7000,
            // navText: [
            //     '<i class="icon fa fa-angle-left"></i>',
            //     '<i class="icon fa fa-angle-right"></i>',
            // ],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 2,
                },
                1200: {
                    items: 2,
                },
            },
        });




}(jQuery));