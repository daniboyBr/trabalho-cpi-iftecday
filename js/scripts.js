document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('.slider').slider();
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});