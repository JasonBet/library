const myLibrary = [];

function Book(title, author, pgNums, read) {
    this.title = title;
    this.author = author;
    this.pgNums = pgNums;
    this.read = read;
    this.info = function() {
        return (`${this.title} by ${this.author}, ${this.pgNums} pages, not read yet`);
    }
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

function displayBooks(){
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  
  document.library.appendChild(card);
}

let book1 = new Book ("idk", "joe", 4, true);
let book2 = new Book ("maaan", "lee", 6, false);