$(document).ready(function () {

	$('nav li').hover(
	  function () {
	    $('.submenu', this).toggle();	
	});
});