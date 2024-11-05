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
  displayBook(book);
}

// Display book on screen
let Library = document.querySelector(".library");
Library.setAttribute("onclick", "event.stopPropagation()")
function displayBook(book){
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.textContent = book.info();
  card.dataset.cell = myLibrary.length;

  // Add delete book button to card
  let deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "deleteButton");
  deleteButton.textContent = "Delete Button";

  Library.appendChild(card);
  card.appendChild(deleteButton);
  
}

// Dialog to add new book
let dialogAddBook = document.querySelector("dialog");
function newBookDialog() {
  dialogAddBook.showModal();
}
function closeAdd() {
  
  dialogAddBook.close();
}

// Receive form data and create book object
let formNewBook = document.querySelector("form");
formNewBook.addEventListener("submit", (e) => {
  e.preventDefault();

  // Grab form entries and place in FormData object
  const bookData = new FormData(formNewBook);
  let title = bookData.get("title");
  let author = bookData.get("author");
  let pgNums = bookData.get("pgNums");
  let read = bookData.get("read");

  // Create new book from the FormData object and add to library
  let newBook = new Book (title, author, pgNums, read);
  addBookToLibrary(newBook);
  dialogAddBook.close();
})

// Capture delete button click
Library.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.parentElement)
  console.log(e.target.classList.contains("deleteButton"));
  if(e.target.classList.contains("deleteButton")){
    deleteBook(e.target.parentElement)
  }
})

// Functionality to delete a book
function deleteBook(card) {
  card.remove();
}
let book1 = new Book ("idk", "joe", 4, true);
let book2 = new Book ("maaan", "lee", 6, false);
let book3 = new Book ("pickles", "ronald", 16, false);

// temp code
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);