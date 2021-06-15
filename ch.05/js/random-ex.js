// var rand = Math.floor( Math.random()*6+1)

// function dice(){
//     var rand = Math.floor( Math.random()*6+1)
//     return rand;
// }

for(i =1 ; i <=11 ; i ++ ){

    var dice1,dice2,total

    dice1  =Math.floor( Math.random()*6+1);
    dice2  =Math.floor( Math.random()*6+1);

    total=dice1+dice2 ;

    document.write(dice1 + ' + ');
    document.write(dice2 + ' = ');
    document.write(total + ' ');
    
    if(total === 7) document.write("Seven Thrown!")
    if(total === 11)document.write("Eleven Thrown!")
    if(dice1 === dice2) document.write("Double Thrown!")
    document.write('<br>')

}


//주사위 2개던져서 합이 7이면 "Seven Thrown!"출력
//11이면 "Eleven Thrown!"이고, 주사위 눈이 같으면 "Double Thrown!"

