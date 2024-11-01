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

function addBookToLibrary() {
  // do stuff here
}