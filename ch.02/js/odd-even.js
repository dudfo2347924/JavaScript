var num =prompt('숫자를 입력하세요')

if(num !== null){
var result = (num % 2 === 0) ? "짝수" :"홀수"

document.write(result);
}
else{
    document.write("입력이 취소되었습니다.")
}