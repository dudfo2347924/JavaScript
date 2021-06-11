var session = prompt("세션을 입력하세요. 1-마케팅, 2-개발, 3-디자인");

if(session !== null){
    switch(session){
        case "1" :
            document.write("<P>마케팅 세션은 <span>201호</span>에서 진행됨니다.</p>");
            break;
        case "2" :
            document.write("<P>개발 세션은 <span>202호</span>에서 진행됨니다.</p>");
            break;
        case "3" :
            document.write("<P>디자인 세션은 <span>203호</span>에서 진행됨니다.</p>");
            break;
        default :
            document.write("<P>잘못 입력하셧습니다.</p>");
            break;
    }
}
else{
    alert("입력이 취소되었습니다.")
    document.write("입력이 취소되었습니다.")
}