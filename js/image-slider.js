$(document).ready(function() {
    var current = 0;
    var items = $('.slider-image div');
    var length = items.length;

    $('.slider-image div').eq(0).show();

    function cycleItems() {
        var item = $('.slider-image div').eq(current);
        items.hide();
        item.css('display', 'block');
    }

    var autoSlide;
    var slide = function() {
        cycleItems();
        autoSlide = setInterval(function() {
            current = (current + 1) % length;
            cycleItems();
        }, 3000);
    }

    slide();

    $('.slider-left').click(function() {
        clearInterval(autoSlide);
        current = (current + length - 1) % length;
        slide();
    });

    $('.slider-right').click(function() {
        clearInterval(autoSlide);
        current = (current + 1) % length;
        slide();
    });
});
