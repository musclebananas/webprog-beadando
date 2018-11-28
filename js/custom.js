/* Show and hide navbar */
$(document).ready(function() {
  'use strict';

  if($(window).scrollTop() < 80) {

    $('.navbar').css ({
      'margin-top': '-100px',
      'opacity': '0'
    });

    $('.navbar-default').css({
      'background-color': 'rgba(59, 59, 59, 0)'
    });

  } else {
    $('.navbar').css ({
      'margin-top': '0px',
      'opacity': '1'
    });

    $('.navbar-default').css({
      'background-color': 'rgba(59, 59, 59, 0.7)',
      'border-color': '#444'
    });

    $('.navbar-brand img').css ({
      'height': '35px',
      'padding-top': '0px'
    });

    $('.navbar-nav > li > a').css({
      'padding-top': '15px'
    });
  }

  $(window).scroll(function() {
    'use strict';
    if($(window).scrollTop() < 80) {

      $('.navbar').css ({
        'margin-top': '-100px',
        'opacity': '0'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0)'
      });

    } else {
      $('.navbar').css ({
        'margin-top': '0px',
        'opacity': '1'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0.7)',
        'border-color': '#444'
      });

      $('.navbar-brand img').css ({
        'height': '35px',
        'padding-top': '0px'
      });

      $('.navbar-nav > li > a').css({
        'padding-top': '15px'
      });
    }
  });
});





/* Add smooth scrolling */
$(document).ready(function(){
  $(".nav-link, #scroll-to-top").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1250, function(){

        window.location.hash = hash;
      });
    }
  });
});





/* Active menu item on click */
$(document).ready(function() {
  'use strict';

  $('.navbar-nav li a').click(function() {
    'use strict';
    $('.navbar-nav li a').parent().removeClass("active");
    $(this).parent().addClass("active");
  });
});





/* Highlight menu item scroll */
$(document).ready(function() {
  'use strict';

  $(window).scroll(function() {
    'use strict';
    $("section").each(function() {
      'use strict';
      var bb = $(this).attr("id");
      var h = $(this).outerHeight();
      var grttop = $(this).offset().top - 70;

      if($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + h) {
        $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
      } else {
        $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
      }
    });
  })
});





/* Add bxslider to screens/offers */
$(document).ready(function() {
  $('.bxslider').bxSlider({
    slideWidth: 350,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50
  });
});





/* Add counterup */
$(document).ready(function() {
  $('.counter-num').counterUp({
    delay: 10,
    time: 2000
  });
});





/* Add animation */
$(document).ready(function() {
  'use strict';
  new WOW().init();
});
