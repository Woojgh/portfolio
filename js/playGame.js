'use strict';

var playGame = function(){
	$('#play-game').on('click', function(){
		$('.game').toggle();
	});
};
$(document).ready(function(){
	playGame();
});