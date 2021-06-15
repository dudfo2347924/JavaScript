var animal = [];
// console.log("배열의 길이 : " + animal.length + "개")

animal[0] = '소' ;
animal[1] = '개' ;
animal[2] = '닭' ;
animal[3] = '쥐' ;
console.log("배열의 길이 : " + animal.length + "개")


for(var i=0 ; i < animal.length ; i++){
    document.write(animal[i] + '<br>')
}