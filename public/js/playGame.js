'use strict';

var playLlama = function(){
	$('#playllama').on('click', function(){
		$('.llama-game').toggle();
	});
};
var playKombat = function(){
	$('#playkombat').on('click', function(){
		$('.kombat-game').toggle();
	});
};
$(document).ready(function(){
	playLlama();
	playKombat();
});