'use strict';

let main = () => {
  $('.nav-toggle-open').click(() => {
    $('.nav-bar-ul').animate({
      left: '0px'
    }, 200);

    $('#projects').animate({
      left: '285px'
    }, 200);
  });
  $('.nav-toggle-close').click(() => {
    $('.nav-bar-ul').animate({
      left: '-285px'
    }, 200);

    $('#projects').animate({
      left: '0px'
    }, 200);
  });
};
let navBarOpen = () => {
  $('#nav-toggle-open').on('click', () => {
    $('.nav-toggle-open').toggle();
    $('.nav-bar-fighters').toggle();
    $('.nav-toggle-close').toggle();
  });
};
let navBarClose = () => {
  $('#nav-toggle-close').on('click', () => {
    $('.nav-toggle-open').toggle();
    $('.nav-bar-fighters').toggle();
    $('.nav-toggle-close').toggle();
  });
};
let aboutToggle = () => {
  $('img.fighter-right').mouseenter(() => {
    $('img.fighter-right').toggleClass('fighter-right-hover');
  }).mouseleave(() => {
    $('img.fighter-right').toggleClass('fighter-right-hover');
  });
  $('img.fighter-right').hover(() => {
    $('.fighter-left').attr('src', 'images/liustep2.gif');
    $('img.fighter-right').attr('src', 'images/raidenattack.gif');
  }, () => {
    $('.fighter-left').attr('src', 'images/liukang.gif')
    $('img.fighter-right').attr('src', 'images/RaidenBlu.gif');
  });
  $('#fighterAbout').on('click', () => {
    $('#about').toggle();
  });
};
let projectToggle = () => {
  $('img.fighter-left').hover(() => {
      $('img.fighter-left').attr('src', 'images/kick.gif');
    }, () => {
    $('img.fighter-left').attr('src', 'images/liukang.gif');
  });
  $('#fighterProject').on('click', () => {
    $('#projects').toggle();
  });
};
$(document).ready(() => {
  main();
  navBarOpen();
  navBarClose();
  projectToggle();
  aboutToggle();
});
