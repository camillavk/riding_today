require('./_breakpoints');
require('./_sidebar-menu');
require('./_collapsible');
require('./_dropdown');
require('./_sidebar-toggle');

(function($){

    if ($(window).width() <= 480)
    {
        if (! $('.sidebar').length) return;

        $("html").removeClass('show-sidebar');
    }

})(jQuery);