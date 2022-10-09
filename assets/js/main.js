jQuery(document).ready(function ($) {
    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function () {
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        });

        $('.level-bar-inner').each(function () {
            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
});