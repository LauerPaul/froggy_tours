/*Menu js*/
var
ms,		/*menu scroll*/
msa,	/*menu scroll api*/
left_menu = {
	init: function() {
		/*scroll menu*/
		ms = $('aside.menu .wrapper').jScrollPane();
		msa = ms.data('jsp');

		/*scroll menu - stop scroll document*/
		$('aside.menu .wrapper').bind('mousewheel DOMMouseScroll', function(e) {
		    var scrollTo = null;
		    if (e.type == 'mousewheel') {
		        scrollTo = (e.originalEvent.wheelDelta * -1);
		    }
		    // else if (e.type == 'DOMMouseScroll') {
		    //     scrollTo = 40 * e.originalEvent.detail;
		    // }
		    if (scrollTo) {
		        e.preventDefault();
		        $(this).scrollTop(scrollTo + $(this).scrollTop());
		    }
		});

		if($(window).width() > 1100) {
			if (localStorage.getItem('menu') == null || localStorage.getItem('menu') == 'open') {
				$('body').removeClass('hm');
				left_menu.header_hide();
				left_menu.aside_btn();
				left_menu.reinit();

				if(localStorage.getItem('menu') == null) {
					localStorage.setItem('menu', 'open');
				}
			}
		}
	},
	reinit: function() {
		msa.reinitialise();
	},
	hover: function(o) {
		var show_scroll = setTimeout(function(){
			$('aside.menu .jspDrag').addClass('jspHover');
		}, 1000);

		$(o).mouseleave(function(){
			clearTimeout(show_scroll);
			setTimeout(function(){
				$('aside.menu .jspDrag').removeClass('jspHover');
			}, 500);
		});
	},
	/*header hide on scroll funcion*/
	header_hide: function() {
		var wh = $(window).innerHeight(),		/*user window height*/
			plus = 20,							/*plus value int*/
			h = $('header'),					/*header*/
			dst = $(document).scrollTop(), 		/*document scroll top*/
			hc = 'hide';						/*header scroll class*/

		if(
			$('body').hasClass('hm') &&
			dst > parseInt(wh) + plus &&
			!h.hasClass(hc)
		) {
			h.addClass(hc);
		} else if(h.hasClass(hc) && dst < parseInt(wh) + plus || !$('body').hasClass('hm')) {
			h.removeClass(hc);
		}
	},
	/*function aside_menu_btn*/
	aside_btn: function() {
		var wh = $(window).innerHeight(),		/*user window height*/
			plus = 20,							/*plus value int*/
			fl = $('aside.fixed-nav'),			/*fixed left menu*/
			dst = $(document).scrollTop(), 		/*document scroll top*/
			mc = 'show';						/*menu scroll class*/

		if(dst > parseInt(wh) + plus && !fl.hasClass(mc) && $('body').hasClass('hm')){fl.addClass(mc);}
		else if(fl.hasClass(mc) && dst < parseInt(wh) + plus || !$('body').hasClass('hm')){fl.removeClass(mc);}
	},
	/*toggle left menu*/
	menu_toggle: function() {
		var hm = 'hm',	/*Hide menu - body class*/
			b = $('body');

		if(b.hasClass(hm)){
			b.removeClass(hm);
			$('#mask-menu').addClass('visible');
			localStorage.setItem('menu', 'open');

			if($(window).width() < 1101) {
				b.css('overflow', 'hidden');
			}
		} else {
			b.addClass(hm);
			$('#mask-menu').removeClass('visible');
			localStorage.setItem('menu', 'hide');

			if($(window).width() < 1101) {
				b.css('overflow', 'auto');
			}
		}
		left_menu.header_hide();
		left_menu.aside_btn();
		left_menu.reinit();
	}
},
_mt_ = left_menu.menu_toggle;	/*menu toggle function*/
