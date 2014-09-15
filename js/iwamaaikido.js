// Ease the scrolling from the nav menu
$(function() {
  $(".nav.navbar-nav a").bind("click", function(event) {
    var $anchor = $(this);
    $("html, body").stop().animate({
      scrollTop: $($anchor.attr("href")).offset().top
    }, 500, "easeInOutExpo");
    event.preventDefault();
  });
});

// Close the responsive nav menu on click
$(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggle:visible").click();
});
