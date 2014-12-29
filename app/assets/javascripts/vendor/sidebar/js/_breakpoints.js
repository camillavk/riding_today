(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint768', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        $("html").addClass('show-sidebar');
    });

    $(window).bind('enterBreakpoint1024', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        $("html").addClass('show-sidebar');
    });

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar').length) return;
        $("html").removeClass('show-sidebar');
    });

})(jQuery);
