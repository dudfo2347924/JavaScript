var button = document.getElementById('btn');
button.addEventListener("click",displayDate)

function displayDate(){
    var date = new Date()
    var now = date.toLocaleString()
    document.getElementById("demo").innerHTML = now;
}

// document.getElementById("btn").addEventListener("click", function(){
    
//     var date = new Date();
//     var now = date.toLocaleString();
//     document.getElementById("demo").innerHTML = now ;
// })