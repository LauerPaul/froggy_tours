$(window).on('scroll', function(){
	left_menu.aside_btn();
	left_menu.header_hide();
})
.on('resize', function(){
	/*left menu reinitial.*/
	left_menu.reinit();
});
$(document).ready(function(){
	/*aside buttons*/
	left_menu.aside_btn();
	/*left menu init*/
	left_menu.init();
})
/*menu hover - show scroll*/
.on('mouseenter', 'aside.menu .wrapper', function(){
	left_menu.hover();
})

