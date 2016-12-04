/* Detects screen changes and updates corresponding text */
$(document).ready(function() {
    $.getJSON( demoInfoFile, function(data) {
        var newUrl;
        var descId;
        var newDesc;
        var i;
        var packaged = data;
        setInterval(function() {
            for(i = 0; i < packaged.demos.length; i++) {
                newUrl = (document.getElementById(packaged.demos[i].id.substring(1)).contentWindow.location.href).split("#/")[1];
                if(!packaged.demos[i].url || 0 === packaged.demos[i].url.length || packaged.demos[i].url !== newUrl) {
                    if(packaged.demos[i].url !== newUrl && newUrl && newUrl !== null && newUrl !== "" && typeof newUrl !== 'undefined') {
                        descId = packaged.demos[i].id + "ScreenDesc";
                        newDesc = packaged.demos[i].screens[newUrl];
                        if($(descId).html() !== newDesc) {
                            $(descId).fadeOut({duration:150, queue:true}).promise().done(function() {
                                $(descId).fadeIn({duration:300, queue:true, start:function() {
                                    $(descId).html(newDesc);
                                }});
                            });
                        }
                        packaged.demos[i].url = newUrl;
                    }
                }
            }
        }, 600);
    });
});