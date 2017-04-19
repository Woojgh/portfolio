'use strict';

var projects = [];

function Project (projectDataObj) {
 this.title = projectDataObj.title;
 this.author = projectDataObj.author;
 this.authorUrl = projectDataObj.authorUrl;
 this.publishedOn = projectDataObj.publishedOn;
 this.body = projectDataObj.body;
}
Project.prototype.toHtml = function() {
  var templateScript = $('#project-template').html();
  var theTemplate = Handlebars.compile(templateScript);
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
  var compiledHtml = theTemplate(this);
  return compiledHtml;
};

projectData.sort(function(a, b) {
	return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});