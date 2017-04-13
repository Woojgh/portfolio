'use strict';
var projects = [];
var $projectLatest = $('projectLatest');
var $projectPrevious = $('projectPrevious');
$projectPrevious.append(projectData);

function Project (projectDataObj) {
 this.title = projectDataObj.title;
 this.category = projectDataObj.category;
 this.author = projectDataObj.author;
 this.authorUrl = projectDataObj.authorUrl;
 this.publishedOn = projectDataObj.publishedOn;
 this.body = projectDataObj.body;
}
Project.prototype.toHtml = function() {
	var $newProject = $('article.template').clone();
  $newProject.find('h1').text(this.title);
  $newProject.find('address').text(this.author);
  $newProject.find('section.article-body').html(this.body);
  $newProject.find('time').text(this.publishedOn);
  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago');
  $newProject.append('<hr>');
  return $newProject.html();
};
projectData.sort(function(a, b) {
	return (new Project(b.publishedOn)) - (new Project(a.publishedOn));
});

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projectFirst').append(project.toHtml());
});