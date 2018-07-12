window.onload = function () {
    var show_height = $(document).height();
    var height = ($(window).height()-530)/2;
    var width = (($(window).width())-830)/2;
    var src_text = null;
    function show_hid() {
        $("#show_height").css({"width": "100%",
                        "height": show_height+"px",
                        "opacity": 0.8,
                        "position": "absolute",
                        "z-index": 5,
                        "left": 0,
                        "top": 0,
                        "background-color": "#000"});
    }

    function show_img() {
        $("#show_img").css({"width": "830px",
                        "height": "530px",
                         "position": "fixed",
                         "opacity": 0,
                         "z-index": 10,
                         "top": +height+"px",
                         "left": +width+"px",
                         "background": "#fff"});

        $("#show_img").animate({opacity:1},500);

        $("#img").css({"width": "800px",
                        "height": "500px",
                        "margin":"15px 15px"});
        $("#img").attr("src",src_text);
    }

    function style_remove() {

        $("#show_height").removeAttr("style");
        $("#show_img").removeAttr("style");
        $("#img").removeAttr("style");
        $("#img").removeAttr("src");
    }

    $("content img").click(function () {
        src_text = $(this).attr("src");
        show_hid();
        show_img();
    });

    $("#show_height").click(function () {
        style_remove();
    });

    $(document).keydown(function(en){
        if(en.keyCode == 27){
            style_remove();
        }
    });

    $("content img").hover(function () {
        $(this).animate({width:"315px"},100);
    },function () {
        $(this).animate({width:"320px"},100);
    });
}