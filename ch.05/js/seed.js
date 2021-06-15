var seed = parseInt(prompt("전체 응모자 수 : ",""));

var picked = Math.floor(Math.random()*seed+1)

document.write("<p>전체 응모자 수 : " + seed + " 명 </p>")
document.write("<p>당첨자 : " + picked + " 번 </p>")
