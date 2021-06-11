var i, j ;
for(i=2; i<10; i++ ){
    document.write(i + "단<br>")
    for(j=1; j<10; j++){
        document.write(i + " x " + j + " = " + (i*j) + '<br>')
    }
    document.write('<br>')
}