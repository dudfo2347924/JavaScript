var array = new Array("딸기","바나나","사과","포도");//배열 생성
console.log("배열의 길이 : " + array.length + " 개" )
document.write('<br>A')

for(var i in array){
    document.write(array[i] + ' , ');
}

document.write('<br>B')
array[3] = "멜론"
array[4] = "올리브"

for(var i in array){
    document.write(array[i] + ' , ');
}

document.write('<br>C')

console.log(array);
document.write(array);