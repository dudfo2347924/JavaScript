var x = parseInt(prompt("숫자를 입력하세요."));

if(isNaN(x)){
    alert("숫자를 입력하세요.")
    document.write("입력이 취소되었습니다.")
}
else{
var square = function(x){
    var num =  x * x;
document.getElementById("demo").innerHTML = num ;
}
}

// var result = square(4);

// document.write("4의 제곱 : " + result);