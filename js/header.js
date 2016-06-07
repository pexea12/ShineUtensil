$(document).ready(function() {
    $('.dropdown > a').click(function() {
        $(this).siblings('.sub-menu').slideToggle();
        $(this).parent().toggleClass('active');

        var text = $(this).text();
        if (text[0] === '▼')
            $(this).text(text.substr(1));
        else
            $(this).prepend('&#9660; ');
    });

    $('#button-menu').click(function() {
        $('#left-menu').slideToggle();
    });

    $('#count').click(function() {
        $('#add-to-cart').slideToggle('slow');
        $('#checkout').hide();
    });

    $('#add-to-cart .button-add-to-cart').click(function() {
        $('#checkout').slideToggle();
        $('#add-to-cart').toggle();
    });

    $('#button-checkout').click(function() {
        $('#checkout').slideToggle();
    });

    $('.close').click(function() {
        $(this).parent().toggle();
    });

    $('.switch').click(function() {
        $('body, html').animate({
            scrollTop: $('#list').offset().top - 60
        }, 900);
    });
});
