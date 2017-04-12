'use strict';

var $projectLatest = $('projectLatest');
var $projectPrevious = $('projectPrevious');
var projectsArray = [];
projectPrevious.append(projectsArray);

function newProject(projectTitle, sourceName, sourceUrl){
	this.projectTitle = projectTitle;
	this.sourceName = sourceName;
	this.sourceUrl = sourceUrl;
	projectsArray.push(this);
}