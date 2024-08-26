$(document).ready(function ($) {
    "use strict";




    // Category Active
    $(".category_active").owlCarousel({
        loop: true,
        animateOut: "fadeOut",
        animateIn: "fadeIn",
        margin: 14,
        nav: true,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 7000,
        navText: [
            '<i class="icon fa fa-angle-left"></i>',
            '<i class="icon fa fa-angle-right"></i>',
        ],
        responsive: {
            0: {
                items: 2,
            },
            576: {
                items: 3,
            },
            768: {
                items: 4,
            },
            992: {
                items: 5,
            },
            1200: {
                items: 6,
            },
            1400: {
                items: 7,
            },
            1600: {
                items: 8,
            },
            1700: {
                items: 9,
            },
        },
    });



}(jQuery));