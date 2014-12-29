(function ($) {
    "use strict";

    // Ratings
    $('.rating span.star').on('click', function () {
        var total = $(this).parent().children().length;
        var clickedIndex = $(this).index();
        $('.rating span.star').removeClass('filled');
        for (var i = clickedIndex; i < total; i ++) {
            $('.rating span.star').eq(i).addClass('filled');
        }
    });

})(jQuery);
