'use strict';

var $projectLatest = $('projectLatest');
var $projectPrevious = $('projectPrevious');
projectPrevious.append(projectsArray);

function Project (projectDataObj) {
 this.title = projectDataObj.title;
 this.category = projectDataObj.category;
 this.author = projectDataObj.author;
 this.authorUrl = projectDataObj.authorUrl;
 this.publishedOn = projectDataObj.publishedOn;
 this.body = projectDataObj.body;
}
Project.prototype.toHtml = function() {
  $newProject.find('h1').text(this.title);
  $newProject.find('address').text(this.author);
  $newProject.find('section.article-body').html(this.body);
  $newProject.find('time').text(this.publishedOn);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject.html();
};