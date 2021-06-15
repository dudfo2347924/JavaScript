// var i;
var n= prompt("수를 입력하세요","");
var sum = 0;

if(n == null){
    document.write("숫자를 입력하세요.")
}

else{

for(i = 1 ; i <=n ; i ++){
    if (i % 2 !== 0)
        continue;

        sum += i ;
    document.write(i + "------" + sum + "<br>")
}

document.write("<hr>")
var sum = 0;

for(i = 1 ; i <=n ; i ++){
    if (i % 2 === 1)
        sum += i ;

    document.write(i + "------" + sum + "<br>")
}
}