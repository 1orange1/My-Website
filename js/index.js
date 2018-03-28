



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


var aProjectImg = $(".project-img");

$(".span1").on("click",function () {
    var nowIndex = 0;
    for(i=0;i<=aProjectImg.length;i++){

    }
});
$("#jnImageroll div a").on("mouseover", function(){
    $(this).addClass("chos").siblings().removeClass("chos");
    $("#JS_imgWrap img").eq($(this).index()).stop().fadeIn().siblings().stop().fadeOut();
});


//轮播图
$(".project-right span").on("click", function(){
    $(this).addClass("chos").siblings().removeClass("chos");
    $("#project-list").stop().animate({
        left: -$(".project-img").innerWidth() * 1 * $(this).index()
    }, 1000);
});












//右侧导航
$(".go-welcome").on("click",function () {
    $(".go-welcome").addClass("menu-selected").siblings().removeClass("menu-selected");
    $("html,body").stop().animate({scrollTop:$("#welcome").offset().top},1000);
});
$(".go-aboutme").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#about-me").offset().top},1000);
});
$(".go-ability").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#ability").offset().top},1000);
});
$(".go-project").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#project").offset().top},1000);
});
$(".go-contact").on("click",function () {
    $("html,body").stop().animate({scrollTop:$("#contact-me").offset().top},1000);
});

$(".menu1").on("click",function () {
    $(".menu1").addClass("menu-left-selected").siblings().removeClass("menu-left-selected");
    $("html,body").stop().animate({scrollTop:$("#welcome").offset().top},1000);
});
$(".menu2").on("click",function () {
    $(".menu2").addClass("menu-left-selected").siblings().removeClass("menu-left-selected");
    $("html,body").stop().animate({scrollTop:$("#about-me").offset().top},1000);
});
$(".menu3").on("click",function () {
    $(".menu3").addClass("menu-left-selected").siblings().removeClass("menu-left-selected");
    $("html,body").stop().animate({scrollTop:$("#ability").offset().top},1000);
});
$(".menu4").on("click",function () {
    $(".menu4").addClass("menu-left-selected").siblings().removeClass("menu-left-selected");
    $("html,body").stop().animate({scrollTop:$("#project").offset().top},1000);
});
// $(".menu5").on("click",function () {
//     $(".menu5").addClass("menu-left-selected").siblings().removeClass("menu-left-selected");
//     $("html,body").stop().animate({scrollTop:$("#contact-me").offset().top},1000);
// });









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

var oMyMenu = document.getElementById("my-menu");
var oContainer = document.getElementById("container");
var oMenuLogo = document.getElementById("menu-logo");
var omenu = document.getElementById("menu");

oMenuLogo.onclick =function () {
    if(oMyMenu.style.width == "" || oMyMenu.style.width == "0px"){
        omenu.style.overflow = "visible";
        oMyMenu.style.width = "18.8%";
        oContainer.style.width = "81%";
    }else{
        oMyMenu.style.width = 0;
        oContainer.style.width = "100%";
        omenu.style.overflow = "hidden";
    }

};




