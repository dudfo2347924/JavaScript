var num =prompt('숫자를 입력하세요')


if(num !== null){
    if(num == 0){
        document.write("공의 숫자");
    }
    else if(num % 2===0 && num !== 0 ){
        document.write("짝수");
    }
    else if(num % 2===1){
        document.write("홀수");
    }
    else{
        document.write("숫자가 아님니다.")
    }
}
else{
    document.write("입력이 취소되었습니다.");
}