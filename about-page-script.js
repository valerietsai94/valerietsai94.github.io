$(document).ready(function() {

$("#sidebar-button").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active");
  } else {
    $("#sidebar-button").addClass("button-active");
    $(".sidebar-container").addClass("sidebar-active");
    $(".page-wrapper").addClass("wrapper-active");
    setTimeout(function() {
      $('body').addClass('no-scroll');
    }, 300);
  }
});

$(".page-wrapper").click(function () {
  if ($(".sidebar-container").hasClass("sidebar-active")) {
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active");
  }
});

var ml = 0
$("#carousel-prev").click(function () {
  ml = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (ml == 0) {
    return false;
  }
  $('#carousel').css('margin-left', (ml + 960).toString() + "px"); 
});

$("#carousel-next").click(function () {
  ml = parseInt($('#carousel').css('margin-left').replace("px", ""));
  if (ml == -3840) {
    return false;
  }
  $('#carousel').css('margin-left', (ml - 960).toString() + "px");
});

});