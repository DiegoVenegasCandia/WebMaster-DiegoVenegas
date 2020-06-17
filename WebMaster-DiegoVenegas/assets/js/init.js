"use strict";

jQuery(document).ready(function() {



    // here all ready functions

    // hamburger();
    // imgtosvg();

    // list_height();
    // portfolio();
    // anchor();
    // contact_form();
    // owl_carousel();
    animate_text();
    // projects();
    // miniboxes();
    // isotope();
    // totop();
    // totop_myhide();
    // popup_blog();
    // popupscroll();
    // about_animation();
    // kenburn_slider();
    // ripple();
    // switcher();
    // data_images();

    // jQuery(window).on('scroll', function() {
    //     //e.preventDefault();
    //     totop_myhide();

    // });

    // jQuery(window).on('resize', function() {
    //     miniboxes();
    //     isotope();

    // });

    // jQuery(window).load('body', function() {
    //     setTimeout(function() {
    //         jQuery('.preloader').addClass('loaded');
    //     }, 1000);
    // });

});

// // -----------------------------------------------------
// // --------------------  FUNCTIONS  --------------------
// // -----------------------------------------------------


// // -----------------------------------------------------
// // ---------------  HAMBURGER  -------------------------
// // -----------------------------------------------------

// function hamburger() {

//     "use strict";

//     var hamburger = jQuery('.hamburger');
//     var mobileMenu = jQuery('.mobile_menu_wrap');

//     hamburger.on('click', function() {
//         var element = jQuery(this);

//         if (element.hasClass('is-active')) {
//             element.removeClass('is-active');
//             mobileMenu.slideUp();
//         } else {
//             element.addClass('is-active');
//             mobileMenu.slideDown();
//         }
//         return false;
//     });
// }

// // -----------------------------------------------------
// // ---------------    IMAGE TO SVG    ------------------
// // -----------------------------------------------------

// function imgtosvg() {

//     "use strict";

//     jQuery('img.svg').each(function() {

//         var jQueryimg = jQuery(this);
//         var imgClass = jQueryimg.attr('class');
//         var imgURL = jQueryimg.attr('src');

//         jQuery.get(imgURL, function(data) {
//             // Get the SVG tag, ignore the rest
//             var jQuerysvg = jQuery(data).find('svg');

//             // Add replaced image's classes to the new SVG
//             if (typeof imgClass !== 'undefined') {
//                 jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
//             }

//             // Remove any invalid XML tags as per http://validator.w3.org
//             jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

//             // Replace image with new SVG
//             jQueryimg.replaceWith(jQuerysvg);

//         }, 'xml');

//     });
// }




// // -------------------------------------------------
// // ---------    PERSONAL LIST HEIGHT    ------------
// // -------------------------------------------------

// function list_height() {

//     "use strict";

//     var div = jQuery('.about_short_contact_wrap');
//     var list = div.find('li:nth-of-type(2n)');

//     list.after("<div class='clearfix'></div>");
// }


// // -------------------------------------------------
// // -----------------    PORTFOLIO    ---------------
// // -------------------------------------------------

// // filterable 

// function portfolio() {

//     "use strict";

//     if (jQuery().isotope) {

//         // Needed variables
//         var list = jQuery('.portfolio_list');
//         var filter = jQuery('.portfolio_filter');

//         if (filter.length) {
//             // Isotope Filter 
//             filter.find('a').on('click', function() {
//                 var selector = jQuery(this).attr('data-filter');
//                 list.isotope({
//                     filter: selector,
//                     animationOptions: {
//                         duration: 750,
//                         easing: 'linear',
//                         queue: false
//                     }
//                 });
//                 return false;
//             });

//             // Change active element class
//             filter.find('a').on('click', function() {
//                 filter.find('a').removeClass('current');
//                 jQuery(this).addClass('current');
//                 return false;
//             });
//         }
//     }
// }

// function projects() {

//     "use strict";

//     jQuery('.portfolio_animation_wrap').each(function() {
//         jQuery(this).on('mouseenter', function() {
//             if (jQuery(this).data('title')) {
//                 jQuery('.portfolio_titles').html(jQuery(this).data('title') + '<span class="work__cat">' + jQuery(this).data('category') + '</span>');
//                 jQuery('.portfolio_titles').addClass('visible');
//             }

//             jQuery(document).on('mousemove', function(e) {
//                 jQuery('.portfolio_titles').css({
//                     left: e.clientX - 10,
//                     top: e.clientY + 25
//                 });
//             });
//         }).on('mouseleave', function() {
//             jQuery('.portfolio_titles').removeClass('visible');
//         });
//     });
// }


// // -----------------------------------------------------
// // ------------    ANCHOR NAVIGATION    ----------------
// // -----------------------------------------------------

// function anchor() {

//     "use strict";

//     jQuery('.anchor_nav').onePageNav();

//     var scrollOffset = 0;

//     jQuery(".anchor a").on('click', function(evn) {
//         evn.preventDefault();
//         jQuery('html,body').scrollTo(this.hash, this.hash, {
//             gap: { y: -scrollOffset - 85 },
//             animation: {
//                 duration: 1500,
//                 easing: "easeInOutExpo"
//             }
//         });
//         return false;
//     });
// }

// // -----------------------------------------------------
// // ----------------    CONTACT FORM    -----------------
// // -----------------------------------------------------

// function contact_form() {

//     "use strict";

//     jQuery(".contact_form #send_message").on('click', function() {

//         var name = jQuery(".contact_form #name").val();
//         var email = jQuery(".contact_form #email").val();
//         var message = jQuery(".contact_form #message").val();
//         var subject = jQuery(".contact_form #subject").val();
//         var success = jQuery(".contact_form .returnmessage").data('success');

//         jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
//         //checking for blank fields	
//         if (name === '' || email === '' || message === '') {

//             jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
//         } else {
//             // Returns successful data submission message when the entered information is stored in database.
//             jQuery.post("modal/contact.php", { ajax_name: name, ajax_email: email, ajax_message: message, ajax_subject: subject }, function(data) {

//                 jQuery(".contact_form .returnmessage").append(data); //Append returned message to message paragraph


//                 if (jQuery(".contact_form .returnmessage span.contact_error").length) {
//                     jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
//                 } else {
//                     jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
//                     jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
//                 }

//                 if (data === "") {
//                     jQuery("#contact_form")[0].reset(); //To reset form fields on success
//                 }

//             });
//         }
//         return false;
//     });
// }

// // -----------------------------------------------------
// // --------------------    OWL CAROUSEL    -------------
// // -----------------------------------------------------

// function owl_carousel() {

//     "use strict";

//     var carousel = jQuery('.services_wrap .owl-carousel');
//     carousel.owlCarousel({
//         loop: true,
//         items: 3,
//         lazyLoad: true,
//         margin: 30,
//         autoplay: false,
//         autoplayTimeout: 6000,
//         smartSpeed: 2000,
//         dots: true,
//         nav: false,
//         navSpeed: true,
//         responsive: {
//             0: { items: 1 },
//             480: { items: 2 },
//             768: { items: 3 },
//             1040: { items: 3 },
//             1200: { items: 3 },
//             1600: { items: 3 },
//             1920: { items: 3 }
//         }
//     });

//     jQuery('.services_wrap .custom_nav > a.prev').on('click', function() {
//         carousel.trigger('prev.owl.carousel');
//         return false;
//     });

//     jQuery('.services_wrap .custom_nav > a.next').on('click', function() {
//         carousel.trigger('next.owl.carousel');
//         return false;
//     });
//     imgtosvg();

//     var carusel2 = jQuery('.testimonial_wrap .owl-carousel');
//     carusel2.owlCarousel({
//         loop: true,
//         autoplay: false,
//         autoWidth: false,
//         nav: false,
//         items: 1,
//     });
// }

// // -----------------------------------------------------
// // --------------------    WOW JS    -------------------
// // -----------------------------------------------------



// // -----------------------------------------------------
// // -----------------    PROGRESS BAR    ----------------
// // -----------------------------------------------------

// function tdProgress(container) {

//     "use strict";

//     container.find('.progress').each(function(i) {
//         var progress = jQuery(this);
//         var pValue = parseInt(progress.data('value'), 10);
//         var pColor = progress.data('color');
//         var pBarWrap = progress.find('.bar_wrap');
//         var pBar = progress.find('.bar');
//         pBar.css({ width: pValue + '%', backgroundColor: pColor });
//         setTimeout(function() { pBarWrap.addClass('open'); }, (i * 500));
//     });
// }
// jQuery('.progress_wrap').each(function() {
//     "use strict";
//     var pWrap = jQuery(this);
//     pWrap.waypoint({ handler: function() { tdProgress(pWrap); }, offset: '90%' });
// });

// // -----------------------------------------------------
// // -----------------    MINI BOXES    ------------------
// // -----------------------------------------------------

// function miniboxes() {

//     "use strict";

//     var el = jQuery('.miniboxes');

//     if (el.length) {
//         el.each(function(index, element) {

//             var child = jQuery(element).find('.minibox');

//             child.css({ height: 'auto' });
//             // Get an array of all element heights

//             var W = jQuery(window).width();
//             if (W > 480) {
//                 var elementHeights = child.map(function() { return jQuery(this).outerHeight(); }).get();

//                 // Math.max takes a variable number of arguments
//                 // `apply` is equivalent to passing each height as an argument
//                 var maxHeight = Math.max.apply(null, elementHeights);

//                 // Set each height to the max height
//                 child.css({ height: maxHeight + 'px' });
//             }
//         });
//     }
// }

// // -----------------------------------------------------
// // --------------    ISOTOPE MASONRY    ----------------
// // -----------------------------------------------------

// function isotope() {

//     "use strict";

//     jQuery('.masonry').isotope({
//         itemSelector: '.masonry_item',
//         masonry: {

//         }
//     });
// }

// // -----------------------------------------------------
// // --------------------    TOTOP    --------------------
// // -----------------------------------------------------

// function totop() {

//     "use strict";

//     jQuery(".totop").on('click', function(e) {
//         e.preventDefault();
//         jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
//         return false;
//     });
// }

// function totop_myhide() {

//     "use strict";

//     var toTop = jQuery(".totop");
//     if (toTop.length) {
//         var topOffSet = toTop.offset().top;

//         if (topOffSet > 1000) {
//             toTop.addClass('opened');
//         } else {
//             toTop.removeClass('opened');
//         }
//     }
// }
// -------------------------------------------------
// -------------   ANIMATE TEXT  -------------------
// -------------------------------------------------



function animate_text() {



    var animateSpan = jQuery('.animation_text_word');

    animateSpan.typed({
        strings: ["Desarrollador BackEnd", "Desarrollador FrontEnd", "Desarrollador FullStack", "Ingeniero SOA", "Analista Desarrollador"],
        loop: true,
        startDelay: 1e3,
        backDelay: 2e3
    });
}

// // -----------------------------------------------------
// // -------------------    POPUP BLOG    ----------------
// // -----------------------------------------------------

// function popup_blog() {
//     "use strict";
//     var li = jQuery('.list_wrap.blog_list .inner_list');
//     var popupBox = jQuery('#popup_blog');
//     var popupInner = popupBox.find('.inner_popup');
//     var closePopup = popupBox.find('.close');

//     li.each(function() {
//         var element = jQuery(this);
//         var button = element.find('.read_more a,.title_holder a,.link_news');
//         var html = element.html();
//         var mainImage = element.find('.news_image');
//         var imgData = mainImage.data('url');
//         var title = element.find('.title_holder h3');
//         var titleHref = element.find('.title_holder h3 a').html();

//         mainImage.css({ backgroundImage: 'url(' + imgData + ')' });
//         button.on('click', function() {
//             popupBox.addClass('opened');
//             popupInner.html(html);
//             mainImage = popupInner.find('.news_image');
//             mainImage.css({ backgroundImage: 'url(' + imgData + ')' });
//             title = popupInner.find('.title_holder h3');
//             title.html(titleHref);
//             return false;
//         });
//     });
//     closePopup.on('click', function() {
//         popupBox.removeClass('opened');
//         popupInner.html('');
//         return false;
//     });
// }

// // -----------------------------------------------------
// // -------------    WIDGET MENU SCROLL -----------------
// // -----------------------------------------------------

// function popupscroll() {

//     "use strict";

//     var H = jQuery(window).height();
//     var scrollable = jQuery('.scrollable');

//     var popupBox = jQuery('.popup_blog .inner_popup');

//     popupBox.css({ height: H - 100 });

//     scrollable.each(function() {
//         var element = jQuery(this);
//         var wH = jQuery(window).height();

//         element.css({ height: wH - 100 });

//         element.niceScroll({
//             touchbehavior: false,
//             cursorwidth: 0,
//             autohidemode: true,
//             cursorborder: "0px solid #fff"
//         });
//     });
// }

// // -------------------------------------------------
// // -------------  SLIDER KENBURN  ------------------
// // -------------------------------------------------

// function kenburn_slider() {

//     "use strict";

//     jQuery(function() {
//         jQuery('.hero_header_wrap .overlay_slider').vegas({
//             timer: false,
//             animation: ['kenburnsUp', 'kenburnsLeft', 'kenburnsRight'],
//             delay: 7000,

//             slides: [
//                 { src: 'img/hero/1.jpg' },
//                 { src: 'img/hero/2.jpg' },
//                 { src: 'img/hero/3.jpg' },
//             ]

//         });
//     });
// }

// // -------------------------------------------------
// // -------------  RIPPLE  --------------------------
// // -------------------------------------------------

// function ripple() {

//     "use strict";

//     jQuery('#ripple').ripples({
//         resolution: 500,
//         dropRadius: 20,
//         perturbance: 0.04
//     });
//     jQuery('#ripple_testimonial').ripples({
//         resolution: 500,
//         dropRadius: 20,
//         perturbance: 0.04
//     });
// }


// // -----------------------------------------------------
// // -----------------    SWITCHER    --------------------
// // -----------------------------------------------------

// function switcher() {

//     "use strict";

//     var switcherOpener = jQuery('.resize');
//     var switcherIcon = jQuery('.leftpart_wrap .resize i');
//     var leftPart = jQuery('.leftpart_wrap');
//     var rightPart = jQuery('.rightpart');

//     switcherOpener.on('click', function() {
//         if (switcherOpener.hasClass('opened')) {
//             switcherOpener.removeClass('opened');
//             switcherIcon.removeClass('opened');
//             leftPart.removeClass('opened');
//             rightPart.removeClass('opened');
//         } else {
//             switcherOpener.addClass('opened');
//             switcherIcon.addClass('opened');
//             leftPart.addClass('opened');
//             rightPart.addClass('opened');
//         }
//         setTimeout(function() { jQuery('#ripple').ripples('updateSize'); }, 101);
//         setTimeout(function() { jQuery('#ripple').ripples('updateSize'); }, 201);
//         setTimeout(function() { jQuery('#ripple').ripples('updateSize'); }, 301);

//         if (jQuery('.jarallax').length) {
//             jQuery('.jarallax').jarallax('destroy');
//             setTimeout(function() { jarallax(); }, 300);

//         }
//         return false;

//     });


// }

// // -----------------------------------------------------
// // -------------------    COUNTER    -------------------
// // -----------------------------------------------------

// jQuery('.counter').each(function() {

//     "use strict";

//     var el = jQuery(this);
//     el.waypoint({
//         handler: function() {

//             if (!el.hasClass('stop')) {
//                 el.addClass('stop').countTo({
//                     refreshInterval: 50,
//                     formatter: function(value, options) {
//                         return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
//                     },
//                 });
//             }
//         },
//         offset: '80%'
//     });
// });

// // -----------------------------------------------------
// // ---------------   DATA IMAGES    --------------------
// // -----------------------------------------------------

// function data_images() {

//     "use strict";
//     d
//     var data = jQuery('*[data-img-url]');

//     data.each(function() {
//         var element = jQuery(this);
//         var url = element.data('img-url');
//         element.css({ backgroundImage: 'url(' + url + ')' });
//     });
// }

// // -----------------------------------------------------
// // -------------    PARALLAX ANIMATION    --------------
// // -----------------------------------------------------

// function about_animation() {

//     "use strict";

//     if ($('.parallax').length > 0) {
//         var scene = $('.parallax').get(0);
//         var parallax = new Parallax(scene, {
//             relativeInput: true,
//             onReady: function() {
//                 console.log('ready!');
//             }
//         });
//     }
// }