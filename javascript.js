let bookInfo;
let myLibrary = [];

// const divBook = document.querySelector('.book');
const divBookStore = document.querySelector('.bookstore');


function Book(title, author, numberOfPages, readBook) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.readBook = Boolean(readBook);
  if (readBook == true) {
    readBook = 'already read';
  } else {
    readBook = 'not read yet.';
  }

  this.info = function() {
    return `${title} by ${author}, ${numberOfPages} pages, ${readBook} `;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBookFromLibrary(book) {
  for ( bookItem of myLibrary ) {
    if ( bookItem == book ) {
      myLibrary.splice(bookItem, 1);
      console.log(myLibrary); 
    }
  }
}

function displayBookStore(){
  myLibrary.forEach((book) => {  
    const button = document.createElement('button');
    button.classList.add(`remove-${myLibrary.indexOf(book)}`);
    const divBook = document.createElement('div')
    divBook.classList.add('book');
    divBookStore.appendChild(divBook);
    const para = document.createElement('p');
    para.appendChild(document.createTextNode(book.info()));
    divBook.appendChild(para);
    divBook.appendChild(button);
  })}

const book1 = new Book('De verenigde staten in de 20e eeuw', 'Maarten van Rossum', '509', true);
addBookToLibrary(book1);

const book2 = new Book('Pluk van de Petteflet', 'Annie M.G. Schmidt', '200', true);
addBookToLibrary(book2);

const book3 = new Book('De antwoorden op de Grote Vragen', 'Stephen Hawking', '264', false);
addBookToLibrary(book3);
console.log(myLibrary);
// removeBookFromLibrary(book1);
console.log(myLibrary);
displayBookStore();

