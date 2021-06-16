function person(name, age, ismerried){
    this.name = name ;
    this.age = age ;
    this.ismerried= ismerried;

    this.info = function(){
        if(this.ismerried === true){
            document.write(this.name + "님은 기혼입니다.")
        }
        else{
            document.write(this.name + "님은 미혼입니다.")
        }
    }
}

var person1 = new person("추신수", 39, true);
document.write("이름 : " + person1.name + '<br>')
document.write("나이 : " + person1.age + '<br>')
person1.info();

document.write('<hr>')

var person2 = new person("손흥민", 30, false);
document.write("이름 : " + person2.name + '<br>')
document.write("나이 : " + person2.age + '<br>')
person2.info();