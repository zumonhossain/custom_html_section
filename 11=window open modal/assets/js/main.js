// Main Js File
$(document).ready(function () {
    'use strict';


    if(document.getElementById('newsletter-popup-form')) {
        setTimeout(function() {
            var mpInstance = $.magnificPopup.instance;
            if (mpInstance.isOpen) {
                mpInstance.close();
            }

            setTimeout(function() {
                $.magnificPopup.open({
                    items: {
                        src: '#newsletter-popup-form'
                    },
                    type: 'inline',
                    removalDelay: 350,
                    callbacks: {
                        open: function() {
                            $('body').css('overflow-x', 'visible');
                            $('.sticky-header.fixed').css('padding-right', '1.7rem');
                        },
                        close: function() {
                            $('body').css('overflow-x', 'hidden');
                            $('.sticky-header.fixed').css('padding-right', '0');
                        }
                    }
                });
            }, 500)
        }, 900)
    }
});
