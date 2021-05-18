$(document).ready(function(){
	$('.header').height($(window).height());
})

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	event.preventDefault();
	$(this).ekkoLightbox({
		alwaysShowClose:true,
		showArrows:false,
	});
  });