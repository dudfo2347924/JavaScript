var count = 0
for (var i = 1 ; i <= 100; i++) {
    if( i % 4 === 0 ){
    document.write(i + ", ")
    count +=  1 ;
    }
    
}
document.write("<p>4의 배수의 개수: " + count + "</p>");