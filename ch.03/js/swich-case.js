var rank = parseInt(prompt("순위를 입력하세요."))

if(isNaN(rank)){
    alert("입력이 취소되었습니다.")
    document.write("입력이 취소되었습니다.")
}
else{
    switch(rank){
        case 1 :
            document.write("금메달입니다.");
            break;
        case 2 :
            document.write("은메달입니다.");
            break;
        case 3 :
            document.write("동메달입니다.");
            break;
        default :
            document.write("메달이 없습니다.");
            break;
    }
}