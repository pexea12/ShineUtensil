$(document).ready(function() {
    $(window).click(function() {
        $('#add-to-cart, #checkout').hide('slide', { direction: 'right' });
        $('.button .dropup ul').hide();
    });

    $('#left-menu, #add-to-cart, #checkout').click(function() {
        event.stopPropagation();
    });

    // Menu dropdown
    $('.menu-dropdown > a').click(function() {
        $(this).siblings('.sub-menu').slideToggle();
        $(this).parent().toggleClass('active');

        var text = $(this).html();
        if (text[0] === '<')
            $(this).text(text.substr(33));
        else
            $(this).prepend('<i class="fa fa-caret-down"></i> ');
    });

    // Menu
    $('#button-menu').click(function() {
        event.stopPropagation();
        $('#left-menu').toggle('slide', { direction: 'left' });
    });


    // Count, add-to-cart and checkout
    $('#count').click(function() {
        event.stopPropagation();
        $('#add-to-cart').toggle('slide', { direction: 'right' });
        $('#left-menu').hide('slide', { direction: 'left' });
        $('#checkout').hide();
    });

    $('#add-to-cart .button-add-to-cart').click(function() {
        $('#checkout').toggle('slide', { direction: 'right' });
        $('#add-to-cart').hide();
    });

    $('#add-to-cart').click(function() {
        $('#add-to-cart .dropup ul').hide();
    });

    // Close item
    $('.close').click(function() {
        $(this).parent().toggle();
    });

    // click the little arrow to scroll
    $('.switch').click(function() {
        $('body, html').animate({
            scrollTop: $('#list').offset().top - 60
        }, 900);
    });

    // color button
    $('.dropup button').click(function() {
        event.stopPropagation();
        $(this).siblings('ul').slideToggle();
    });
});
