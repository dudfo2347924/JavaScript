var num = [1,2,3];
var chars = ['a','b','c'];

var list = num.concat(chars);
document.write(list + '<br>');

document.write(num.join()+ '<br>')
document.write(num.join('-')+ '<br>')
document.write(chars.join('-')+ '<br>')
document.write(list.join(':')+ '<br>')