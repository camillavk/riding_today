module.exports = function () {
    var dd = $('.sidebar[data-type="dropdown"]');

    if (dd.length) {

        $('.sidebar ul.collapse')
            .off('shown.bs.collapse')
            .off('show.bs.collapse')
            .off('hidden.bs.collapse');

        dd.each(function () {
            var sidebar = $(this);
            var nice = sidebar.find('[data-scrollable]').getNiceScroll()[ 0 ];

            nice.scrollstart(function () {
                if (! sidebar.is('[data-type="dropdown"]')) return;
                sidebar.find('.sidebar-menu').addClass('scrolling');
                sidebar.find('#dropdown-temp > ul > li').empty();
                sidebar.find('#dropdown-temp').hide();
                sidebar.find('.open').removeClass('open');
            });

            nice.scrollend(function () {
                if (! sidebar.is('[data-type="dropdown"]')) return;
                $.data(this, 'lastScrollTop', nice.getScrollTop());
                sidebar.find('.sidebar-menu').removeClass('scrolling');
            });
        });

        dd.find('.hasSubmenu').addClass('dropdown').removeClass('open')
            .find('> ul').addClass('dropdown-menu').removeClass('collapse in').removeAttr('style')
            .end()
            .find('> a').removeClass('collapsed')
            .removeAttr('data-toggle');

        $('.sidebar[data-type="dropdown"] [data-scrollable] > ul > li.dropdown > a').on('mouseenter', function () {
            if (! $(this).parent('.dropdown').is('.open') && ! $('.sidebar-menu').is('.scrolling')) {
                var p = $(this).parent('.dropdown'),
                    t = p.find('> .dropdown-menu').clone().removeClass('submenu-hide'),
                    m = $(this).closest('.sidebar-menu'),
                    sidebar = $(this).closest('.sidebar'),
                    c = m.find('> #dropdown-temp');

                m.find('.open').removeClass('open');

                if (! c.length) {
                    c = $('<div/>').attr('id', 'dropdown-temp').appendTo(m);
                    c.html('<ul><li></li></ul>');
                }

                c.show();
                c.find('.dropdown-menu').remove();
                c = c.find('> ul > li').css({overflow: 'visible'}).addClass('dropdown open');

                p.addClass('open');
                t.appendTo(c).css({
                    top: p.offset().top - c.offset().top,
                    left: '100%'
                }).show();

                if (sidebar.is('.right')) {
                    t.css({
                        left: 'auto',
                        right: '100%'
                    });
                }
            }
        });

        $('.sidebar[data-type="dropdown"] [data-scrollable] > ul > li > a').on('mouseenter', function () {

            if (! $(this).parent().is('.dropdown')) {
                var sidebar = $(this).closest('.sidebar');
                sidebar.find('.open').removeClass('open');
                sidebar.find('#dropdown-temp').hide();
            }

        });

        $('.sidebar[data-type="dropdown"] [data-scrollable] > ul > li > a').on('click', function (e) {
            if ($(this).parent().is('.dropdown')) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        $('.sidebar[data-type="dropdown"]').on('mouseleave', function () {
            $(this).find('#dropdown-temp').hide();
            $(this).find('.open').removeClass('open');
        });

        $('.sidebar[data-type="dropdown"] .dropdown').on('mouseover', function () {
            $(this).addClass('open').children('ul').removeClass('submenu-hide').addClass('submenu-show');
        }).on('mouseout', function () {
            $(this).children('ul').removeClass('.submenu-show').addClass('submenu-hide');
        });

        $('body').on('mouseout', '#dropdown-temp .dropdown', function () {
            $('.sidebar-menu .open').removeClass('.open');
        });
    }
};