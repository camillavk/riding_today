(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/js/themes/social-1/main.js":[function(require,module,exports){
// COMMON
require('../../common/main');

// Layout
require('../../../vendor/layout/js/main');

// Sidebar
require('../../../vendor/sidebar/js/main');

// Navbar
require('../../../vendor/navbar/js/main');

// Chat
require('../../../vendor/chat/js/main');

// Social
require('../../../vendor/social/js/main');

// MESSAGES
require('../../components/messages/main');

// CUSTOM
require('../../pages/users');
},{"../../../vendor/chat/js/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/main.js","../../../vendor/layout/js/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/main.js","../../../vendor/navbar/js/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/navbar/js/main.js","../../../vendor/sidebar/js/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/main.js","../../../vendor/social/js/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/social/js/main.js","../../common/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/common/main.js","../../components/messages/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/messages/main.js","../../pages/users":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/pages/users.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/common/main.js":[function(require,module,exports){
require('../components/forms/main');
require('../components/tables/main');
require('../components/other/_tooltip');
require('../components/other/_offcanvas');
require('../components/other/_ratings');
},{"../components/forms/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/main.js","../components/other/_offcanvas":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/other/_offcanvas.js","../components/other/_ratings":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/other/_ratings.js","../components/other/_tooltip":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/other/_tooltip.js","../components/tables/main":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/tables/main.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_datepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Datepicker INIT
    $('.datepicker').datepicker();

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_minicolors.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Minicolors INIT
    $('.minicolors').each(function () {
        $(this).minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom left',
            change: function (hex, opacity) {
                if (! hex) return;
                if (opacity) hex += ', ' + opacity;
                if (typeof console === 'object') {
                    console.log(hex);
                }
            },
            theme: 'bootstrap'
        });
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_progress-bars.js":[function(require,module,exports){
(function ($) {

    // Progress Bar Animation
    $('.progress-bar').each(function () {
        $(this).width($(this).attr('aria-valuenow') + '%');
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_selectpicker.js":[function(require,module,exports){
(function ($) {
    "use strict";
    $(function () {
        $('.selectpicker').each(function(){
            $(this).selectpicker({
                width: $(this).data('width') || '100%'
            });
        });
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_slider.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('#ex1').slider({
        formatter: function (value) {
            return 'Current value: ' + value;
        }
    });

    $("#ex2").slider();

    $("#ex6").slider();

    $("#ex6").on("slide", function (slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

    $('.slider-handle').html('<i class="fa fa-bars fa-rotate-90"></i>');

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/main.js":[function(require,module,exports){
require('./_progress-bars');
require('./_slider');
require('./_selectpicker');
require('./_datepicker');
require('./_minicolors');
},{"./_datepicker":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_datepicker.js","./_minicolors":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_minicolors.js","./_progress-bars":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_progress-bars.js","./_selectpicker":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_selectpicker.js","./_slider":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/forms/_slider.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/messages/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint320', function () {
        var img = $('.messages-list .panel ul img');
        $('.messages-list .panel ul').width(img.first().width() * img.length);
    });

    $(window).bind('exitBreakpoint320', function () {
        $('.messages-list .panel ul').width('auto');
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/messages/_nicescroll.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var nice = $('.messages-list .panel').niceScroll({cursorborder: 0, cursorcolor: "#25ad9f", zindex: 1});

    var _super = nice.getContentSize;

    nice.getContentSize = function () {
        var page = _super.call(nice);
        page.h = nice.win.height();
        return page;
    };

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/messages/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_nicescroll');
},{"./_breakpoints":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/messages/_breakpoints.js","./_nicescroll":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/messages/_nicescroll.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/other/_offcanvas.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // OffCanvas
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/other/_ratings.js":[function(require,module,exports){
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

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/other/_tooltip.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Tooltip
    $("body").tooltip({selector: '[data-toggle="tooltip"]', container: "body"});

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/tables/_check-all.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Table Checkbox All
    $('#checkAll').on('click', function (e) {
        $(this).closest('table').find('td input:checkbox').prop('checked', this.checked);
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/tables/_datatables.js":[function(require,module,exports){
(function ($) {

    // Datatables
    $('#data-table').dataTable();

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/tables/main.js":[function(require,module,exports){
require('./_datatables');
require('./_check-all');
},{"./_check-all":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/tables/_check-all.js","./_datatables":"/persistent/var/www/html/themekit-3.4.0/dev/app/js/components/tables/_datatables.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/js/pages/users.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('#users-filter-select').on('change', function () {
        if (this.value === 'name') {
            $('#user-first').removeClass('hidden');
            $('#user-search-name').removeClass('hidden');
        } else {
            $('#user-first').addClass('hidden');
            $('#user-search-name').addClass('hidden');
        }
        if (this.value === 'friends') {
            $('.select-friends').removeClass('hidden');

        } else {
            $('.select-friends').addClass('hidden');
        }
        if (this.value === 'name') {
            $('.search-name').removeClass('hidden');

        } else {
            $('.search-name').addClass('hidden');
        }
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint480', function () {
        $('.chat-window-container .panel:not(:last)').remove();
        $('.chat-window-container .panel').attr('id', 'chat-0001');
    });

    $(window).bind('enterBreakpoint768', function () {
        if ($('.chat-window-container .panel').length == 3) {
            $('.chat-window-container .panel:first').remove();
            $('.chat-window-container .panel:first').attr('id', 'chat-0001');
            $('.chat-window-container .panel:last').attr('id', 'chat-0002');
        }
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_check-chat.js":[function(require,module,exports){
module.exports = function () {
    if (!$('html').hasClass('show-chat')) {
        $('.chat-window-container .panel-body').addClass('display-none');
        $('.chat-window-container input').addClass('display-none');
    } else {
        $('.chat-window-container .panel-body').removeClass('display-none');
        $('.chat-window-container input').removeClass('display-none');
    }
};
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_search.js":[function(require,module,exports){
(function ($) {

    // match anything
    $.expr[ ":" ].containsNoCase = function (el, i, m) {
        var search = m[ 3 ];
        if (! search) return false;
        return new RegExp(search, "i").test($(el).text());
    };

    // Search Filter
    function searchFilterCallBack($data, $opt) {
        var search = $data instanceof jQuery ? $data.val() : $(this).val(),
            opt = typeof $opt == 'undefined' ? $data.data.opt : $opt;

        var $target = $(opt.targetSelector);
        $target.show();

        if (search && search.length >= opt.charCount) {
            $target.not(":containsNoCase(" + search + ")").hide();
        }
    }

    // input filter
    $.fn.searchFilter = function (options) {
        var opt = $.extend({
            // target selector
            targetSelector: "",
            // number of characters before search is applied
            charCount: 1
        }, options);

        return this.each(function () {
            var $el = $(this);
            $el.off("keyup", searchFilterCallBack);
            $el.on("keyup", null, {opt: opt}, searchFilterCallBack);
        });

    };

    // Filter by All/Online/Offline
    $(".chat-filter a").on('click', function (e) {

        e.preventDefault();
        $('.chat-contacts li').hide();
        $('.chat-contacts').find($(this).data('target')).show();

        $(".chat-filter li").removeClass('active');
        $(this).parent().addClass('active');

        $(".chat-search input").searchFilter({targetSelector: ".chat-contacts " + $(this).data('target')});

        // Filter Contacts by Search and Tabs
        searchFilterCallBack($(".chat-search input"), {
            targetSelector: ".chat-contacts " + $(this).data('target'),
            charCount: 1
        });
    });

    // Trigger Search Filter
    $(".chat-search input").searchFilter({targetSelector: ".chat-contacts li"});

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_toggle.js":[function(require,module,exports){
(function ($) {

    $('[data-toggle="chat-box"]').on('click', function () {
        $(".chat-contacts li:first").trigger('click');
        if ($(this).data('hide')) $(this).hide();
    });

    (function () {
        var toggleBtn = $('[data-toggle="sidebar-chat"]');

        // If No Sidebar Exit
        if (!toggleBtn.length) return;

        toggleBtn.on('click', function () {

            $('html').toggleClass('show-chat');

            require('./_check-chat')();
        });
    })();

    require('./_check-chat')();
})(jQuery);
},{"./_check-chat":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_check-chat.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_windows.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var container = $('.chat-window-container');

    // Click User
    $(".chat-contacts li").on('click', function () {

        if ($('.chat-window-container [data-user-id="' + $(this).data('userId') + '"]').length) return;

        // If user is offline do nothing
        if ($(this).attr('class') === 'offline') return;

        var source = $("#chat-window-template").html();
        var template = Handlebars.compile(source);

        var context = {user_image: $(this).find('img').attr('src'), user: $(this).find('.contact-name').text()};
        var html = template(context);

        var clone = $(html);

        clone.attr("data-user-id", $(this).data("userId"));

        container.find('.panel:not([id^="chat"])').remove();

        var count = container.find('.panel').length;

        count ++;
        var limit = $(window).width() > 768 ? 3 : 1;
        if (count >= limit) {
            container.find('#chat-000'+ limit).remove();
            count = limit;
        }

        clone.attr('id', 'chat-000' + parseInt(count));
        container.append(clone).show();

        clone.show();
        clone.find('> .panel-body').removeClass('display-none');
        clone.find('> input').removeClass('display-none');
    });

    // Change ID by No. of Windows
    function chatLayout() {
        container.find('.panel').each(function (index, value) {
            $(this).attr('id', 'chat-000' + parseInt(index + 1));
        });
    }

    // remove window
    $("body").on('click', ".chat-window-container .close", function () {
        $(this).parent().parent().remove();
        chatLayout();
        if ($(window).width() < 768) $('.chat-window-container').hide();
    });

    // Chat heading collapse window
    $('body').on('click', '.chat-window-container .panel-heading', function (e) {
        e.preventDefault();
        $(this).parent().find('> .panel-body').toggleClass('display-none');
        $(this).parent().find('> input').toggleClass('display-none');
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_search');
require('./_windows');
require('./_toggle');
},{"./_breakpoints":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_breakpoints.js","./_search":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_search.js","./_toggle":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_toggle.js","./_windows":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/chat/js/_windows.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_async.js":[function(require,module,exports){
function contentLoaded(win, fn) {

    var done = false, top = true,

        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,

        add = modern ? 'addEventListener' : 'attachEvent',
        rem = modern ? 'removeEventListener' : 'detachEvent',
        pre = modern ? '' : 'on',

        init = function (e) {
            if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
            (e.type == 'load' ? win : doc)[ rem ](pre + e.type, init, false);
            if (! done && (done = true)) fn.call(win, e.type || e);
        },

        poll = function () {
            try {
                root.doScroll('left');
            } catch (e) {
                setTimeout(poll, 50);
                return;
            }
            init('poll');
        };

    if (doc.readyState == 'complete') fn.call(win, 'lazy');
    else {
        if (! modern && root.doScroll) {
            try {
                top = ! win.frameElement;
            } catch (e) {
            }
            if (top) poll();
        }
        doc[ add ](pre + 'DOMContentLoaded', init, false);
        doc[ add ](pre + 'readystatechange', init, false);
        win[ add ](pre + 'load', init, false);
    }
}

module.exports = function(urls, callback) {

    var asyncLoader = function (urls, callback) {

        urls.foreach(function (i, file) {
            loadCss(file);
        });

        // checking for a callback function
        if (typeof callback == 'function') {
            // calling the callback
            contentLoaded(window, callback);
        }
    };

    var loadCss = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[ 0 ].appendChild(link);
    };

    // simple foreach implementation
    Array.prototype.foreach = function (callback) {
        for (var i = 0; i < this.length; i ++) {
            callback(i, this[ i ]);
        }
    };

    asyncLoader(urls, callback);

};
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_breakpoints.js":[function(require,module,exports){
(function ($) {

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 320, 480, 768, 1024 ]
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_gridalicious.js":[function(require,module,exports){
(function($){

    $('[data-toggle*="gridalicious"]').each(function () {
        $(this).gridalicious({
            gutter: $(this).data('gutter') || 15,
            width: $(this).data('width') || 370,
            selector: '> div'
        });
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_scrollable.js":[function(require,module,exports){
(function ($) {

    var skin = require('./_skin')();

    $('[data-scrollable], .st-content').niceScroll({
        cursorborder: 0,
        cursorcolor: config.skins[ config.theme ][ skin ][ 'primary-color' ],
        horizrailenabled: false
    });

    $('[data-scrollable]').getNiceScroll().resize();

}(jQuery));
},{"./_skin":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_skin.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_skins.js":[function(require,module,exports){
var asyncLoader = require('./_async');

(function ($) {

    var changeSkin = function () {
        var skin = $.cookie("skin");
        if (typeof skin != 'undefined') {
            asyncLoader([ 'css/' + skin + '.min.css' ], function () {
                $('[data-skin]').removeProp('disabled').parent().removeClass('loading');
            });
        }
    };

    $('[data-skin]').on('click', function () {

        if ($(this).prop('disabled')) return;

        $('[data-skin]').prop('disabled', true);

        $(this).parent().addClass('loading');

        $.cookie("skin", $(this).data('skin'));

        changeSkin();

    });

    var skin = $.cookie("skin");

    if (typeof skin != 'undefined' && skin != 'default') {
        changeSkin();
    }

})(jQuery);
},{"./_async":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_async.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/main.js":[function(require,module,exports){
require('./_breakpoints.js');
require('./_gridalicious.js');
require('./_scrollable.js');
require('./_skins');
},{"./_breakpoints.js":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_breakpoints.js","./_gridalicious.js":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_gridalicious.js","./_scrollable.js":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_scrollable.js","./_skins":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/layout/js/_skins.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/navbar/js/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(window).bind('enterBreakpoint768', function () {
        $(".navbar-main").addClass('dropdown-hover');
    });

    $(window).bind('exitBreakpoint768', function () {
        $(".navbar-main").removeClass('dropdown-hover');
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/navbar/js/_switch.js":[function(require,module,exports){
(function ($) {
    $("[name='switch-checkbox']").bootstrapSwitch({
        offColor: 'danger'
    });
})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/navbar/js/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_switch');
},{"./_breakpoints":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/navbar/js/_breakpoints.js","./_switch":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/navbar/js/_switch.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_breakpoints.js":[function(require,module,exports){
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

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_collapsible.js":[function(require,module,exports){
(function($){

    require('./_transform_collapse')();

})(jQuery);
},{"./_transform_collapse":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_transform_collapse.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_dropdown.js":[function(require,module,exports){
(function ($) {

    var transform_dd = require('./_transform_dropdown'),
        transform_collapse = require('./_transform_collapse');

    transform_dd();

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar[data-type="dropdown"]').length) return;
        $('.sidebar[data-type="dropdown"]').attr('data-type', 'collapse').attr('data-transformed', true);
        transform_collapse();
    });

    function make_dd() {
        if (! $('.sidebar[data-type="collapse"][data-transformed]').length) return;
        $('.sidebar[data-type="collapse"][data-transformed]').attr('data-type', 'dropdown').attr('data-transformed', true);
        transform_dd();
    }

    $(window).bind('enterBreakpoint768', make_dd);

    $(window).bind('enterBreakpoint1024', make_dd);

})(jQuery);
},{"./_transform_collapse":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_transform_collapse.js","./_transform_dropdown":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_transform_dropdown.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_options.js":[function(require,module,exports){
module.exports = function (sidebar) {
    return {
        "transform-button": sidebar.data('transformButton') === true,
        "transform-button-icon": sidebar.data('transformButtonIcon') || 'fa-ellipsis-h'
    };
};
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_sidebar-menu.js":[function(require,module,exports){
(function ($) {

    var sidebars = $('.sidebar');

    sidebars.each(function () {

        var sidebar = $(this);
        var options = require('./_options')(sidebar);

        if (options[ 'transform-button' ]) {
            var button = $('<button type="button"></button>');

            button
                .attr('data-toggle', 'sidebar-transform')
                .addClass('btn btn-default')
                .html('<i class="fa ' + options[ 'transform-button-icon' ] + '"></i>');

            sidebar.find('.sidebar-menu').append(button);
        }
    });

}(jQuery));
},{"./_options":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_options.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_sidebar-toggle.js":[function(require,module,exports){
(function ($) {
    /*jshint browser: true, strict: false */

    $('#subnav').collapse({'toggle': false});

    $('[data-toggle="sidebar-transform"]').on('click', function () {
        $('body').toggleClass('sidebar-mini');
        if ($('body').is('.sidebar-mini')) $('.sidebar-menu .collapse').collapse('hide');
        $('#dropdown-temp').hide();
        $('.sidebar-menu .open').removeClass('open');
    });

})(jQuery);

(function ($) {

    function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    (function () {

        var container = $('.st-container'),

            eventtype = mobilecheck() ? 'touchstart' : 'click',
            resetMenu = function () {

                var effect = container.data('stMenuEffect'),
                    sidebar = $(container.data('stMenuTarget')),
                    htmlOldClass = $('html').get(0).className.match(/st-effect-\S+/ig);

                container.removeClass('st-menu-open');

                setTimeout(function(){
                    if (htmlOldClass !== null) $('html').removeClass(htmlOldClass.join(" "));
                    sidebar.removeClass(effect);
                    container.get(0).className = 'st-container'; // clear
                    sidebar.hide();
                }, 550);

            },

            animate = function (e) {

                e.stopPropagation();
                e.preventDefault();

                if ($(this).hasClass('animating')) return false;
                $(this).addClass('animating');

                var button = $(this),
                    effect = button.data('effect') || 'st-effect-1',
                    target = button.attr('href');

                var currentActiveElement = $('[data-toggle="sidebar-menu"]').not(this).closest('li').length ? $('[data-toggle="sidebar-menu"]').not(this).closest('li') : $('[data-toggle="sidebar-menu"]').not(this);
                currentActiveElement.removeClass('active');

                var activeElement = $(this).closest('li').length ? $(this).closest('li') : $(this);
                activeElement.addClass('active');

                setTimeout(function () {
                    button.removeClass('animating');
                }, 550);

                if (target.length < 3) {
                    if ($('html').hasClass('show-sidebar')) {
                        activeElement.removeClass('active');
                    }
                    $('html').removeClass('show-sidebar');
                    if (activeElement.hasClass('active')) $('html').addClass('show-sidebar');
                    return;
                }

                var sidebar = $(target),
                    direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size;

                if (container.hasClass('st-menu-open')) {
                    activeElement.removeClass('active');
                    resetMenu();
                    return false;
                }

                $('html').addClass(htmlClass);
                sidebar.show();

                container.data('stMenuEffect', effect);
                container.data('stMenuTarget', target);

                sidebar.addClass(effect);
                container.addClass(effect);

                setTimeout(function () {
                    container.addClass('st-menu-open');
                }, 25);
            };

        $('body').on(eventtype, '[data-toggle="sidebar-menu"]', animate);
        $(document).on('keyup', null, 'escape', function(){
            if (container.hasClass('st-menu-open')) {
                $('[data-toggle="sidebar-menu"]')
                    .removeClass('active')
                    .closest('li')
                    .removeClass('active');

                resetMenu();
                return false;
            }
        });

    })();

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_transform_collapse.js":[function(require,module,exports){
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
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_transform_dropdown.js":[function(require,module,exports){
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
},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/main.js":[function(require,module,exports){
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
},{"./_breakpoints":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_breakpoints.js","./_collapsible":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_collapsible.js","./_dropdown":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_dropdown.js","./_sidebar-menu":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_sidebar-menu.js","./_sidebar-toggle":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/sidebar/js/_sidebar-toggle.js"}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/social/js/_timeline.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('.share textarea').on('keyup', function () {
        $(".share button")[ $(this).val() === '' ? 'hide' : 'show' ]();
    });

    if (! $("#scroll-spy").length) return;

    var offset = $("#scroll-spy").offset().top;

    $('body').scrollspy({target: '#scroll-spy', offset: offset});

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/social/js/main.js":[function(require,module,exports){
require('./_timeline');
},{"./_timeline":"/persistent/var/www/html/themekit-3.4.0/dev/app/vendor/social/js/_timeline.js"}]},{},["./app/js/themes/social-1/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvdGhlbWVzL3NvY2lhbC0xL21haW4uanMiLCJhcHAvanMvY29tbW9uL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fZGF0ZXBpY2tlci5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL19taW5pY29sb3JzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvX3Byb2dyZXNzLWJhcnMuanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fc2VsZWN0cGlja2VyLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvX3NsaWRlci5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9tZXNzYWdlcy9fYnJlYWtwb2ludHMuanMiLCJhcHAvanMvY29tcG9uZW50cy9tZXNzYWdlcy9fbmljZXNjcm9sbC5qcyIsImFwcC9qcy9jb21wb25lbnRzL21lc3NhZ2VzL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9vdGhlci9fb2ZmY2FudmFzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvb3RoZXIvX3JhdGluZ3MuanMiLCJhcHAvanMvY29tcG9uZW50cy9vdGhlci9fdG9vbHRpcC5qcyIsImFwcC9qcy9jb21wb25lbnRzL3RhYmxlcy9fY2hlY2stYWxsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL19kYXRhdGFibGVzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL21haW4uanMiLCJhcHAvanMvcGFnZXMvdXNlcnMuanMiLCJhcHAvdmVuZG9yL2NoYXQvanMvX2JyZWFrcG9pbnRzLmpzIiwiYXBwL3ZlbmRvci9jaGF0L2pzL19jaGVjay1jaGF0LmpzIiwiYXBwL3ZlbmRvci9jaGF0L2pzL19zZWFyY2guanMiLCJhcHAvdmVuZG9yL2NoYXQvanMvX3RvZ2dsZS5qcyIsImFwcC92ZW5kb3IvY2hhdC9qcy9fd2luZG93cy5qcyIsImFwcC92ZW5kb3IvY2hhdC9qcy9tYWluLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX2FzeW5jLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX2JyZWFrcG9pbnRzLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX2dyaWRhbGljaW91cy5qcyIsImFwcC92ZW5kb3IvbGF5b3V0L2pzL19zY3JvbGxhYmxlLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX3NraW4uanMiLCJhcHAvdmVuZG9yL2xheW91dC9qcy9fc2tpbnMuanMiLCJhcHAvdmVuZG9yL2xheW91dC9qcy9tYWluLmpzIiwiYXBwL3ZlbmRvci9uYXZiYXIvanMvX2JyZWFrcG9pbnRzLmpzIiwiYXBwL3ZlbmRvci9uYXZiYXIvanMvX3N3aXRjaC5qcyIsImFwcC92ZW5kb3IvbmF2YmFyL2pzL21haW4uanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX2JyZWFrcG9pbnRzLmpzIiwiYXBwL3ZlbmRvci9zaWRlYmFyL2pzL19jb2xsYXBzaWJsZS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fZHJvcGRvd24uanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX29wdGlvbnMuanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX3NpZGViYXItbWVudS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fc2lkZWJhci10b2dnbGUuanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX3RyYW5zZm9ybV9jb2xsYXBzZS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fdHJhbnNmb3JtX2Ryb3Bkb3duLmpzIiwiYXBwL3ZlbmRvci9zaWRlYmFyL2pzL21haW4uanMiLCJhcHAvdmVuZG9yL3NvY2lhbC9qcy9fdGltZWxpbmUuanMiLCJhcHAvdmVuZG9yL3NvY2lhbC9qcy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBDT01NT05cbnJlcXVpcmUoJy4uLy4uL2NvbW1vbi9tYWluJyk7XG5cbi8vIExheW91dFxucmVxdWlyZSgnLi4vLi4vLi4vdmVuZG9yL2xheW91dC9qcy9tYWluJyk7XG5cbi8vIFNpZGViYXJcbnJlcXVpcmUoJy4uLy4uLy4uL3ZlbmRvci9zaWRlYmFyL2pzL21haW4nKTtcblxuLy8gTmF2YmFyXG5yZXF1aXJlKCcuLi8uLi8uLi92ZW5kb3IvbmF2YmFyL2pzL21haW4nKTtcblxuLy8gQ2hhdFxucmVxdWlyZSgnLi4vLi4vLi4vdmVuZG9yL2NoYXQvanMvbWFpbicpO1xuXG4vLyBTb2NpYWxcbnJlcXVpcmUoJy4uLy4uLy4uL3ZlbmRvci9zb2NpYWwvanMvbWFpbicpO1xuXG4vLyBNRVNTQUdFU1xucmVxdWlyZSgnLi4vLi4vY29tcG9uZW50cy9tZXNzYWdlcy9tYWluJyk7XG5cbi8vIENVU1RPTVxucmVxdWlyZSgnLi4vLi4vcGFnZXMvdXNlcnMnKTsiLCJyZXF1aXJlKCcuLi9jb21wb25lbnRzL2Zvcm1zL21haW4nKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvdGFibGVzL21haW4nKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvb3RoZXIvX3Rvb2x0aXAnKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvb3RoZXIvX29mZmNhbnZhcycpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9vdGhlci9fcmF0aW5ncycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gRGF0ZXBpY2tlciBJTklUXG4gICAgJCgnLmRhdGVwaWNrZXInKS5kYXRlcGlja2VyKCk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIE1pbmljb2xvcnMgSU5JVFxuICAgICQoJy5taW5pY29sb3JzJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykubWluaWNvbG9ycyh7XG4gICAgICAgICAgICBjb250cm9sOiAkKHRoaXMpLmF0dHIoJ2RhdGEtY29udHJvbCcpIHx8ICdodWUnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAkKHRoaXMpLmF0dHIoJ2RhdGEtZGVmYXVsdFZhbHVlJykgfHwgJycsXG4gICAgICAgICAgICBpbmxpbmU6ICQodGhpcykuYXR0cignZGF0YS1pbmxpbmUnKSA9PT0gJ3RydWUnLFxuICAgICAgICAgICAgbGV0dGVyQ2FzZTogJCh0aGlzKS5hdHRyKCdkYXRhLWxldHRlckNhc2UnKSB8fCAnbG93ZXJjYXNlJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICQodGhpcykuYXR0cignZGF0YS1vcGFjaXR5JyksXG4gICAgICAgICAgICBwb3NpdGlvbjogJCh0aGlzKS5hdHRyKCdkYXRhLXBvc2l0aW9uJykgfHwgJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKGhleCwgb3BhY2l0eSkge1xuICAgICAgICAgICAgICAgIGlmICghIGhleCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5KSBoZXggKz0gJywgJyArIG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcCdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIFByb2dyZXNzIEJhciBBbmltYXRpb25cbiAgICAkKCcucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykud2lkdGgoJCh0aGlzKS5hdHRyKCdhcmlhLXZhbHVlbm93JykgKyAnJScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc2VsZWN0cGlja2VyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmRhdGEoJ3dpZHRoJykgfHwgJzEwMCUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJyNleDEnKS5zbGlkZXIoe1xuICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICdDdXJyZW50IHZhbHVlOiAnICsgdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIjZXgyXCIpLnNsaWRlcigpO1xuXG4gICAgJChcIiNleDZcIikuc2xpZGVyKCk7XG5cbiAgICAkKFwiI2V4NlwiKS5vbihcInNsaWRlXCIsIGZ1bmN0aW9uIChzbGlkZUV2dCkge1xuICAgICAgICAkKFwiI2V4NlNsaWRlclZhbFwiKS50ZXh0KHNsaWRlRXZ0LnZhbHVlKTtcbiAgICB9KTtcblxuICAgICQoJy5zbGlkZXItaGFuZGxlJykuaHRtbCgnPGkgY2xhc3M9XCJmYSBmYS1iYXJzIGZhLXJvdGF0ZS05MFwiPjwvaT4nKTtcblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19wcm9ncmVzcy1iYXJzJyk7XG5yZXF1aXJlKCcuL19zbGlkZXInKTtcbnJlcXVpcmUoJy4vX3NlbGVjdHBpY2tlcicpO1xucmVxdWlyZSgnLi9fZGF0ZXBpY2tlcicpO1xucmVxdWlyZSgnLi9fbWluaWNvbG9ycycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDMyMCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGltZyA9ICQoJy5tZXNzYWdlcy1saXN0IC5wYW5lbCB1bCBpbWcnKTtcbiAgICAgICAgJCgnLm1lc3NhZ2VzLWxpc3QgLnBhbmVsIHVsJykud2lkdGgoaW1nLmZpcnN0KCkud2lkdGgoKSAqIGltZy5sZW5ndGgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2V4aXRCcmVha3BvaW50MzIwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubWVzc2FnZXMtbGlzdCAucGFuZWwgdWwnKS53aWR0aCgnYXV0bycpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgbmljZSA9ICQoJy5tZXNzYWdlcy1saXN0IC5wYW5lbCcpLm5pY2VTY3JvbGwoe2N1cnNvcmJvcmRlcjogMCwgY3Vyc29yY29sb3I6IFwiIzI1YWQ5ZlwiLCB6aW5kZXg6IDF9KTtcblxuICAgIHZhciBfc3VwZXIgPSBuaWNlLmdldENvbnRlbnRTaXplO1xuXG4gICAgbmljZS5nZXRDb250ZW50U2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSBfc3VwZXIuY2FsbChuaWNlKTtcbiAgICAgICAgcGFnZS5oID0gbmljZS53aW4uaGVpZ2h0KCk7XG4gICAgICAgIHJldHVybiBwYWdlO1xuICAgIH07XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMnKTtcbnJlcXVpcmUoJy4vX25pY2VzY3JvbGwnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIE9mZkNhbnZhc1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnJvdy1vZmZjYW52YXMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFJhdGluZ3NcbiAgICAkKCcucmF0aW5nIHNwYW4uc3RhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgdmFyIGNsaWNrZWRJbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSBjbGlja2VkSW5kZXg7IGkgPCB0b3RhbDsgaSArKykge1xuICAgICAgICAgICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5lcShpKS5hZGRDbGFzcygnZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVG9vbHRpcFxuICAgICQoXCJib2R5XCIpLnRvb2x0aXAoe3NlbGVjdG9yOiAnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScsIGNvbnRhaW5lcjogXCJib2R5XCJ9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVGFibGUgQ2hlY2tib3ggQWxsXG4gICAgJCgnI2NoZWNrQWxsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ3RkIGlucHV0OmNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIERhdGF0YWJsZXNcbiAgICAkKCcjZGF0YS10YWJsZScpLmRhdGFUYWJsZSgpO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2RhdGF0YWJsZXMnKTtcbnJlcXVpcmUoJy4vX2NoZWNrLWFsbCcpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCgnI3VzZXJzLWZpbHRlci1zZWxlY3QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAkKCcjdXNlci1maXJzdCcpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICQoJyN1c2VyLXNlYXJjaC1uYW1lJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnI3VzZXItZmlyc3QnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcjdXNlci1zZWFyY2gtbmFtZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ2ZyaWVuZHMnKSB7XG4gICAgICAgICAgICAkKCcuc2VsZWN0LWZyaWVuZHMnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5zZWxlY3QtZnJpZW5kcycpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAkKCcuc2VhcmNoLW5hbWUnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5zZWFyY2gtbmFtZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NDgwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbDpub3QoOmxhc3QpJykucmVtb3ZlKCk7XG4gICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsJykuYXR0cignaWQnLCAnY2hhdC0wMDAxJyk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NzY4JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWwnKS5sZW5ndGggPT0gMykge1xuICAgICAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWw6Zmlyc3QnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXIgLnBhbmVsOmZpcnN0JykuYXR0cignaWQnLCAnY2hhdC0wMDAxJyk7XG4gICAgICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbDpsYXN0JykuYXR0cignaWQnLCAnY2hhdC0wMDAyJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoISQoJ2h0bWwnKS5oYXNDbGFzcygnc2hvdy1jaGF0JykpIHtcbiAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWwtYm9keScpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICAgICAgJCgnLmNoYXQtd2luZG93LWNvbnRhaW5lciBpbnB1dCcpLmFkZENsYXNzKCdkaXNwbGF5LW5vbmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIC5wYW5lbC1ib2R5JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIGlucHV0JykucmVtb3ZlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgIH1cbn07IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAvLyBtYXRjaCBhbnl0aGluZ1xuICAgICQuZXhwclsgXCI6XCIgXS5jb250YWluc05vQ2FzZSA9IGZ1bmN0aW9uIChlbCwgaSwgbSkge1xuICAgICAgICB2YXIgc2VhcmNoID0gbVsgMyBdO1xuICAgICAgICBpZiAoISBzZWFyY2gpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoc2VhcmNoLCBcImlcIikudGVzdCgkKGVsKS50ZXh0KCkpO1xuICAgIH07XG5cbiAgICAvLyBTZWFyY2ggRmlsdGVyXG4gICAgZnVuY3Rpb24gc2VhcmNoRmlsdGVyQ2FsbEJhY2soJGRhdGEsICRvcHQpIHtcbiAgICAgICAgdmFyIHNlYXJjaCA9ICRkYXRhIGluc3RhbmNlb2YgalF1ZXJ5ID8gJGRhdGEudmFsKCkgOiAkKHRoaXMpLnZhbCgpLFxuICAgICAgICAgICAgb3B0ID0gdHlwZW9mICRvcHQgPT0gJ3VuZGVmaW5lZCcgPyAkZGF0YS5kYXRhLm9wdCA6ICRvcHQ7XG5cbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKG9wdC50YXJnZXRTZWxlY3Rvcik7XG4gICAgICAgICR0YXJnZXQuc2hvdygpO1xuXG4gICAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoLmxlbmd0aCA+PSBvcHQuY2hhckNvdW50KSB7XG4gICAgICAgICAgICAkdGFyZ2V0Lm5vdChcIjpjb250YWluc05vQ2FzZShcIiArIHNlYXJjaCArIFwiKVwiKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbnB1dCBmaWx0ZXJcbiAgICAkLmZuLnNlYXJjaEZpbHRlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBvcHQgPSAkLmV4dGVuZCh7XG4gICAgICAgICAgICAvLyB0YXJnZXQgc2VsZWN0b3JcbiAgICAgICAgICAgIHRhcmdldFNlbGVjdG9yOiBcIlwiLFxuICAgICAgICAgICAgLy8gbnVtYmVyIG9mIGNoYXJhY3RlcnMgYmVmb3JlIHNlYXJjaCBpcyBhcHBsaWVkXG4gICAgICAgICAgICBjaGFyQ291bnQ6IDFcbiAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgJGVsID0gJCh0aGlzKTtcbiAgICAgICAgICAgICRlbC5vZmYoXCJrZXl1cFwiLCBzZWFyY2hGaWx0ZXJDYWxsQmFjayk7XG4gICAgICAgICAgICAkZWwub24oXCJrZXl1cFwiLCBudWxsLCB7b3B0OiBvcHR9LCBzZWFyY2hGaWx0ZXJDYWxsQmFjayk7XG4gICAgICAgIH0pO1xuXG4gICAgfTtcblxuICAgIC8vIEZpbHRlciBieSBBbGwvT25saW5lL09mZmxpbmVcbiAgICAkKFwiLmNoYXQtZmlsdGVyIGFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5jaGF0LWNvbnRhY3RzIGxpJykuaGlkZSgpO1xuICAgICAgICAkKCcuY2hhdC1jb250YWN0cycpLmZpbmQoJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSkuc2hvdygpO1xuXG4gICAgICAgICQoXCIuY2hhdC1maWx0ZXIgbGlcIikucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAkKFwiLmNoYXQtc2VhcmNoIGlucHV0XCIpLnNlYXJjaEZpbHRlcih7dGFyZ2V0U2VsZWN0b3I6IFwiLmNoYXQtY29udGFjdHMgXCIgKyAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpfSk7XG5cbiAgICAgICAgLy8gRmlsdGVyIENvbnRhY3RzIGJ5IFNlYXJjaCBhbmQgVGFic1xuICAgICAgICBzZWFyY2hGaWx0ZXJDYWxsQmFjaygkKFwiLmNoYXQtc2VhcmNoIGlucHV0XCIpLCB7XG4gICAgICAgICAgICB0YXJnZXRTZWxlY3RvcjogXCIuY2hhdC1jb250YWN0cyBcIiArICQodGhpcykuZGF0YSgndGFyZ2V0JyksXG4gICAgICAgICAgICBjaGFyQ291bnQ6IDFcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBUcmlnZ2VyIFNlYXJjaCBGaWx0ZXJcbiAgICAkKFwiLmNoYXQtc2VhcmNoIGlucHV0XCIpLnNlYXJjaEZpbHRlcih7dGFyZ2V0U2VsZWN0b3I6IFwiLmNoYXQtY29udGFjdHMgbGlcIn0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJjaGF0LWJveFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5jaGF0LWNvbnRhY3RzIGxpOmZpcnN0XCIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ2hpZGUnKSkgJCh0aGlzKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9nZ2xlQnRuID0gJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1jaGF0XCJdJyk7XG5cbiAgICAgICAgLy8gSWYgTm8gU2lkZWJhciBFeGl0XG4gICAgICAgIGlmICghdG9nZ2xlQnRuLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgICAgIHRvZ2dsZUJ0bi5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICQoJ2h0bWwnKS50b2dnbGVDbGFzcygnc2hvdy1jaGF0Jyk7XG5cbiAgICAgICAgICAgIHJlcXVpcmUoJy4vX2NoZWNrLWNoYXQnKSgpO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgcmVxdWlyZSgnLi9fY2hlY2stY2hhdCcpKCk7XG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGNvbnRhaW5lciA9ICQoJy5jaGF0LXdpbmRvdy1jb250YWluZXInKTtcblxuICAgIC8vIENsaWNrIFVzZXJcbiAgICAkKFwiLmNoYXQtY29udGFjdHMgbGlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGlmICgkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyIFtkYXRhLXVzZXItaWQ9XCInICsgJCh0aGlzKS5kYXRhKCd1c2VySWQnKSArICdcIl0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICAvLyBJZiB1c2VyIGlzIG9mZmxpbmUgZG8gbm90aGluZ1xuICAgICAgICBpZiAoJCh0aGlzKS5hdHRyKCdjbGFzcycpID09PSAnb2ZmbGluZScpIHJldHVybjtcblxuICAgICAgICB2YXIgc291cmNlID0gJChcIiNjaGF0LXdpbmRvdy10ZW1wbGF0ZVwiKS5odG1sKCk7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShzb3VyY2UpO1xuXG4gICAgICAgIHZhciBjb250ZXh0ID0ge3VzZXJfaW1hZ2U6ICQodGhpcykuZmluZCgnaW1nJykuYXR0cignc3JjJyksIHVzZXI6ICQodGhpcykuZmluZCgnLmNvbnRhY3QtbmFtZScpLnRleHQoKX07XG4gICAgICAgIHZhciBodG1sID0gdGVtcGxhdGUoY29udGV4dCk7XG5cbiAgICAgICAgdmFyIGNsb25lID0gJChodG1sKTtcblxuICAgICAgICBjbG9uZS5hdHRyKFwiZGF0YS11c2VyLWlkXCIsICQodGhpcykuZGF0YShcInVzZXJJZFwiKSk7XG5cbiAgICAgICAgY29udGFpbmVyLmZpbmQoJy5wYW5lbDpub3QoW2lkXj1cImNoYXRcIl0pJykucmVtb3ZlKCk7XG5cbiAgICAgICAgdmFyIGNvdW50ID0gY29udGFpbmVyLmZpbmQoJy5wYW5lbCcpLmxlbmd0aDtcblxuICAgICAgICBjb3VudCArKztcbiAgICAgICAgdmFyIGxpbWl0ID0gJCh3aW5kb3cpLndpZHRoKCkgPiA3NjggPyAzIDogMTtcbiAgICAgICAgaWYgKGNvdW50ID49IGxpbWl0KSB7XG4gICAgICAgICAgICBjb250YWluZXIuZmluZCgnI2NoYXQtMDAwJysgbGltaXQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgY291bnQgPSBsaW1pdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsb25lLmF0dHIoJ2lkJywgJ2NoYXQtMDAwJyArIHBhcnNlSW50KGNvdW50KSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoY2xvbmUpLnNob3coKTtcblxuICAgICAgICBjbG9uZS5zaG93KCk7XG4gICAgICAgIGNsb25lLmZpbmQoJz4gLnBhbmVsLWJvZHknKS5yZW1vdmVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgICAgIGNsb25lLmZpbmQoJz4gaW5wdXQnKS5yZW1vdmVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgfSk7XG5cbiAgICAvLyBDaGFuZ2UgSUQgYnkgTm8uIG9mIFdpbmRvd3NcbiAgICBmdW5jdGlvbiBjaGF0TGF5b3V0KCkge1xuICAgICAgICBjb250YWluZXIuZmluZCgnLnBhbmVsJykuZWFjaChmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2lkJywgJ2NoYXQtMDAwJyArIHBhcnNlSW50KGluZGV4ICsgMSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgd2luZG93XG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgXCIuY2hhdC13aW5kb3ctY29udGFpbmVyIC5jbG9zZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucmVtb3ZlKCk7XG4gICAgICAgIGNoYXRMYXlvdXQoKTtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSAkKCcuY2hhdC13aW5kb3ctY29udGFpbmVyJykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hhdCBoZWFkaW5nIGNvbGxhcHNlIHdpbmRvd1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmNoYXQtd2luZG93LWNvbnRhaW5lciAucGFuZWwtaGVhZGluZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCc+IC5wYW5lbC1ib2R5JykudG9nZ2xlQ2xhc3MoJ2Rpc3BsYXktbm9uZScpO1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJz4gaW5wdXQnKS50b2dnbGVDbGFzcygnZGlzcGxheS1ub25lJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCJyZXF1aXJlKCcuL19icmVha3BvaW50cycpO1xucmVxdWlyZSgnLi9fc2VhcmNoJyk7XG5yZXF1aXJlKCcuL193aW5kb3dzJyk7XG5yZXF1aXJlKCcuL190b2dnbGUnKTsiLCJmdW5jdGlvbiBjb250ZW50TG9hZGVkKHdpbiwgZm4pIHtcblxuICAgIHZhciBkb25lID0gZmFsc2UsIHRvcCA9IHRydWUsXG5cbiAgICAgICAgZG9jID0gd2luLmRvY3VtZW50LFxuICAgICAgICByb290ID0gZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICAgICAgbW9kZXJuID0gZG9jLmFkZEV2ZW50TGlzdGVuZXIsXG5cbiAgICAgICAgYWRkID0gbW9kZXJuID8gJ2FkZEV2ZW50TGlzdGVuZXInIDogJ2F0dGFjaEV2ZW50JyxcbiAgICAgICAgcmVtID0gbW9kZXJuID8gJ3JlbW92ZUV2ZW50TGlzdGVuZXInIDogJ2RldGFjaEV2ZW50JyxcbiAgICAgICAgcHJlID0gbW9kZXJuID8gJycgOiAnb24nLFxuXG4gICAgICAgIGluaXQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUudHlwZSA9PSAncmVhZHlzdGF0ZWNoYW5nZScgJiYgZG9jLnJlYWR5U3RhdGUgIT0gJ2NvbXBsZXRlJykgcmV0dXJuO1xuICAgICAgICAgICAgKGUudHlwZSA9PSAnbG9hZCcgPyB3aW4gOiBkb2MpWyByZW0gXShwcmUgKyBlLnR5cGUsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgICAgIGlmICghIGRvbmUgJiYgKGRvbmUgPSB0cnVlKSkgZm4uY2FsbCh3aW4sIGUudHlwZSB8fCBlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByb290LmRvU2Nyb2xsKCdsZWZ0Jyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChwb2xsLCA1MCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5pdCgncG9sbCcpO1xuICAgICAgICB9O1xuXG4gICAgaWYgKGRvYy5yZWFkeVN0YXRlID09ICdjb21wbGV0ZScpIGZuLmNhbGwod2luLCAnbGF6eScpO1xuICAgIGVsc2Uge1xuICAgICAgICBpZiAoISBtb2Rlcm4gJiYgcm9vdC5kb1Njcm9sbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0b3AgPSAhIHdpbi5mcmFtZUVsZW1lbnQ7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9wKSBwb2xsKCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jWyBhZGQgXShwcmUgKyAnRE9NQ29udGVudExvYWRlZCcsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgZG9jWyBhZGQgXShwcmUgKyAncmVhZHlzdGF0ZWNoYW5nZScsIGluaXQsIGZhbHNlKTtcbiAgICAgICAgd2luWyBhZGQgXShwcmUgKyAnbG9hZCcsIGluaXQsIGZhbHNlKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJscywgY2FsbGJhY2spIHtcblxuICAgIHZhciBhc3luY0xvYWRlciA9IGZ1bmN0aW9uICh1cmxzLCBjYWxsYmFjaykge1xuXG4gICAgICAgIHVybHMuZm9yZWFjaChmdW5jdGlvbiAoaSwgZmlsZSkge1xuICAgICAgICAgICAgbG9hZENzcyhmaWxlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY2hlY2tpbmcgZm9yIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBjYWxsaW5nIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgY29udGVudExvYWRlZCh3aW5kb3csIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbG9hZENzcyA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbIDAgXS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9O1xuXG4gICAgLy8gc2ltcGxlIGZvcmVhY2ggaW1wbGVtZW50YXRpb25cbiAgICBBcnJheS5wcm90b3R5cGUuZm9yZWFjaCA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhpLCB0aGlzWyBpIF0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFzeW5jTG9hZGVyKHVybHMsIGNhbGxiYWNrKTtcblxufTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgICQod2luZG93KS5zZXRCcmVha3BvaW50cyh7XG4gICAgICAgIGRpc3RpbmN0OiB0cnVlLFxuICAgICAgICBicmVha3BvaW50czogWyAzMjAsIDQ4MCwgNzY4LCAxMDI0IF1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCl7XG5cbiAgICAkKCdbZGF0YS10b2dnbGUqPVwiZ3JpZGFsaWNpb3VzXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuZ3JpZGFsaWNpb3VzKHtcbiAgICAgICAgICAgIGd1dHRlcjogJCh0aGlzKS5kYXRhKCdndXR0ZXInKSB8fCAxNSxcbiAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmRhdGEoJ3dpZHRoJykgfHwgMzcwLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICc+IGRpdidcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4vX3NraW4nKSgpO1xuXG4gICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0sIC5zdC1jb250ZW50JykubmljZVNjcm9sbCh7XG4gICAgICAgIGN1cnNvcmJvcmRlcjogMCxcbiAgICAgICAgY3Vyc29yY29sb3I6IGNvbmZpZy5za2luc1sgY29uZmlnLnRoZW1lIF1bIHNraW4gXVsgJ3ByaW1hcnktY29sb3InIF0sXG4gICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IGZhbHNlXG4gICAgfSk7XG5cbiAgICAkKCdbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcblxufShqUXVlcnkpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZSgnc2tpbicpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNraW4gPSAnZGVmYXVsdCc7XG4gICAgfVxuICAgIHJldHVybiBza2luO1xufSk7IiwidmFyIGFzeW5jTG9hZGVyID0gcmVxdWlyZSgnLi9fYXN5bmMnKTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgY2hhbmdlU2tpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIik7XG4gICAgICAgIGlmICh0eXBlb2Ygc2tpbiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgYXN5bmNMb2FkZXIoWyAnY3NzLycgKyBza2luICsgJy5taW4uY3NzJyBdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5yZW1vdmVQcm9wKCdkaXNhYmxlZCcpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkKCdbZGF0YS1za2luXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBpZiAoJCh0aGlzKS5wcm9wKCdkaXNhYmxlZCcpKSByZXR1cm47XG5cbiAgICAgICAgJCgnW2RhdGEtc2tpbl0nKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAkLmNvb2tpZShcInNraW5cIiwgJCh0aGlzKS5kYXRhKCdza2luJykpO1xuXG4gICAgICAgIGNoYW5nZVNraW4oKTtcblxuICAgIH0pO1xuXG4gICAgdmFyIHNraW4gPSAkLmNvb2tpZShcInNraW5cIik7XG5cbiAgICBpZiAodHlwZW9mIHNraW4gIT0gJ3VuZGVmaW5lZCcgJiYgc2tpbiAhPSAnZGVmYXVsdCcpIHtcbiAgICAgICAgY2hhbmdlU2tpbigpO1xuICAgIH1cblxufSkoalF1ZXJ5KTsiLCJyZXF1aXJlKCcuL19icmVha3BvaW50cy5qcycpO1xucmVxdWlyZSgnLi9fZ3JpZGFsaWNpb3VzLmpzJyk7XG5yZXF1aXJlKCcuL19zY3JvbGxhYmxlLmpzJyk7XG5yZXF1aXJlKCcuL19za2lucycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDc2OCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5uYXZiYXItbWFpblwiKS5hZGRDbGFzcygnZHJvcGRvd24taG92ZXInKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5iaW5kKCdleGl0QnJlYWtwb2ludDc2OCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5uYXZiYXItbWFpblwiKS5yZW1vdmVDbGFzcygnZHJvcGRvd24taG92ZXInKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgICQoXCJbbmFtZT0nc3dpdGNoLWNoZWNrYm94J11cIikuYm9vdHN0cmFwU3dpdGNoKHtcbiAgICAgICAgb2ZmQ29sb3I6ICdkYW5nZXInXG4gICAgfSk7XG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2JyZWFrcG9pbnRzJyk7XG5yZXF1aXJlKCcuL19zd2l0Y2gnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ3NjgnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIGlmICgkKCcuaGlkZS1zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQxMDI0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBpZiAoJCgnLmhpZGUtc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAkKFwiaHRtbFwiKS5hZGRDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NDgwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24oJCl7XG5cbiAgICByZXF1aXJlKCcuL190cmFuc2Zvcm1fY29sbGFwc2UnKSgpO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHRyYW5zZm9ybV9kZCA9IHJlcXVpcmUoJy4vX3RyYW5zZm9ybV9kcm9wZG93bicpLFxuICAgICAgICB0cmFuc2Zvcm1fY29sbGFwc2UgPSByZXF1aXJlKCcuL190cmFuc2Zvcm1fY29sbGFwc2UnKTtcblxuICAgIHRyYW5zZm9ybV9kZCgpO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDQ4MCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKS5hdHRyKCdkYXRhLXR5cGUnLCAnY29sbGFwc2UnKS5hdHRyKCdkYXRhLXRyYW5zZm9ybWVkJywgdHJ1ZSk7XG4gICAgICAgIHRyYW5zZm9ybV9jb2xsYXBzZSgpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gbWFrZV9kZCgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiY29sbGFwc2VcIl1bZGF0YS10cmFuc2Zvcm1lZF0nKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiY29sbGFwc2VcIl1bZGF0YS10cmFuc2Zvcm1lZF0nKS5hdHRyKCdkYXRhLXR5cGUnLCAnZHJvcGRvd24nKS5hdHRyKCdkYXRhLXRyYW5zZm9ybWVkJywgdHJ1ZSk7XG4gICAgICAgIHRyYW5zZm9ybV9kZCgpO1xuICAgIH1cblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ3NjgnLCBtYWtlX2RkKTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQxMDI0JywgbWFrZV9kZCk7XG5cbn0pKGpRdWVyeSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2lkZWJhcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIFwidHJhbnNmb3JtLWJ1dHRvblwiOiBzaWRlYmFyLmRhdGEoJ3RyYW5zZm9ybUJ1dHRvbicpID09PSB0cnVlLFxuICAgICAgICBcInRyYW5zZm9ybS1idXR0b24taWNvblwiOiBzaWRlYmFyLmRhdGEoJ3RyYW5zZm9ybUJ1dHRvbkljb24nKSB8fCAnZmEtZWxsaXBzaXMtaCdcbiAgICB9O1xufTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBzaWRlYmFycyA9ICQoJy5zaWRlYmFyJyk7XG5cbiAgICBzaWRlYmFycy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcyk7XG4gICAgICAgIHZhciBvcHRpb25zID0gcmVxdWlyZSgnLi9fb3B0aW9ucycpKHNpZGViYXIpO1xuXG4gICAgICAgIGlmIChvcHRpb25zWyAndHJhbnNmb3JtLWJ1dHRvbicgXSkge1xuICAgICAgICAgICAgdmFyIGJ1dHRvbiA9ICQoJzxidXR0b24gdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPicpO1xuXG4gICAgICAgICAgICBidXR0b25cbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS10b2dnbGUnLCAnc2lkZWJhci10cmFuc2Zvcm0nKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYnRuIGJ0bi1kZWZhdWx0JylcbiAgICAgICAgICAgICAgICAuaHRtbCgnPGkgY2xhc3M9XCJmYSAnICsgb3B0aW9uc1sgJ3RyYW5zZm9ybS1idXR0b24taWNvbicgXSArICdcIj48L2k+Jyk7XG5cbiAgICAgICAgICAgIHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudScpLmFwcGVuZChidXR0b24pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbn0oalF1ZXJ5KSk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgLypqc2hpbnQgYnJvd3NlcjogdHJ1ZSwgc3RyaWN0OiBmYWxzZSAqL1xuXG4gICAgJCgnI3N1Ym5hdicpLmNvbGxhcHNlKHsndG9nZ2xlJzogZmFsc2V9KTtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItdHJhbnNmb3JtXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3NpZGViYXItbWluaScpO1xuICAgICAgICBpZiAoJCgnYm9keScpLmlzKCcuc2lkZWJhci1taW5pJykpICQoJy5zaWRlYmFyLW1lbnUgLmNvbGxhcHNlJykuY29sbGFwc2UoJ2hpZGUnKTtcbiAgICAgICAgJCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICQoJy5zaWRlYmFyLW1lbnUgLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuICAgIGZ1bmN0aW9uIG1vYmlsZWNoZWNrKCkge1xuICAgICAgICB2YXIgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgKGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICBpZiAoLyhhbmRyb2lkfGlwYWR8cGxheWJvb2t8c2lsa3xiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG5ldGZyb250fG9wZXJhIG0ob2J8aW4paXxwYWxtKCBvcyk/fHBob25lfHAoaXhpfHJlKVxcL3xwbHVja2VyfHBvY2tldHxwc3B8c2VyaWVzKDR8NikwfHN5bWJpYW58dHJlb3x1cFxcLihicm93c2VyfGxpbmspfHZvZGFmb25lfHdhcHx3aW5kb3dzIChjZXxwaG9uZSl8eGRhfHhpaW5vL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSlcbiAgICAgICAgICAgICAgICBjaGVjayA9IHRydWU7XG4gICAgICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gJCgnLnN0LWNvbnRhaW5lcicpLFxuXG4gICAgICAgICAgICBldmVudHR5cGUgPSBtb2JpbGVjaGVjaygpID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJyxcbiAgICAgICAgICAgIHJlc2V0TWVudSA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIHZhciBlZmZlY3QgPSBjb250YWluZXIuZGF0YSgnc3RNZW51RWZmZWN0JyksXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIgPSAkKGNvbnRhaW5lci5kYXRhKCdzdE1lbnVUYXJnZXQnKSksXG4gICAgICAgICAgICAgICAgICAgIGh0bWxPbGRDbGFzcyA9ICQoJ2h0bWwnKS5nZXQoMCkuY2xhc3NOYW1lLm1hdGNoKC9zdC1lZmZlY3QtXFxTKy9pZyk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3N0LW1lbnUtb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbE9sZENsYXNzICE9PSBudWxsKSAkKCdodG1sJykucmVtb3ZlQ2xhc3MoaHRtbE9sZENsYXNzLmpvaW4oXCIgXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5yZW1vdmVDbGFzcyhlZmZlY3QpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuZ2V0KDApLmNsYXNzTmFtZSA9ICdzdC1jb250YWluZXInOyAvLyBjbGVhclxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LCA1NTApO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhbmltYXRlID0gZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FuaW1hdGluZycpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0aW5nJyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYnV0dG9uID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0ID0gYnV0dG9uLmRhdGEoJ2VmZmVjdCcpIHx8ICdzdC1lZmZlY3QtMScsXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IGJ1dHRvbi5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudEFjdGl2ZUVsZW1lbnQgPSAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl0nKS5ub3QodGhpcykuY2xvc2VzdCgnbGknKS5sZW5ndGggPyAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl0nKS5ub3QodGhpcykuY2xvc2VzdCgnbGknKSA6ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpLm5vdCh0aGlzKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50QWN0aXZlRWxlbWVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9ICQodGhpcykuY2xvc2VzdCgnbGknKS5sZW5ndGggPyAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykgOiAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDbGFzcygnYW5pbWF0aW5nJyk7XG4gICAgICAgICAgICAgICAgfSwgNTUwKTtcblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnaHRtbCcpLmhhc0NsYXNzKCdzaG93LXNpZGViYXInKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSAkKCdodG1sJykuYWRkQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRhcmdldCksXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IHNpZGViYXIuaXMoJy5sZWZ0JykgPyAnbCcgOiAncicsXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBzaWRlYmFyLmdldCgwKS5jbGFzc05hbWUubWF0Y2goL3NpZGViYXItc2l6ZS0oXFxTKykvKS5wb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbENsYXNzID0gJ3N0LWVmZmVjdC0nICsgZGlyZWN0aW9uICsgc2l6ZTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuaGFzQ2xhc3MoJ3N0LW1lbnUtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICByZXNldE1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcyhodG1sQ2xhc3MpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmRhdGEoJ3N0TWVudUVmZmVjdCcsIGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmRhdGEoJ3N0TWVudVRhcmdldCcsIHRhcmdldCk7XG5cbiAgICAgICAgICAgICAgICBzaWRlYmFyLmFkZENsYXNzKGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKGVmZmVjdCk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZENsYXNzKCdzdC1tZW51LW9wZW4nKTtcbiAgICAgICAgICAgICAgICB9LCAyNSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICQoJ2JvZHknKS5vbihldmVudHR5cGUsICdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl0nLCBhbmltYXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgbnVsbCwgJ2VzY2FwZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmhhc0NsYXNzKCdzdC1tZW51LW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIHJlc2V0TWVudSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9KSgpO1xuXG59KShqUXVlcnkpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZCA9ICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdJyk7XG5cbiAgICBpZiAoZGQubGVuZ3RoKSB7XG5cbiAgICAgICAgJCgnLnNpZGViYXIgW2RhdGEtc2Nyb2xsYWJsZV0gPiB1bCA+IGxpID4gYScpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgICAkKCcuc2lkZWJhciBbZGF0YS1zY3JvbGxhYmxlXSA+IHVsID4gbGkuZHJvcGRvd24gPiBhJykub2ZmKCdtb3VzZWVudGVyJyk7XG4gICAgICAgICQoJy5zaWRlYmFyIFtkYXRhLXNjcm9sbGFibGVdID4gdWwgPiBsaSA+IGEnKS5vZmYoJ21vdXNlZW50ZXInKTtcbiAgICAgICAgJCgnLnNpZGViYXIgW2RhdGEtc2Nyb2xsYWJsZV0gPiB1bCA+IGxpID4gYScpLm9mZignY2xpY2snKTtcbiAgICAgICAgJCgnLnNpZGViYXInKS5vZmYoJ21vdXNlbGVhdmUnKTtcbiAgICAgICAgJCgnLnNpZGViYXIgLmRyb3Bkb3duJykub2ZmKCdtb3VzZW92ZXInKTtcbiAgICAgICAgJCgnLnNpZGViYXIgLmRyb3Bkb3duJykub2ZmKCdtb3VzZW91dCcpO1xuICAgICAgICAkKCdib2R5Jykub2ZmKCdtb3VzZW91dCcsICcjZHJvcGRvd24tdGVtcCAuZHJvcGRvd24nKTtcblxuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9mZignc2hvd24uYnMuY29sbGFwc2UnKTtcbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vZmYoJ3Nob3cuYnMuY29sbGFwc2UnKTtcbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vZmYoJ2hpZGUuYnMuY29sbGFwc2UnKTtcbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vZmYoJ2hpZGRlbi5icy5jb2xsYXBzZScpO1xuXG4gICAgICAgIGRkLmZpbmQoJyNkcm9wZG93bi10ZW1wJykucmVtb3ZlKCk7XG5cbiAgICAgICAgZGQuZmluZCgnLmhhc1N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnZHJvcGRvd24nKVxuICAgICAgICAgICAgLmZpbmQoJz4gdWwnKS5hZGRDbGFzcygnY29sbGFwc2UnKS5yZW1vdmVDbGFzcygnZHJvcGRvd24tbWVudSBzdWJtZW51LWhpZGUgc3VibWVudS1zaG93JylcbiAgICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgICAgLmZpbmQoJz4gYScpLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2NvbGxhcHNlJyk7XG5cbiAgICAgICAgZGQuZmluZCgnLmNvbGxhcHNlJykuY29sbGFwc2Uoeyd0b2dnbGUnOiBmYWxzZX0pO1xuXG4gICAgICAgICQoJy5zaWRlYmFyIHVsLmNvbGxhcHNlJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyIFtkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZVxuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICAgIGlmICgkKCcuc2lkZWJhci1taW5pJykubGVuZ3RoKSAkKCcuc2lkZWJhci1taW5pJykucmVtb3ZlQ2xhc3MoJ3NpZGViYXItbWluaScpLmRhdGEoJ21pbmknLCB0cnVlKTtcblxuICAgICAgICAgICAgdmFyIHBhcmVudHMgPSAkKHRoaXMpLnBhcmVudHMoJ3VsOmZpcnN0JykuZmluZCgnPiBsaS5vcGVuIFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJyk7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vbignaGlkZS5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaXMoJy5zaWRlYmFyLW1lbnUgW2RhdGEtc2Nyb2xsYWJsZV0gPiB1bCA+IGxpID4gdWwnKSkge1xuICAgICAgICAgICAgICAgIGlmICgkKCcuc2hvdy1zaWRlYmFyJykuZGF0YSgnbWluaScpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zaG93LXNpZGViYXInKS5hZGRDbGFzcygnc2lkZWJhci1taW5pJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJvcGVuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGQgPSAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpO1xuXG4gICAgaWYgKGRkLmxlbmd0aCkge1xuXG4gICAgICAgICQoJy5zaWRlYmFyIHVsLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3cuYnMuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLmNvbGxhcHNlJyk7XG5cbiAgICAgICAgZGQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbmljZSA9IHNpZGViYXIuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKClbIDAgXTtcblxuICAgICAgICAgICAgbmljZS5zY3JvbGxzdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5pcygnW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykpIHJldHVybjtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUnKS5hZGRDbGFzcygnc2Nyb2xsaW5nJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCA+IHVsID4gbGknKS5lbXB0eSgpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbmljZS5zY3JvbGxlbmQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICghIHNpZGViYXIuaXMoJ1tkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpKSByZXR1cm47XG4gICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICdsYXN0U2Nyb2xsVG9wJywgbmljZS5nZXRTY3JvbGxUb3AoKSk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcuc2lkZWJhci1tZW51JykucmVtb3ZlQ2xhc3MoJ3Njcm9sbGluZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRkLmZpbmQoJy5oYXNTdWJtZW51JykuYWRkQ2xhc3MoJ2Ryb3Bkb3duJykucmVtb3ZlQ2xhc3MoJ29wZW4nKVxuICAgICAgICAgICAgLmZpbmQoJz4gdWwnKS5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZSBpbicpLnJlbW92ZUF0dHIoJ3N0eWxlJylcbiAgICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgICAgLmZpbmQoJz4gYScpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKVxuICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtdG9nZ2xlJyk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0gW2RhdGEtc2Nyb2xsYWJsZV0gPiB1bCA+IGxpLmRyb3Bkb3duID4gYScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCEgJCh0aGlzKS5wYXJlbnQoJy5kcm9wZG93bicpLmlzKCcub3BlbicpICYmICEgJCgnLnNpZGViYXItbWVudScpLmlzKCcuc2Nyb2xsaW5nJykpIHtcbiAgICAgICAgICAgICAgICB2YXIgcCA9ICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKSxcbiAgICAgICAgICAgICAgICAgICAgdCA9IHAuZmluZCgnPiAuZHJvcGRvd24tbWVudScpLmNsb25lKCkucmVtb3ZlQ2xhc3MoJ3N1Ym1lbnUtaGlkZScpLFxuICAgICAgICAgICAgICAgICAgICBtID0gJCh0aGlzKS5jbG9zZXN0KCcuc2lkZWJhci1tZW51JyksXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5zaWRlYmFyJyksXG4gICAgICAgICAgICAgICAgICAgIGMgPSBtLmZpbmQoJz4gI2Ryb3Bkb3duLXRlbXAnKTtcblxuICAgICAgICAgICAgICAgIG0uZmluZCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgYy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9ICQoJzxkaXYvPicpLmF0dHIoJ2lkJywgJ2Ryb3Bkb3duLXRlbXAnKS5hcHBlbmRUbyhtKTtcbiAgICAgICAgICAgICAgICAgICAgYy5odG1sKCc8dWw+PGxpPjwvbGk+PC91bD4nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLnNob3coKTtcbiAgICAgICAgICAgICAgICBjLmZpbmQoJy5kcm9wZG93bi1tZW51JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgYyA9IGMuZmluZCgnPiB1bCA+IGxpJykuY3NzKHtvdmVyZmxvdzogJ3Zpc2libGUnfSkuYWRkQ2xhc3MoJ2Ryb3Bkb3duIG9wZW4nKTtcblxuICAgICAgICAgICAgICAgIHAuYWRkQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB0LmFwcGVuZFRvKGMpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogcC5vZmZzZXQoKS50b3AgLSBjLm9mZnNldCgpLnRvcCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogJzEwMCUnXG4gICAgICAgICAgICAgICAgfSkuc2hvdygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNpZGViYXIuaXMoJy5yaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHQuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAnMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXSBbZGF0YS1zY3JvbGxhYmxlXSA+IHVsID4gbGkgPiBhJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmICghICQodGhpcykucGFyZW50KCkuaXMoJy5kcm9wZG93bicpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRoaXMpLmNsb3Nlc3QoJy5zaWRlYmFyJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcub3BlbicpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCcpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXSBbZGF0YS1zY3JvbGxhYmxlXSA+IHVsID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLmlzKCcuZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5maW5kKCcjZHJvcGRvd24tdGVtcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXSAuZHJvcGRvd24nKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnb3BlbicpLmNoaWxkcmVuKCd1bCcpLnJlbW92ZUNsYXNzKCdzdWJtZW51LWhpZGUnKS5hZGRDbGFzcygnc3VibWVudS1zaG93Jyk7XG4gICAgICAgIH0pLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJ3VsJykucmVtb3ZlQ2xhc3MoJy5zdWJtZW51LXNob3cnKS5hZGRDbGFzcygnc3VibWVudS1oaWRlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignbW91c2VvdXQnLCAnI2Ryb3Bkb3duLXRlbXAgLmRyb3Bkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnLnNpZGViYXItbWVudSAub3BlbicpLnJlbW92ZUNsYXNzKCcub3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsInJlcXVpcmUoJy4vX2JyZWFrcG9pbnRzJyk7XG5yZXF1aXJlKCcuL19zaWRlYmFyLW1lbnUnKTtcbnJlcXVpcmUoJy4vX2NvbGxhcHNpYmxlJyk7XG5yZXF1aXJlKCcuL19kcm9wZG93bicpO1xucmVxdWlyZSgnLi9fc2lkZWJhci10b2dnbGUnKTtcblxuKGZ1bmN0aW9uKCQpe1xuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MClcbiAgICB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyJykubGVuZ3RoKSByZXR1cm47XG5cbiAgICAgICAgJChcImh0bWxcIikucmVtb3ZlQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgIH1cblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJy5zaGFyZSB0ZXh0YXJlYScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5zaGFyZSBidXR0b25cIilbICQodGhpcykudmFsKCkgPT09ICcnID8gJ2hpZGUnIDogJ3Nob3cnIF0oKTtcbiAgICB9KTtcblxuICAgIGlmICghICQoXCIjc2Nyb2xsLXNweVwiKS5sZW5ndGgpIHJldHVybjtcblxuICAgIHZhciBvZmZzZXQgPSAkKFwiI3Njcm9sbC1zcHlcIikub2Zmc2V0KCkudG9wO1xuXG4gICAgJCgnYm9keScpLnNjcm9sbHNweSh7dGFyZ2V0OiAnI3Njcm9sbC1zcHknLCBvZmZzZXQ6IG9mZnNldH0pO1xuXG59KShqUXVlcnkpO1xuIiwicmVxdWlyZSgnLi9fdGltZWxpbmUnKTsiXX0=
