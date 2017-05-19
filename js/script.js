var isTitleSticky = false;
var topSkillLevel;

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

    $("#skills .primary .skill").each(function() {
        var $priSkill = $("#skills .secondary .skill[data-skill='"+$(this).attr('data-skill')+"']");
        var $secSkills = $priSkill.children('.sub-skill');

        for(var j = 0; j < $secSkills.length; j++) {
            $secSkills.eq(j).css('background-color', rainbow(j/$secSkills.length*100));
        }
    });
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
    if($("#skills .primary").hasClass('raised')) return;
    if(($(this).scrollTop()+$(this).height()) >= $("#skills .secondary").offset().top) {
        raisePrimarySkillBars();
    }
}

function raisePrimarySkillBars() {
    var $priSkills = $("#skills .primary .skill");
    var maxHeight = $("#skills .primary").height();

    $("#skills .primary").addClass('raised');
    topSkillLevel = 0;

    // find the greatest skill level in the set
    for(var i = 0; i < $priSkills.length; i++) {
        var thisSkillLevel = parseInt($priSkills.eq(i).attr('data-level'), 10);
        if(thisSkillLevel > topSkillLevel) {
            topSkillLevel = thisSkillLevel;
        }
    }

    // animate bars to their appropriate relative height
    for(var i = 0; i < $priSkills.length; i++) {
        
        setTimeout(function() {
            var thisSkillLevel = parseInt($(this).attr('data-level'), 10);
            $(this).animate({height: (Math.floor(thisSkillLevel/topSkillLevel*$("#skills .primary").height()) + "px")});
        }.bind($priSkills.eq(i)[0]), (i * 100));
    }
}

function raiseSecondarySkillBars(primarySkill) {
    var $priSkill = $("#skills .secondary .skill[data-skill='"+primarySkill+"']");
    var $secSkills = $priSkills.children('.sub-skill');
    var topSecSkillLevel = 0;

    // make already showing secondary skills go away
    if($priSkill.is(":visible")) return;
    else $("#skills .secondary:visible").hide();

    // find the greatest skill level in the set
    for(var i = 0; i < $secSkills.length; i++) {
        var thisSkillLevel = parseInt($secSkills.eq(i).attr('data-level'), 10);
        if(thisSkillLevel > topSecSkillLevel) {
            topSecSkillLevel = thisSkillLevel;
        }
    }

    $priSkill.show();

    // animate bars to their appropriate relative height
    for(var i = 0; i < $secSkills.length; i++) {
        var thisSkillLevel = parseInt($secSkills.eq(i).attr('data-level'), 10);
        setTimeout(function() {
            $secSkills.eq(i).animate({height: Math.floor(thisSkillLevel/topSecSkillLevel*maxHeight) + "px"});
        }, (i * 75));
    }
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function rainbow(p) {
    var rgb = HSVtoRGB(p/100.0*0.85, 1.0, 1.0);
    return 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
}