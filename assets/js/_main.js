/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can 
 * always reference jQuery with $, even when in .noConflict() mode.
 *
 * Google CDN, Latest jQuery
 * To use the default WordPress version of jQuery, go to lib/config.php and
 * remove or comment out: add_theme_support('jquery-cdn');
 * ======================================================================== */

(function($) {

// Use this variable to set up the common and page specific functions. If you 
// rename this variable, you will also need to rename the namespace below.
var Roots = {
  // All pages
  common: {
    init: function() {
      // JavaScript to be fired on all pages
    }
  },
  // Home page
  home: {
    init: function() {
      // JavaScript to be fired on the home page


/////////////////////////////////////////////////////////////////////////////////////////////
// Custom JS (ADD YOUR JS HERE!)
/////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready(function(){
  
  /////////////////////////////////////////////////////////////////
  // BACKSTRETCH SLIDER (UNCOMMENT TO USE)
  /////////////////////////////////////////////////////////////////
  
  /*$("body").backstretch([
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg"
  ], {duration: 3000, fade: 750, random: true});*/
  
  /////////////////////////////////////////////////////////////////
  // CAMERA SLIDER
  /////////////////////////////////////////////////////////////////
  
  if ($('.camera_slider').length > 0) {
    $('.camera_slider').camera({
      fx: 'random',
      playPause: true,
      pagination: false,
      height: '400',
      random: false
    });
  }
  
  /////////////////////////////////////////////////////////////////
  // Fancybox
  /////////////////////////////////////////////////////////////////
  
  //if ($('body#gallery').is('*')) { // Uncomment to run script on specific page only
    /*
    if(jQuery.browser.mobile) {
      var myPhotoSwipe = $(".fancybox").photoSwipe({ enableMouseWheel: false , enableKeyboard: false });
    }
    else {
      // Single Image
      //$("a.fancybox").fancybox();
      
      // Multiple Images
      $("a.fancybox[rel='gallery_group']").fancybox({
        'transitionIn'  :  'elastic',
        'transitionOut' :  'elastic',
        'speedIn'       :  600,
        'speedOut'      :  200
      });
    }
    */
    //}
  
  /////////////////////////////////////////////////////////////////
  // Animated Entrances
  /////////////////////////////////////////////////////////////////
  
  $(window).scroll(function() {
    $('.animatedEntrance').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass("slideUp"); // slideUp, slideDown, slideLeft, slideRight, slideExpandUp, expandUp, fadeIn, expandOpen, bigEntrance, hatch
      }
    });
  });
  
  /////////////////////////////////////////////////////////////////
  // Form Validation
  /////////////////////////////////////////////////////////////////
  /*
  
  $('#custom_form').formValidation({
    validateText: ["name","message"],
    validateEmail: ["email"],
    validateSpam: true,
    captchaTheme: 'greyscale' // default, mini, dark, mini-dark, light, mini-light, greyscale, mini-greyscale
  });
  */

  /////////////////////////////////////////////////////////////////
  // YAY FOR LOLLIES!
  /////////////////////////////////////////////////////////////////

});






    }
  },
  // About us page, note the change from about-us to about_us.
  about_us: {
    init: function() {
      // JavaScript to be fired on the about us page


/////////////////////////////////////////////////////////////////
  // GOOGLE MAPS
  /////////////////////////////////////////////////////////////////

 /* function map() {
    var myLatlng = new google.maps.LatLng(-12.47518, 130.99042);
    var mapOptions = {
      zoom: 14,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      styles:
      [
      {
        "featureType": "all",
        "stylers": [
                {
                    "saturation": -100
                },
                {
                  "gamma": 0.5
                  }
              ]
          }
      ]
    };
    // For Contact Page
    if ($('#map').length > 0) {
      var map = new google.maps.Map(document.getElementById('map'), mapOptions);
      var image = 'img/mapicon.png';
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
      });
      google.maps.event.addDomListener(window, 'resize orientationchange', function() {
        map.setCenter(myLatlng);
      });
    }
    // For Footer
    if ($('#footer-map').length > 0) {
      var map = new google.maps.Map(document.getElementById('footer-map'), mapOptions);
      var image = 'img/mapicon.png';
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
      });
      google.maps.event.addDomListener(window, 'resize orientationchange', function() {
        map.setCenter(myLatlng);
      });
    }
  }
  google.maps.event.addDomListener(window, 'load', map);

*/





    }
  }
};

// The routing fires all common scripts, followed by the page specific scripts.
// Add additional events for more control over timing e.g. a finalize event
var UTIL = {
  fire: function(func, funcname, args) {
    var namespace = Roots;
    funcname = (funcname === undefined) ? 'init' : funcname;
    if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
      namespace[func][funcname](args);
    }
  },
  loadEvents: function() {
    UTIL.fire('common');

    $.each(document.body.className.replace(/-/g, '_').split(/\s+/),function(i,classnm) {
      UTIL.fire(classnm);
    });
  }
};

$(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
