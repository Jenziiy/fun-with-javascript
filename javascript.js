function Book(title, author, numberOfPages, readBook) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readBook = readBook;
  if (readBook == true) {
    readBook = 'already read';
  } else {
    readBook = 'not read yet.';
  }

  this.info = function() {
    return `${title} by ${author}, ${numberOfPages} pages, ${readBook}`;
  }
}

const deVS = new Book('De verenigde staten in de 20e eeuw', 'Maarten van Rossum', '509', true);
console.log(deVS.info());
