$(window).on('scroll', function(){
	if($(window).width() > 724) {
		left_menu.aside_btn();
		left_menu.header_hide();
	}
})
.on('resize', function(){
	/*left menu reinitial.*/
	left_menu.reinit();
})
.bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(event) {
	delta_scroll = parseInt(event.originalEvent.wheelDelta || -event.originalEvent.detail);
});
$(document).ready(function(){
	if($(window).width() > 724) {
		/*aside buttons*/
		left_menu.aside_btn();
		/*left menu init*/
		left_menu.init();
	}
})
/*menu hover - show scroll*/
.on('mouseenter', 'aside.menu .wrapper', function(){
	left_menu.hover(this);
});



// $(function(e) {
// 	$("body").swipe({
// 	swipeStatus:
// 		function(event, phase, direction, distance, duration, fingers, fingerData, currentDirection){
// 			if($('header').hasClass('hide') && currentDirection == "down" && distance > 20 && duration > 20) {
// 				event.preventDefault();
// 				$('header').removeClass('hide');
// 			} else if(currentDirection == "up" && $(document).scrollTop() > 60){
// 				$('header').addClass('hide');
// 			}
// 		}
// 	});
// });