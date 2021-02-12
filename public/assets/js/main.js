
$(".feature-carousel").owlCarousel({
    items: 3,
    dots: true,
    autoplay: true,
    margin: 0,
    loop: true,
    smartSpeed: 1200,
    responsive: {
        320: {
            items: 1,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        }
    }
});
