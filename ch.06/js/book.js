var 책 = {
    제목 : "점프 투 파이썬" ,
    저자 : "박응용" ,
    페이지: 500 ,
    가격 : 20000 ,

    info : function(){
        alert(this.제목 + " 책의 분량은 " + this.페이지 + " 쪽 입니다.")
    }
};

책.info();
document.write("이 책의 저자는 " + 책.저자 + " 입니다.")