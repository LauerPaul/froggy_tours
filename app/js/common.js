$(window).on('scroll', function(){aside_menu_btn()});
$(document).ready(function(){
	/*aside_menu_btn*/
	aside_menu_btn()
});

/*function aside_menu_btn*/
function aside_menu_btn (){
	var wh = $(window).innerHeight(),		/*user window height*/
		plus = 50,							/*plus value int*/
		fl = $('aside.fixed-nav'),			/*fixed left menu*/
		dst = $(document).scrollTop(), 		/*document scroll top*/
		mc = 'show';						/*menu scroll class*/

	if(dst > parseInt(wh) + plus && !fl.hasClass(mc)){fl.addClass(mc);}
	else if(fl.hasClass(mc) && dst < parseInt(wh) + plus){fl.removeClass(mc);}
}