$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        startPosition: 1,
    });

    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })
});