var num = new Array();
document.write("배열의 길이 : " + num.length + " 개 <br>")

num[0] = 95 ;
num[1] = 70 ;
num[2] = 88 ;
num[3] = 56 ;
document.write(num + '<br>');
document.write("배열의 길이 : " + num.length + " 개 <br>")


for(var i in num ){
    document.write(num[i] + ' ');
}

document.write('<br>')

document.write(num[0] + num[1])

document.write('<br>')

var sum= 0;
for(var i = 0 ; i < num.length ; i++){
    sum += num [i];
}
document.write(sum)