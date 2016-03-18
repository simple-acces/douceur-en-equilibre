$(document).ready(function() {

    // clone menu for fixed purpose
    if (window.screen.width >= 740) {
        var menu = $('.menu')
        var menu_fixed = $('.menu.fixed').css('display', 'none')

        $(window).scroll(function() {
            if ($(window).scrollTop() >= menu.offset().top + menu.height() && menu_fixed.css('display') === 'none') {
                menu_fixed.fadeIn(250)
            } else if ($(window).scrollTop() < menu.offset().top && menu_fixed.css('display') !== 'none') {
                menu_fixed.fadeOut(250)
            }
        })
    }

    $('article .button').click(function() {
        $(this).parents('article').find('div.more').slideToggle()
    })

    $('div.more').slideUp(0)

    if ($('.menu:not(.fixed)').css('display') === 'none') {
        $('.menu.fixed').css('display', 'block')
        $('.menu.fixed .column:nth-child(1)').css('display', 'block')
        $('.mobile_menu').fadeOut(0).click(function() {
            $('.mobile_menu').fadeOut(0)
        })
        $('.mobile_menu.current').removeClass('current')
    } else {
        $('.menu.fixed .column:nth-child(1)').css('display', 'none')
        $('.menu.fixed .mobile_menu').css('display', 'block')
    }
})


