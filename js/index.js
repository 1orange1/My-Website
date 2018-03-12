//welcome轮播图






























$(function(){
    $("#right-nav a").on("click", function(){
        var id = $(this).attr("href");
        var top = $(id).offset().top;
        $(document.body).animate({
            scrollTop: top
        });

        history.pushState(top, "");
        return false;
    });
    window.onpopstate = function(e){
        $(document.body).animate({
            scrollTop: e.state
        });
    };
});