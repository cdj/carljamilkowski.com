$(window).resize(titleBarCheck).scroll(titleBarCheck);

$(document).ready(function(){
    // http://kenwheeler.github.io/slick/
    $('#mentions .kudos').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000
    });
});

function titleBarCheck() {
    var $title = $("#title");
    if($title.hasClass("sticky") && $(this).scrollTop() < ($(this).height()-$title.height())/2) {
        $title.removeClass("sticky");
    } else if($(this).scrollTop() > $title.offset().top) {
        $title.addClass("sticky");
    }
}