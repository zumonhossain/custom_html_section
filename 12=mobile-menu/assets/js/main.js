// Main Js File
$(document).ready(function () {
    'use strict';


    // Mobile Menu toggle children menu
    $('.menu-arrow').on('click', function (e) {
        var $parent = $(this).closest('li'),
            $targetUl = $parent.find('ul').eq(0);

            if ( !$parent.hasClass('open') ) {
                $targetUl.slideDown(function () {
                    $parent.addClass('open');
                });
            } else {
                $targetUl.slideUp(function () {
                    $parent.removeClass('open');
                });
            }

    });


});
