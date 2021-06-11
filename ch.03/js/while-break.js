//숫자를 입력받아서 그 숫자까지 출력하는 프로그램
var n = 0 ;
var i = 1 ;
var num = prompt("숫자를 입력하세요.")

if(num !== null){
    while(true){
        n += i
        document.write(n + "<br>");
        i += 1 ;
        if(i > num)
        break;
    }
 }
else{
    alert("입력이 취소되었습니다.")
    document.write("입력이 취소되었습니다.")
}