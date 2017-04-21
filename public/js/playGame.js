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
var playUnicorn = function(){
	$('#playunicorn').on('click', function(){
		$('.unicorn-game').toggle();
	});
};
var playCastle = function(){
	$('#playcastle').on('click', function(){
		$('.castle-game').toggle();
	});
};
var playMario = function(){
	$('#playmario').on('click', function(){
		$('.mario-game').toggle();
	});
};
$(document).ready(function(){
	playLlama();
	playKombat();
	playUnicorn();
	playCastle();
	playMario();
});