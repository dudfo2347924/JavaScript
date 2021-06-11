//숫자를 입력받아서 그 숫자까지 출력하는 프로그램
var i;
var sum = 0;
var num = prompt("숫자를 입력하세요.")

if(num !== null){
    for(i = 1 ; i <= num ; i++ ){
        document.write(i + "&nbsp"+ sum+ "<br>");
        sum += i ;
    }
    document.write("합계 : " + sum)
 }
else{
    alert("입력이 취소되었습니다.")
    document.write("입력이 취소되었습니다.")
}