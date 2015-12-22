$(document).ready(function(){

	/* Takes id as argument and rotates arrow icon
	of the corresponding header */
	function elToggle(element) {
		var $icon = $(element).children('.toggle-arrow');
		var $content = $(element).next();
		
		$icon.toggleClass('rotate-90-degrees');
		$content.toggle();
	}

	/* Use nav link href target string to select id of 
	corresponding header div and toggle arrow icon */
	$('#nav p').on('click', function() {
		var link = $(this).find('a').attr('href'); 
		elToggle(link);
	});

	/* Toggle arrow icon by clicking on header div */
	$('.content-header').on('click', function() {
		elToggle(this);
	});
});

