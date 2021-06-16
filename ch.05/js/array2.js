var fruits = ['사과' , '딸기' , '바나나']

document.write("fruits[0] = " + fruits[0] + '<br>')

for(var i = 0 ; i < fruits.length ; i++ ){
    document.write(fruits[i] + ' ')
}

document.write('<br>')

for(var i in fruits){
    document.write(fruits[i] + ' ')
}
var avg = sum / fruits.length ;
document.write("평균 : " + avg);