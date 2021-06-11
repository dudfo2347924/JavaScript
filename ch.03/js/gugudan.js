var dan = parseInt ( prompt ("숫자를 입력하세요") );
var i;

if(isNaN(dan)){
    alert("입력이 취소되었습니다.")
    document.write("입력이 취소되었습니다.")
}
else{
    for( i = 1 ; i < 10; i++){
        document.write(dan+" X " + i + " = " + ( dan * i ) + "<br>")
}
}