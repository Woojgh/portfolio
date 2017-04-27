jQuery(function ($) {
    $('#runningjohnny').mouseover(function() {
        var dWidth = $(document).width() - 100, // 100 = image width
            dHeight = $(document).height() - 100, // 100 = image height
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });
});