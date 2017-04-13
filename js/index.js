'use strict';
console.log('helloorld	');
$('document').ready(function(){
	$('button.hamburger').on('click', function(){
		$('nav.nav-bar-ul').toggleClass('.nav-bar-click')
	});
});