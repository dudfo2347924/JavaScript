var customer = prompt("입장객은 몇명인가요?");
var colnum = prompt("한 줄에 몇명씩 앉나요?");
var rowNum;

if(customer % colnum ===0 ){
    rowNum = parseInt (customer / colnum ) ;

}else{
    rowNum = parseInt (customer / colnum ) +1 ;
}
    document.write(rowNum + "개의 줄이 필요합니다.<br><br>" )

document.write("<table>")

for(var i=0 ; i < rowNum ; i++ ){  
    document.write("<tr>")
    for(var j=1 ; j <= colnum ; j++ ){

        var seatNum = colnum * i + j ;
        if(seatNum > customer)
            break;
        document.write("<td>좌석" + seatNum + "</td>");
    }
    document.write('</tr>')
}
document.write("</table>")