// deixando barra de navegação fixa no topo

var offset = $('.navbar').offset().top;
var $meuMenu = $('.navbar');
var $arruma = $('.single-item');
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixar');
        $arruma.addClass('arruma');
    } else {
        $meuMenu.removeClass('fixar');
        $meuMenu.addClass('fixar-normal')
        $arruma.removeClass('arruma');
    }
});


// setando carrossel principal

$('.single-item').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
});

// setando carrossel com 1 item destacado

$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});