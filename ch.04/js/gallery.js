var num = 1;

function prevGallery(){
    num -= 1;
    if(num < 0)
        num = 7 ;
    document.getElementById('gallery').src = "../images/img" + num + ".jpg";

}
function nextGallery(){
    num += 1;
    if(num > 7)
    num = 1 ;
    document.getElementById('gallery').src = "../images/img" + num + ".jpg";

}