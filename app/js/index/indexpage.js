var touch = Modernizr.touch;
$(document).ready(function(){
	$('.img-holder').imageScroll({
		container: $('body'),
		coverRatio: 0.75,
		speed: 0.5,
		holderMaxHeight: 350,
		imageAttribute: (touch === true) ? 'image-mobile' : 'image',
  		touch: touch
	});
});