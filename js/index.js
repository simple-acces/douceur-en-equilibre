$(document).ready(function() {

	// clone menu for fixed purpose
	var menu = $('.menu')
	var menu_fixed = menu.clone().addClass('fixed').css('display', 'none')
	menu.parent().append(menu_fixed)

    $(window).scroll(function() {
		if ($(window).scrollTop() >= menu.offset().top + menu.height() && menu_fixed.css('display') === 'none') {
			menu_fixed.fadeIn(250)
		} else if ($(window).scrollTop() < menu.offset().top && menu_fixed.css('display') !== 'none') {
			menu_fixed.fadeOut(250)
		}
	})

})


