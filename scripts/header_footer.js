document.addEventListener("DOMContentLoaded", function() {
    // Ensure the placeholders exist
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    
    if (headerPlaceholder && footerPlaceholder) {
        // Load header.html
        fetch('header.html')
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;

                // Reinitialize Bootstrap components after loading the header
                var scripts = document.createElement('script');
                scripts.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js";
                document.body.appendChild(scripts);

                // Initialize WOW.js after the header is loaded
                new WOW().init();

                // Initialize navbar behavior after the header is loaded
                initNavbarBehavior();

                // Call the function to handle login/logout button visibility
                handleLoginLogoutButtons(); // This function will be in misc.js

                // Reinitialize Bootstrap components after loading the header
                var scripts = document.createElement('script');
                scripts.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js";
                document.body.appendChild(scripts);
            })
            .catch(error => console.error('Error loading header:', error));

        // Load footer.html
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    } else {
        console.error('Header or footer placeholders not found');
    }
});

function handleLoginLogoutButtons() {
    // This function will be in misc.js and should be invoked here
}

// Function to initialize the navbar behavior
function initNavbarBehavior() {
    let lastScrollTop = 0;
    const $navbar = $('.navbar');
    const $heroSection = $('#hero');  // Reference to the hero section
    const heroBottom = $heroSection.offset().top + $heroSection.outerHeight();
    const offset = 600; // Offset value to trigger color change before reaching the bottom

    $(window).on('scroll', function() {
        const currentScroll = $(this).scrollTop();

        // Check if the scroll position is near the bottom of the hero section
        if (currentScroll >= heroBottom - offset) {
            $navbar.addClass('scrolled-past-video');
        } else {
            $navbar.removeClass('scrolled-past-video');
        }

        // Navbar hiding/showing logic
        if (!$navbar.hasClass('dropdown-active')) { // Only hide/show if dropdown is not active
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                $navbar.addClass('navbar-hidden');
            } else {
                // Scrolling up
                $navbar.removeClass('navbar-hidden');
            }
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    });

    // Keep navbar down when dropdown is clicked
    $('.dropdown').on('show.bs.dropdown', function () {
        $navbar.addClass('dropdown-active');
        $navbar.removeClass('navbar-hidden'); // Ensure navbar is shown
    });

    $('.dropdown').on('hide.bs.dropdown', function () {
        $navbar.removeClass('dropdown-active');
    });
}

$('.back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 100);  // 800ms scroll duration
    return false;
});