let bookInfo;
let myLibrary = [];
let buttons;
// const divBook = document.querySelector('.book');
const divBookStore = document.querySelector('.bookstore');
addEventListener('DOMContentLoaded', removeBookFromLibrary);
function idCreator() { if (myLibrary == '') { return id = 0} else {return id = myLibrary.length} };


function Book(title, author, numberOfPages, readBook) {
  this.id = idCreator();
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

function removeBookFromLibrary() {
  const buttons =  document.querySelectorAll('.remove'); 
  buttons.forEach(button => {button.addEventListener('click', (e) => {
    let removeBook = button.getAttribute('data');
    for ( bookItem of myLibrary ) {
      if ( bookItem.id == button.getAttribute('data') ) {
        myLibrary.splice(bookItem.id, 1);
        let removeBookItem = document.getElementById(removeBook);
        removeBookItem.remove();
        console.log(myLibrary);

      }
    }

  })})
  
}

function displayBookStore(){
  myLibrary.forEach((book) => {  
    const button = document.createElement('button');
    button.classList.add(`remove`); button.setAttribute('data',`${myLibrary.indexOf(book)}`);
    const divBook = document.createElement('div')
    divBook.classList.add('book');
    divBook.setAttribute('id',`${myLibrary.indexOf(book)}`);
    divBookStore.appendChild(divBook);
    const para = document.createElement('p');
    para.appendChild(document.createTextNode(book.info()));
    divBook.appendChild(para);
    divBook.appendChild(button);
    return buttons;
  })}

const book1 = new Book('De verenigde staten in de 20e eeuw', 'Maarten van Rossum', '509', true);
addBookToLibrary(book1);

const book2 = new Book('Pluk van de Petteflet', 'Annie M.G. Schmidt', '200', true);
addBookToLibrary(book2);

const book3 = new Book('De antwoorden op de Grote Vragen', 'Stephen Hawking', '264', false);
addBookToLibrary(book3);
console.log(myLibrary);
displayBookStore();


