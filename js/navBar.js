var main = function() {
  $('.nav-toggle-open').click(function() {
    $('.nav-bar-ul').animate({
      left: "0px"
    }, 200);

    $('#projects').animate({
      left: "285px"
    }, 200);
  });
  $('.nav-toggle-close').click(function() {
    $('.nav-bar-ul').animate({
      left: "-285px"
    }, 200);

    $('#projects').animate({
      left: "0px"
    }, 200);
  });
};
var navBarOpen = function(){
  $('#nav-toggle-open').on('click', function(){
    $('.nav-toggle-open').toggle();
    $('.nav-bar-fighters').toggle();
    $('.nav-toggle-close').toggle(); 
    $('.nav-bar-links').toggle();
  });
};
var navBarClose = function(){
  $('#nav-toggle-close').on('click', function(){
    $('.nav-toggle-open').toggle();
    $('.nav-bar-fighters').toggle();
    $('.nav-toggle-close').toggle(); 
    $('.nav-bar-links').toggle();
  });
};
var aboutToggle = function(){
  $('#fighterAbout').on('click', function(){
    $('#about').toggle();
  });
};
var projectToggle = function(){
  $('#fighterProject').on('click', function(){
    $('#projects').toggle();
  });
};
$(document).ready(function() {
  main();
  navBarOpen();
  navBarClose();
  projectToggle();
  aboutToggle();
});