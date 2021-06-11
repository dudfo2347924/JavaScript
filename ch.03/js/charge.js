var age = prompt("나이를 입력하세요.") ;
var charge;

if(age !== null){
if(8>age){
    document.write("미취학 아동입니다.");
    charge=1000;
}

 else if(8<= age && age < 14 ){
    document.write("초등학생 입니다.");
    charge=2000;
} 

else if(14 <= age && age  <17 ){
    document.write("중학생 입니다.");
    charge=2500;
} 

else{
    document.write("일반인 입니다.");
    charge = 3000;
}

document.write ("<br>입장료는 <span class= 'accent'>"+ charge + " 원</span>입니다")
}

else{
document.write("입력이 취소되었습니다.")
}