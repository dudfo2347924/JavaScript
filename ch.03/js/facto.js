
var n = prompt("숫자를 입력하세요","1");
var result = "";
var facto = 1 ;

if(n !== null){
    for(var i = 1 ; i <= n ; i++ ){

        facto = facto * i ;
    }
    result = n + "!=" + facto ;
    document.write("합계 : " + result);
 }
else{
    alert("입력이 취소되었습니다.")
    document.write("입력이 취소되었습니다.")
}