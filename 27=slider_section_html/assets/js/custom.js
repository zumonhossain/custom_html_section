$(document).ready(function ($) {
    "use strict";




    // Slider Banner Active
    $(".slider_banner_active").owlCarousel({
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
                items: 1,
            },
            576: {
                items: 1,
            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        },
    });






}(jQuery));