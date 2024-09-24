$(document).ready(
  (function ($) {
    "use strict";


    if ($('.sticky_header')) {
      var sticky = new Waypoint.Sticky({
        element: $('.sticky_header')[0],
        stuckClass: 'fixed',
        offset: -50,
      });
    }




  })(jQuery)
);
