// Ease the scrolling from nav
$(function() {
  $("a.scroll").bind("click", function(event) {
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
