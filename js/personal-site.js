$(document).ready(function(){

	/* Takes id as argument and rotates arrow icon
	of the corresponding header */
	function toggle(element) {
		var icon = $(element).children('.toggle-arrow');

		$(icon).toggleClass('rotate-90-degrees');
	}

	/* Use nav link href target to select id of 
	corresponding header div and toggle arrow icon */
	$('#nav p').on('click', function() {
		var link = $(this).find('a').attr('href'); 
		toggle(link);
	});


	/* Toggle arrow icon by clicking on header div */
	$('.page-header').on('click', function() {
		toggle(this);
	});

});

