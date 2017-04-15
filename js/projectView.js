'use strict';

var projectView = {};

projectView.handleMainNav = function() {
  $('.nav-bar').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.nav-bar .tab:first').click();
};

projectView.setTeasers = function() {
  $('.project-body *:nth-of-type(n+2)').hide();

  $('#projects').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};
projectView.interactive3d = function(){
$('#interactive_3d').interactive_3d({ frames: 30});
}

$(document).ready(function() {
  projectView.interactive3d();
  projectView.handleMainNav();
  projectView.setTeasers();
});
