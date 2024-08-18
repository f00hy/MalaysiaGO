// Spinner
(function ($) {
    var spinner = function () {
        $(window).on('load', function() {  // Wait until the page is fully loaded
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        });
    };
    spinner();
})(jQuery);