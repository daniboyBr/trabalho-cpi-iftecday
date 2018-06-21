document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('.slider').slider();

    $("#contraste").on("click", function (e) {
        $("body").toggleClass('contrast');
        $("nav div").toggleClass('green darken-2')
        $("footer").toggleClass('green darken-2');

    });
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});


