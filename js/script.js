
$('.casino-cards').owlCarousel({
    loop: true,
    margin: 19,
    nav: true,
    navText: ["<span class='fa-solid fa-chevron-left'></span>", "<span class='fa-solid fa-chevron-right'></span>"],
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})
$('.live-slider').owlCarousel({
    loop: true,
    margin: 19,
    nav: true,
    navText: ["<span class='fa-solid fa-chevron-left'></span>", "<span class='fa-solid fa-chevron-right'></span>"],
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        767: {
            items: 3
        },
        992: {
            items: 4
        }
    }
});


$(document).ready(function () {
    $(".accordion_icon").click(function () {
        /*  event.stopPropagation(); */ // Prevent click from affecting parent elements

        const accordionHeader = $(this).closest(".accordion-header"); // Get the closest header
        const content = accordionHeader.next(".accordion-content"); // Select corresponding content
        const accordionIcon = $(this); // Select clicked icon

        // Close all other open accordions
        $(".accordion-content").not(content).slideUp(300);
        $(".accordion-header .accordion_icon").not(accordionIcon).removeClass("faq-minus");

        // Toggle clicked accordion
        content.slideToggle(300);
        accordionIcon.toggleClass("faq-minus");
    });
});



/*  let toggleBtn = document.querySelector('.toggle_btn');
let topbar = document.querySelector('.head>ul li:nth-of-type(2) ul');

toggleBtn.addEventListener('click', function () {
    topbar.classList.add('header-show');


})
toggleBtn.addEventListener('click', function () {
    topbar.classList.remove('header-show');
})
 */
$(document).ready(function () {
    if ($(window).width() < 767) {
        $(".toggle_btn").click(function () {
            $(this).toggleClass("cross_icon"); // Change icon
            $(".head_column_2 ul").slideToggle("slow"); // Toggle menu
        });

        // Close menu when clicking any <li>
        $(".head_column_2 ul li").click(function () {
            $(".head_column_2 ul").slideUp("slow"); // Hide menu
            $(".toggle_btn").removeClass("cross_icon"); // Reset icon
        });
    }
});



/* function changeLanguage(lang){
let element 
}
 */

/* function changeLanguage(lang) {
    let element = document.body.innerText;
    if(element == "en")
}

 */

$(".english").click(function () {
    if ($(window).width() < 767) {
        $(this).find("i").toggleClass("rotate");
        $(this).next().slideToggle();
    }
});
