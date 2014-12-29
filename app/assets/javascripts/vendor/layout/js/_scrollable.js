(function ($) {

    var skin = require('./_skin')();

    $('[data-scrollable], .st-content').niceScroll({
        cursorborder: 0,
        cursorcolor: config.skins[ config.theme ][ skin ][ 'primary-color' ],
        horizrailenabled: false
    });

    $('[data-scrollable]').getNiceScroll().resize();

}(jQuery));