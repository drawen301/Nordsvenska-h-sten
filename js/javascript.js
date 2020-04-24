(function($) {
  "use strict"; // Starta användning av strict

  // Mjuk scroll med "jQuery easing"
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^//, '') == this.pathname.replace(/^//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Stänger ner responsiv meny när du klickar på en scroll trigger link
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Aktivera scrollspy för att lägga till en aktiv klass till navigationen vid rullning
  $('body').scrollspy({
    target: '#mainNav',
    offset: 100
  });

  // Kollapsa navigationsmenyn
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Kollapsa när visaren inte är i topp
  navbarCollapse();
  // Kollapsa när man rullar ner på sidan
  $(window).scroll(navbarCollapse);

})(jQuery); // Slut av strictanvändning
