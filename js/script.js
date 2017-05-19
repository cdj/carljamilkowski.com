var isTitleSticky = false;

$(window).resize(titleBarCheck).scroll(titleBarCheck);

$(document).ready(function(){
    // http://kenwheeler.github.io/slick/
    $('#mentions .kudos').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'//,
        // autoplay: true,
        // autoplaySpeed: 4000
    });

    $("a.local").click(function(e) {
        e.preventDefault();
        var newScrollTop = $($(this).attr("href")).offset().top - $("#title").height();

        $('html, body').animate({scrollTop: newScrollTop}, 200);
    });

    titleBarCheck();
});

function titleBarCheck() {
    var $title = $("#title");
    if($(this).scrollTop() < ($(this).height()*0.3-$title.height()/2)) {
        if(isTitleSticky) {
            isTitleSticky = false;
            $title.parent().removeClass("sticky");
        }
    } else if($(this).scrollTop() >= $title.offset().top) {
        if(!isTitleSticky) {
            isTitleSticky = true;
            $title.parent().addClass("sticky");
        }
    }
}