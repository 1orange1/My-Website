



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


    function play(){
        timer = setInterval(function(){
            $("#next").trigger("click");
        }, 1500);
    }
    function changeImg(){
        $lis.eq(nowIndex).addClass("selected").siblings().removeClass("selected");
        $("#imgs img").eq(nowIndex).addClass("selected").siblings().removeClass("selected");
    }
});


//右侧导航
$(".go-welcome").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#welcome").offset().top-72},1000);
});
$(".go-project").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#project").offset().top-72},1000);
});
$(".go-ability").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#ability").offset().top-72},1000);
});
$(".go-aboutme").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#about-me").offset().top-72},1000);
});
$(".go-contact").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#contact-me").offset().top-72},1000);
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


//左侧菜单小图标

var omyMenu = document.getElementById("my-menu");
var ocontainer = document.getElementById("container");
var omenuLogo = document.getElementById("menu-logo");
var omenu = document.getElementById("menu");

omenuLogo.onclick =function () {
    if(omyMenu.style.width == "" || omyMenu.style.width == "0px"){
        // omenu.style.display = "block";
        //console.log(omyMenu.style);
        omyMenu.style.width = "18.8%";
        ocontainer.style.width = "81%";
    }else{
        omyMenu.style.width = 0;
        ocontainer.style.width = "100%";
        // omenu.style.display = "none";
    }

};




