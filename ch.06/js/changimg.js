var pic = document.querySelector("#image")
pic.addEventListener("mouseover", function(){
    pic.src = "images/easys-2.jpg";
})
pic.addEventListener("mouseout", function(){
    pic.src = "images/easys-1.jpg";
})