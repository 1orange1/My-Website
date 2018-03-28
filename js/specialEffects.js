// 钟表
 (function(){
            var oClock = document.getElementById("clock");
            var oHour = document.getElementById("hour");
            var oMinute = document.getElementById("minute");
            var oSecond = document.getElementById("second");
            for(var i=0; i<60; i++){
                /*var oLi = document.createElement("li");
                oDial.appendChild(oLi);*/
oClock.innerHTML += "<li style='transform: rotate("+ i * 6 +"deg)'></li>";
}
run();
setInterval(run, 1000);

function run(){
    var now = new Date();
    var nowSecond = now.getSeconds();
    var nowMinute = now.getMinutes() + nowSecond / 60;
    var nowHour = now.getHours() + nowMinute / 60;

    oSecond.style.transform = "rotate(" + nowSecond * 6 + "deg)";
    oMinute.style.transform = "rotate("+ nowMinute * 6 +"deg)";
    oHour.style.transform = "rotate("+ nowHour * 30 +"deg)";
}
})();

