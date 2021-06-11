function calc(){
    var x =2021 ;
    var y = prompt ("출생 년도를 입력하세요.");
    var age = x - y + 1 ;
    var msg= "당신의 나이는 " + age + " 세 입니다." ;
    
    document.getElementById("show").innerHTML = msg ;
}