var today = new Date();
var firstday = new Date("2021-05-27")

var passedTime = today.getTime() - firstday.getTime();
passedTime = Math.round(passedTime /(24*60*60*1000 ));
document.getElementById("result").innerHTML = passedTime;