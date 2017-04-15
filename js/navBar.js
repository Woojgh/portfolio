var main = function() {
  $('.icon-menu').click(function() {
    $('.nav-bar-ul').animate({
      left: "0px"
    }, 200);

    $('project-body').animate({
      left: "285px"
    }, 200);
  });

  $('.icon-close').click(function() {
    $('.nav-bar-ul').animate({
      left: "-285px"
    }, 200);

    $('project-body').animate({
      left: "0px"
    }, 200);
  });
};
var hamburger = function(){
  $('#nav-toggle').on('click', function(){
    $('.nav-bar-ul').toggle();
  })
};

$(document).ready(function() {
  main();
  hamburger();
});