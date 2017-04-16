'use strixt';

var destructSequence = function() {
	$('#destructButton').on('click', function(){
		$('#videoCount').toggle(function(){
			this[this.paused ? 'play' : 'pause']();
			});
		});
	};
$(document).ready(function() {
	destructSequence();
});