var num = [1,2,3];
num[3] = 4 ;
num.push(5,6);

for (var i = 0; i < num.length; i++) {
    if(i === 5){
        document.write(num[i]);
    }
    else
    document.write(num[i] + ', ');
}

document.write('<br>')

num.pop();

document.write(num);