'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  $('.nav-bar').on('click', '.tab', function(e) {
    e.preventDefault();
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.nav-bar .tab:first').click();
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide();
  $('.projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};


$(document).ready(function() {
  projectView.handleMainNav();
  projectView.setTeasers();
});
