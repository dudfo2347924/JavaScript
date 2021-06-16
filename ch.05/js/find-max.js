var num = [15,25,36,74,85,17];
var max = num[0];

for(i = 1 ; i < num.length ; i++){
    document.write(num[i] + ', ')
    if( max < num[i])
        max = num[i] ;
}

document.write('<br>최댓값 : ' + max)


var min = num[0];

for(i = 1 ; i < num.length ; i++){
    if( min > num[i])
        min = num[i] ;
}

document.write('<br><br>최솟값 : ' + min)