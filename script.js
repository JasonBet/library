const myLibrary = [];

function Book(title, author, pgNums, read) {
    this.title = title;
    this.author = author;
    this.pgNums = pgNums;
    this.read = read;
    this.info = function() {
        return (`${this.title} by ${this.author}, 
          ${this.pgNums} pages, ${read ? "read book" : "not read yet"}`);
    }
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
}

let Library = document.querySelector(".library");
function displayBooks(){
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  for (const book of myLibrary){
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.textContent = book.info();
    Library.appendChild(card);
  }
  
}

// Dialog to add new book
let dialogAddBook = document.querySelector("dialog");
function newBookDialog() {
  document.getElementById('addBookDialog').showModal();
}

let book1 = new Book ("idk", "joe", 4, true);
let book2 = new Book ("maaan", "lee", 6, false);

// temp code
addBookToLibrary(book1);
addBookToLibrary(book2);
displayBooks();
