$(window).resize(titleBarCheck).scroll(titleBarCheck);


function titleBarCheck() {
    var $title = $("#title");
    if($title.hasClass("sticky") && $(this).scrollTop() < ($(this).height()-$title.height())/2) {
        $title.removeClass("sticky");
    } else if($(this).scrollTop() > $title.offset().top) {
        $title.addClass("sticky");
    }
}