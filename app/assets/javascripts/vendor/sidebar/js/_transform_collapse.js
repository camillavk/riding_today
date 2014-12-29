module.exports = function () {
    var dd = $('.sidebar[data-type="collapse"]');

    if (dd.length) {

        $('.sidebar [data-scrollable] > ul > li > a').off('mouseenter');
        $('.sidebar [data-scrollable] > ul > li.dropdown > a').off('mouseenter');
        $('.sidebar [data-scrollable] > ul > li > a').off('mouseenter');
        $('.sidebar [data-scrollable] > ul > li > a').off('click');
        $('.sidebar').off('mouseleave');
        $('.sidebar .dropdown').off('mouseover');
        $('.sidebar .dropdown').off('mouseout');
        $('body').off('mouseout', '#dropdown-temp .dropdown');

        $('.sidebar ul.collapse').off('shown.bs.collapse');
        $('.sidebar ul.collapse').off('show.bs.collapse');
        $('.sidebar ul.collapse').off('hide.bs.collapse');
        $('.sidebar ul.collapse').off('hidden.bs.collapse');

        dd.find('#dropdown-temp').remove();

        dd.find('.hasSubmenu').removeClass('dropdown')
            .find('> ul').addClass('collapse').removeClass('dropdown-menu submenu-hide submenu-show')
            .end()
            .find('> a').attr('data-toggle', 'collapse');

        dd.find('.collapse').collapse({'toggle': false});

        $('.sidebar ul.collapse').on('shown.bs.collapse', function (e) {
            $('.sidebar [data-scrollable]').getNiceScroll().resize();
        });

        // Collapse
        $('.sidebar ul.collapse').on('show.bs.collapse', function (e) {
            e.stopPropagation();

            if ($('.sidebar-mini').length) $('.sidebar-mini').removeClass('sidebar-mini').data('mini', true);

            var parents = $(this).parents('ul:first').find('> li.open [data-toggle="collapse"]');
            if (parents.length) {
                parents.trigger('click');
            }
            $(this).parent().addClass("open");
        });

        $('.sidebar ul.collapse').on('hide.bs.collapse', function (e) {
            e.stopPropagation();
            if ($(this).is('.sidebar-menu [data-scrollable] > ul > li > ul')) {
                if ($('.show-sidebar').data('mini')) {
                    $('.show-sidebar').addClass('sidebar-mini');
                    $(this).parent().removeClass("open");
                }
            }
        });

        $('.sidebar ul.collapse').on('hidden.bs.collapse', function (e) {
            e.stopPropagation();
            $(this).parent().removeClass("open");
        });
    }
};