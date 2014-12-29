(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint768', function () {
        $(".navbar-main").addClass('dropdown-hover');
    });

    $(window).bind('exitBreakpoint768', function () {
        $(".navbar-main").removeClass('dropdown-hover');
    });

})(jQuery);
