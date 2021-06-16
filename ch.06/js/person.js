var person = {
    name : '추신수' , 
    age : 39 ,

    play : function(){
        alert("홈런을 친다!!")
    }
}

document.write("이름 : " + person.name + "<br>");
document.write("나이 : " + person.age + "<br>");
person.play();