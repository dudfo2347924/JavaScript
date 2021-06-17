function Book(title, author ,price){
    this.title = title ;
    this.author = author ;
    this.price = price ;
}

var html = new Book("윂 표준의 정석", "고경화", 30000)
var python = new Book("점프 투 파이썬", "박응용", 20000)
var django = new Book("점프 투 장고", "박응용", 20000)


var bookList = [html , python , django] ;


document.write("<div class = 'box1'>")
document.write("<h2>책 제목으로 살펴보기</h2>")

for(var i = 0 ; i < bookList.length ; i++){

document.write('<p>' + bookList[i].title + '</p>')

}

document.write("</div>")
