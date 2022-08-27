let myLibrary = [];
let myLibraryShadow = [];
let books;

let divBookStore = document.querySelector('.bookstore');
const submit = document.querySelector('#submit-button');
submit.addEventListener('click', () => {document.querySelector('#add-book').style.display='none';
document.querySelector('.grid').classList.toggle('greyedout');});
submit.addEventListener('click', () => {const form = document.forms[0];
  const selectAuthor = form.querySelector('input[name="author"]');
  let selectedAuthor = selectAuthor.value;
  const selectTitle = form.querySelector('input[name="Title"]');
  let selectedTitle = selectTitle.value;
  const selectPages = form.querySelector('input[name="pagesnumber"]');
  let selectedPages = selectPages.value;
  const selectHasRead = form.querySelector('input[name="hasread"]');
  let selectedHasRead= selectHasRead.value;
  const book4 = new Book(selectedAuthor, selectedTitle, selectedPages, selectedHasRead);
  addBookToLibrary(book4);
  const books = document.querySelectorAll('.book');
  books.forEach(book => book.remove());

  displayBookStore();
});
const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {document.querySelector('#add-book').style.display='flex'; 
document.querySelector('.grid').classList.add('greyedout')});

function getBooks() { return books = document.querySelectorAll('.book')};

function idCreator() { if (myLibraryShadow == '') { return id = 0} else {return id = myLibraryShadow.length} };

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
  myLibraryShadow.push(book);
}

function removeBookFromLibrary(id) {
  for ( let book of myLibrary ) {
    if ( book.id == id )  {myLibrary.splice(myLibrary.indexOf(book), 1);
  document.querySelectorAll(`[data='${id}']`).forEach(book => book.remove());}
  }
}

function displayBookStore(){
  myLibrary.forEach((book) => {  
    const button = document.createElement('button');
    button.classList.add(`remove`); button.setAttribute('data',`${myLibraryShadow.indexOf(book)}`);
    const divBook = document.createElement('div')
    divBook.classList.add('book'); divBook.setAttribute('data',`${myLibraryShadow.indexOf(book)}`);
    divBook.setAttribute('id',`${myLibraryShadow.indexOf(book)}`);
    divBookStore.appendChild(divBook);
    const para = document.createElement('p');
    para.appendChild(document.createTextNode(book.info()));
    divBook.appendChild(para);
    divBook.appendChild(button);
    getBooks();
    books.forEach(b => b.addEventListener('click', () => removeBookFromLibrary(b.id)));
  })}

function loadInitialLibrary() {
  const book1 = new Book('De verenigde staten in de 20e eeuw', 'Maarten van Rossum', '509', true);
  addBookToLibrary(book1);
  
  const book2 = new Book('Pluk van de Petteflet', 'Annie M.G. Schmidt', '200', true);
  addBookToLibrary(book2);
  
  const book3 = new Book('De antwoorden op de Grote Vragen', 'Stephen Hawking', '264', false);
  addBookToLibrary(book3);
  displayBookStore();
}

loadInitialLibrary();
