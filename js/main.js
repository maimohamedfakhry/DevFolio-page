$(".nav-link").click(function () {
  var sectionID = $(this).attr("href");
  var sectionPlace = $(sectionID).offset().top;
  $("html,body").animate({ scrollTop: sectionPlace }, 1000);
});
var aboutPlace = $("#aboutme").offset().top;
var navheight = $(".navbar").outerHeight(true);
$(window).scroll(function () {
  var myScrollValue = $(window).scrollTop();
  if (myScrollValue > aboutPlace - navheight) {
    $(".navbar-brand").addClass("changebg");
    $(".arrowfont").fadeIn(500);
  } else {
    $(".navbar-brand").removeClass("changebg");
    $(".arrowfont").fadeOut(500);
  }
});
$(".arrowfont").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});
