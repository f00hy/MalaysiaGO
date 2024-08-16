$(document).ready(function() {
    let lastScrollTop = 0;
    const $navbar = $('.navbar');
    const $videoSection = $('.video-background');
    const videoTop = $videoSection.offset().top; // Get the top position of the video section
    const videoBottom = videoTop + $videoSection.outerHeight();
    const offset = 600; // Offset value to trigger color change before reaching the bottom

    $(window).on('scroll', function() {
        const currentScroll = $(this).scrollTop();

        if (currentScroll >= videoBottom - offset) {
            // Show the navbar with a solid color after scrolling past the video section
            $navbar.removeClass('navbar-hidden');
            $navbar.addClass('scrolled-past-video');
        } else if (currentScroll < videoBottom && currentScroll > videoTop) {
            // When scrolling within the video section, hide the navbar if scrolling up, show if scrolling down
            if (currentScroll < lastScrollTop) {
                $navbar.addClass('navbar-hidden');
            } else {
                $navbar.removeClass('navbar-hidden');
            }
            $navbar.removeClass('scrolled-past-video'); // Make navbar transparent again
        } else {
            // Hide the navbar before reaching the video section
            $navbar.addClass('navbar-hidden');
            $navbar.removeClass('scrolled-past-video'); // Ensure it's transparent
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

    // Keep navbar visible when dropdown is clicked
    $('.dropdown').on('show.bs.dropdown', function () {
        $navbar.addClass('dropdown-active');
        $navbar.removeClass('navbar-hidden'); // Ensure navbar is shown
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        $navbar.removeClass('dropdown-active');
    });
});
