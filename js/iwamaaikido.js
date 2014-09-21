// Ease the scrolling from the nav menu
$(function() {
  $(".nav.navbar-nav a").bind("click", function(event) {
    var $anchor = $(this).attr("href");
    $("html, body").stop().animate({
      scrollTop: $($anchor).offset().top
    }, 500, "easeInOutExpo");
    event.preventDefault();
  });
});

// Close the responsive nav menu on click
$(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
});

// Ease the scrolling from sneaky-peek images
$(function() {
  $(".sneaky-peek img").bind("click", function(event) {
    var $image = $(this);
    $("html, body").stop().animate({
      scrollTop: $($image).offset().top
    }, 500, "easeInOutExpo");
    event.preventDefault();
  });
});
