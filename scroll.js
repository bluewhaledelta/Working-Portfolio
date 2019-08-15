/* Smooth Scroll Function */

$(document).ready(function() {

$(".scrollTo").on('click', function(e) {
     e.preventDefault();
     var target = $(this).attr('href');
     $('*').animate({
       scrollTop: ($(target).offset().top)
     }, 1000);
  });
  
});


/* To avoid "Added non-passive event listener to a scroll-blocking 'touchstart' event" warning */

(function () {
    if (typeof EventTarget !== "undefined") {
        let func = EventTarget.prototype.addEventListener;
        EventTarget.prototype.addEventListener = function (type, fn, capture) {
            this.func = func;
            if(typeof capture !== "boolean"){
                capture = capture || {};
                capture.passive = false;
            }
            this.func(type, fn, capture);
        };
    };
}());



/* The following is for iphone/safari scrolling issues. But debug mode works fine here in codepen. */

/*

var lastY = 0; // Needed in order to determine direction of scroll.
$(".scroll-container").on('touchstart', function(event) {
    lastY = event.touches[0].clientY;
});

$('.scroller').on('touchmove', function(event) {
    var top = event.touches[0].clientY;

    // Determine scroll position and direction.
    var scrollTop = $(event.currentTarget).scrollTop();
    var direction = (lastY - top) < 0 ? "up" : "down";

    // FIX IT!
    if (scrollTop == 0 && direction == "up") {
      // Prevent scrolling up when already at top as this introduces a freeze.
      event.preventDefault();
    } else if (scrollTop >= (event.currentTarget.scrollHeight - event.currentTarget.outerHeight()) && direction == "down") {
      // Prevent scrolling down when already at bottom as this also introduces a freeze.
      event.preventDefault();
    }

    lastY = top;
});

*/