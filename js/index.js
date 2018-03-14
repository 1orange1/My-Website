



//welcome轮播图

$(function () {
    var nowIndex = 0;//当前显示的下标
    var timer;
    var $lis = $("#nav li");
    $lis.on("mouseover", function(){
        nowIndex = $(this).index();
        changeImg();
    });
    $("#prev").on("click", function(){
        nowIndex--;
        if(nowIndex == -1){
            nowIndex = $lis.length - 1;
        }
        changeImg();
    });
    $("#next").on("click", function(){
        nowIndex++;
        if(nowIndex == $lis.length){
            nowIndex = 0;
        }
        changeImg();
    });
    play();

    $("#welcome").hover(function(){
        clearInterval(timer);
    }, function(){
        play();
    });

    function play(){
        timer = setInterval(function(){
            $("#next").trigger("click");
        }, 1000);
    }
    function changeImg(){
        $lis.eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        $("#imgs img").eq(nowIndex).addClass("selected").siblings().removeClass("selected");
    }
});




//右侧导航
$(".go-welcome").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#welcome").offset().top-74},1000);
});
$(".go-project").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#project").offset().top-74},1000);
});
$(".go-ability").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#ability").offset().top-74},1000);
});



















//回到顶部
var oGoTop = $("#goTop");
oGoTop.on('click',function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var timer = setInterval(function () {
        window.scrollTo(0, scrollTop-=100);
        if(scrollTop <= 0){
            clearInterval(timer);
        }
    }, 30);
});





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