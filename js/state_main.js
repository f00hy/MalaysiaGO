$(document).ready(function() {
    let lastScrollTop = 0;
    const $navbar = $('.navbar');
    const $videoSection = $('.video-background');
    const videoBottom = $videoSection.offset().top + $videoSection.outerHeight();

    $(window).on('scroll', function() {
        const currentScroll = $(this).scrollTop();

        // Check if the scroll position is past the bottom of the video section
        if (currentScroll >= videoBottom) {
            $navbar.addClass('scrolled-past-video');
        } else {
            $navbar.removeClass('scrolled-past-video');
        }

        // Navbar hiding/showing logic
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            $navbar.addClass('navbar-hidden');
        } else {
            // Scrolling up
            $navbar.removeClass('navbar-hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });
});
