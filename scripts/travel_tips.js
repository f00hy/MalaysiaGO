(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        $(window).on('load', function() {  // Wait until the page is fully loaded
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        });
    };
    spinner();


    // Show or hide the button based on scroll position
    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > 100) {  // Show after scrolling 100px
    //         $('.back-to-top').fadeIn();
    //     } else {
    //         $('.back-to-top').fadeOut();
    //     }
    // });


    // Scroll to top when the button is clicked
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 100);  // 800ms scroll duration
        return false;
    });



    $(document).ready(function(){
        $('#apps-carousel').slick({
            slidesToShow: 3, // Shows 3 items per slide
            slidesToScroll: 1, // Scrolls 1 item at a time
            autoplay: false,
            arrows: true, // Enable arrows
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="bi bi-arrow-left"></i></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="bi bi-arrow-right"></i></button>',
            dots: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });



    // Radio button
    document.addEventListener("DOMContentLoaded", function () {
        const mainArticleCard = document.querySelector(".main-article-card");
        const sidebarArticles = document.querySelector(".sidebar-articles");
    
        const content = {
            "tips & advice": {
                main: {
                    title: "3 weeks in Malaysia",
                    date: "Jul 31, 2024 - 5 min read",
                    description: "With so many incredible things to do in Malaysia, it can be hard to know where to begin. Explore this blog to check other people's experience.",
                    imgSrc: "/images/travelTips/Things_to_do_in_Malaysia.png",
                    link: "https://thetravelblog.at/3-weeks-in-malaysia/", 
                    category: "tips & advice"
                },
                sidebar: [
                    {
                        title: "Langkawi: all you need to know about this beautiful island in Malaysia!",
                        date: "Aug 9, 2024 - 12 min read",
                        imgSrc: "/images/travelTips/langkawi.jpg",
                        link: "https://www.charlotteplansatrip.com/en/malaysia/guide-langkawi/",
                        category: "tips & advice"
                    },
                    {
                        title: "A short break in Kuala Lumpur",
                        date: "Feb 18, 2024 - 5 min read",
                        imgSrc: "/images/travelTips/kuala lumpur.jpg",
                        link: "https://lovetravellingblog.com/2024/02/18/a-short-break-in-kuala-lumpur/comment-page-1/",
                        category: "tips & advice"
                    },
                    {
                        title: "An Itinerary: 3D2N in Penang with my parents",
                        date: "June 4, 2024 - 15 min read",
                        imgSrc: "/images/travelTips/penang.jpg",
                        link: "https://www.roowanders.com/penang/",
                        category: "tips & advice"
                    },
                    {
                        title: "Malacca Travel Blog. First Impressions.",
                        date: "Dec 07, 2023 - 7 min read",
                        imgSrc: "/images/travelTips/melaka.jpg",
                        link: "https://worldtravelfamily.com/malacca-family-travel-blog-malacca-malaysia/",
                        category: "tips & advice"
                    }
                ]
            },
            "art & culture": {
                main: {
                    title: "Penang Street Art - A Self-Guided Tour",
                    date: "Jul 21, 2024 - 15 min read",
                    description: "Delve into Malaysia's vibrant art and culture where traditional crafts, contemporary art and diverse festivals celebrate the country's rich heritage.",
                    imgSrc: "/images/travelTips/penang art.jpg",
                    link: "https://midlifeglobetrotter.com/penang-street-art/",
                    category: "art & culture"
                },
                sidebar: [
                    {
                        title: "My favourite spots in Kuala Lumpur aka how I create culture",
                        date: "May 2, 2021 - 10 min read",
                        imgSrc: "/images/travelTips/kuala lumpur art.jpg",
                        link: "https://travelmishmash.com/index.php/2021/05/02/my-favourite-spots-in-kuala-lumpur-aka-how-i-create-culture/",
                        category: "art & culture"
                    },
                    {
                        title: "Street Art in Malacca (Melaka)",
                        date: "Jun 2, 2024 - 7 min read",
                        imgSrc: "/images/travelTips/melaka art.jpg",
                        link: "https://www.theculturemap.com/street-art-malacca-malaysia/",
                        category: "art & culture"
                    },
                    {
                        title: "Johor Story 2: A Day Trip to Pekan Muar (麻坡) for Food, Coffee & Street Arts",
                        date: "May 30, 2022 - 15 min read",
                        imgSrc: "/images/travelTips/johor art.jpg",
                        link: "https://www.ipacktravel.com/post/johor-story-a-day-trip-to-pekan-muar-from-singapore",
                        category: "art & culture"
                    },
                    {
                        title: "Sustainable Heritage Tourism with The Adiguru Heritage Trail in Kelantan, Malaysia",
                        date: "Oct 25, 2023 - 5 min read",
                        imgSrc: "/images/travelTips/kelantan art.jpg",
                        link: "https://siennylovesdrawing.wordpress.com/2023/10/25/sustainable-heritage-tourism-with-the-adiguru-heritage-trail-in-kelantan-malaysia/",
                        category: "art & culture"
                    },
                ]
            },
            "food & drink": {
                main: {                                                                                                                                                                                                 
                    title: "Malaysia's top 40 foods",
                    date: "Jul 20, 2023 - 13 min read",
                    description: "Discover the recommended foods in Malaysia from iconic street dishes to traditional delicacies as Malaysia is providing best food in the world!",
                    imgSrc: "/images/travelTips/food.jpg",
                    link: "https://edition.cnn.com/travel/article/malaysian-food/index.html",
                    category: "food & drink"
                },
                sidebar: [
                    {
                        title: "WHY YOU SHOULD GET OFF THE BEATEN FOODIES' TRAIL IN KUALA LUMPUR",
                        date: "Jun 8, 2024 - 10 min read",
                        imgSrc: "/images/travelTips/kuala lumpur food.jpg",
                        link: "https://www.oopsibookedagain.com/blog/foodies-guide-kuala-lumpur",
                        category: "food & drink"
                    },
                    {
                        title: "Field Notes: Eating in George Town, Penang",
                        date: "Jun 22, 2024 - 15 min read",
                        imgSrc: "/images/travelTips/penang food.jpg",
                        link: "https://two-together.com/penang-food/",
                        category: "food & drink"
                    },
                    {
                        title: "Ipoh Food Trail 2022",
                        date: "Jul 28, 2022 - 15 min read",
                        imgSrc: "/images/travelTips/ipoh food.jpg",
                        link: "https://ivanteh-runningman.blogspot.com/2022/07/ipoh-food-trail-2022.html",
                        category: "food & drink"
                    },
                    {
                        title: "Malacca Eats: 12 Must-Try Local Food in Malacca Old Town",
                        date: "Nov 1, 2022 - 15 min read",
                        imgSrc: "/images/travelTips/melaka food.jpg",
                        link: "https://www.ipacktravel.com/post/12-must-try-food-in-malacca-old-town",
                        category: "food & drink"
                    },
                ]
            }
        };
    
        const radios = document.querySelectorAll('input[name="filter"]');

        // Retrieve the saved value from session storage
        const savedValue = sessionStorage.getItem('selectedFilter')

        if (savedValue) {
            // If there's a saved value, check the corresponding radio button
            document.querySelector(`input[name="filter"][value="${savedValue}"]`).checked = true;
            updateContent(savedValue);
        } else {
            // If no value is saved, use the default checked radio button
            const checkedRadio = document.querySelector('input[name="filter"]:checked');
            if (checkedRadio) {
                updateContent(checkedRadio.value);
            }
        }

        radios.forEach(radio => {
            radio.addEventListener("change", function () {
                if (this.checked) {
                    const selectedValue = this.value;
    
                    // Save the selected value in local storage
                    sessionStorage.setItem('selectedFilter', selectedValue);
    
                    // Update the content based on the selected value
                    updateContent(selectedValue);
                }
            });
        });

        function updateContent(selectedValue) {
            const selectedContent = content[selectedValue];
        
            // Update Main Article
            const mainArticle = mainArticleCard.querySelector(".article-title");
            mainArticleCard.classList.remove("animate__fadeInUp"); // Reset animation
            mainArticleCard.offsetWidth; // Trigger reflow to restart the animation
            mainArticleCard.classList.add("animate__fadeInUp"); // Add animation class
        
            mainArticleCard.querySelector(".article-title").innerText = selectedContent.main.title;
            mainArticleCard.querySelector(".article-date").innerText = selectedContent.main.date;
            mainArticleCard.querySelector(".article-description").innerText = selectedContent.main.description;
            mainArticleCard.querySelector("img").src = selectedContent.main.imgSrc;
            mainArticleCard.querySelector(".article-category").innerText = selectedContent.main.category;
            mainArticleCard.parentElement.href = selectedContent.main.link;
            
            // Update Sidebar Articles
            sidebarArticles.innerHTML = "";
            selectedContent.sidebar.forEach((article, index) => {
                const sidebarArticle = `
                    <a href="${article.link}" target="_blank">
                        <div class="sidebar-article animate__animated animate__fadeInRight" data-wow-delay="${0.2 + (index * 0.1)}s">
                            <img src="${article.imgSrc}" class="img-fluid" alt="Sidebar Article Image">
                            <div class="sidebar-content">
                                <p class="sidebar-category">${article.category}</p> 
                                <h5 class="sidebar-title">${article.title}</h5>
                                <p class="sidebar-date">${article.date}</p>
                            </div>
                        </div>
                    </a>
                `;
                sidebarArticles.insertAdjacentHTML("beforeend", sidebarArticle);
            });
            
            // Trigger WOW.js re-init to apply the animations
            new WOW().sync();
        }
    });



    // tipCards animation
    document.addEventListener("DOMContentLoaded", function() {
        const tipCards = document.querySelectorAll('.tipCard');
        
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.style.transitionDelay = `${index * 0.2}s`; // Stagger the animation
                    observer.unobserve(entry.target); // Stop observing once the animation is triggered
                }
            });
        }, observerOptions);
        
        tipCards.forEach(card => {
            observer.observe(card);
        });
    });
    


    $(document).ready(function () {
        new WOW().init();
    });

})(jQuery);
