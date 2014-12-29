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