$(document).ready(
  (function ($) {
    "use strict";

    // zoom Img
    document.querySelectorAll(".zooming_show_image").forEach((elem) => {
      let x, y, width, height;
      elem.onmouseenter = () => {
        const size = elem.getBoundingClientRect();

        x = size.x;
        y = size.y;

        width = size.width;
        height = size.height;
      };
      elem.onmousemove = (e) => {
        const horizontal = ((e.clientX - x) / width) * 100;
        const vertical = ((e.clientY - y) / height) * 100;

        elem.style.setProperty("--x", horizontal + "%");
        elem.style.setProperty("--y", vertical + "%");
      };
    });



    if ($('.sticky_header')) {
      var sticky = new Waypoint.Sticky({
        element: $('.sticky_header')[0],
        stuckClass: 'fixed',
        offset: -200,
      });
    }




    // Single Product Slide Image Start
    var swiper = new Swiper(".singleProductActive", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      loop: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".singleProductActive2", {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

    // Single Product Slide Image Start
    var swiper = new Swiper(".quickViewActive", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      loop: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".quickViewActive2", {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

    // advertisement_banner_active start
    var swiper = new Swiper(".advertisement_banner_active", {
        autoplay: true,
        loop: true,
        navigation: false,
        pagination: false,
        breakpoints: {
          300: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
    });
    // advertisement_banner_active end

    // related_product_active start
    var swiper = new Swiper(".related_product_active", {
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        },
    });
    // related_product_active end

    // recent_view_active start
    var swiper = new Swiper(".recent_view_active", {
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        },
    });
    // recent_view_active end

    // hot_sale_active start
    var swiper = new Swiper(".category_active", {
      autoplay: true,
      loop: true,
      navigation: false,
      pagination: false,
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 8,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 9,
          spaceBetween: 15,
        },
      },
    });
    // hot_sale_active end

    // deal_of_the_day_active start
    var swiper = new Swiper(".deal_of_the_day_active", {
      autoplay: false,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      },
    });
    // hot_sale_active end

    // hot_sale_active start
    var swiper = new Swiper(".hot_sale_active", {
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 15,
        },
      },
    });
    // hot_sale_active end

    // new_arrival_active start
    var swiper = new Swiper(".new_arrival_active", {
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          300: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        },
    });
    // new_arrival_active end

    // slider_active start
    var swiper = new Swiper(".slider_active", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: true,
      autoplayTimeout: 7000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // slider_active end

    // advertisement_slider_one_active start
    var swiper = new Swiper(".advertisement_slider_one_active", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: false,
      pagination: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
    });
    // advertisement_slider_one_active end

    // advertisement_slider_two_active start
    var swiper = new Swiper(".advertisement_slider_two_active", {
      slidesPerView: 1,
      spaceBetween: 0,
      navigation: false,
      pagination: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
    });
    // advertisement_slider_two_active end

    // multiple_product_active start
    var swiper = new Swiper(".multiple_product_active", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // multiple_product_active end


    // happy_customer_active start
    var swiper = new Swiper(".happy_customer_active", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: true,
      autoplayTimeout: 7000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: false,
    });
    // happy_customer_active end





  })(jQuery)
);
