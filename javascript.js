let myLibrary = [];
let myLibraryShadow = [];
let books;
const divBookStore = document.querySelector('.bookstore');
const addBookButton = document.querySelector('.add-book');
const submit = document.querySelector('#submit-button');

function Book(title, author, numberOfPages, readBook) {
  this.id = generateBookID();
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

function getBooks() { 
  return books = document.querySelectorAll('.remove')
}
function generateBookID() {
   if (myLibraryShadow == '') { return id = 0} else {return id = myLibraryShadow.length} 
}
function loadInitialLibrary() {
  const book1 = new Book('De verenigde staten in de 20e eeuw', 'Maarten van Rossum', '509', true);
  addBookToLibrary(book1);
  
  const book2 = new Book('Pluk van de Petteflet', 'Annie M.G. Schmidt', '200', true);
  addBookToLibrary(book2);
  
  const book3 = new Book('De antwoorden op de Grote Vragen', 'Stephen Hawking', '264', false);
  addBookToLibrary(book3);

  displayBookStore();
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
    const checkbox = document.createElement('input'); checkbox.setAttribute('data',`${myLibraryShadow.indexOf(book)}`);
    const divBox = document.createElement('div');
checkbox.type = "checkbox";
checkbox.form = "add-book";
checkbox.name = "hasread";
checkbox.checked = book.readBook;
checkbox.id = "hasread";
const label = document.createElement('label')
label.htmlFor = "hasread";
divBox.appendChild(checkbox);
divBox.appendChild(label);
divBook.appendChild(divBox);
    getBooks();
    books.forEach(b => b.addEventListener('click', () => removeBookFromLibrary(b.parentElement.id)));})
}
function addBook() { const form = document.forms[0];
  const selectAuthor = form.querySelector('input[name="author"]');
  let selectedAuthor = selectAuthor.value;
  const selectTitle = form.querySelector('input[name="Title"]');
  let selectedTitle = selectTitle.value;
  const selectPages = form.querySelector('input[name="pagesnumber"]');
  let selectedPages = selectPages.value;
  const selectHasRead = form.querySelector('input[name="hasread"]');
  let selectedHasRead= selectHasRead.checked;
  book4 = new Book(selectedTitle, selectedAuthor, selectedPages, selectedHasRead);
  addBookToLibrary(book4);
  const books = document.querySelectorAll('.book');
  books.forEach(book => book.remove());
  displayBookStore();
}
function addBookToLibrary(book) {
  myLibrary.push(book);
  myLibraryShadow.push(book);
  return myLibrary;
}
function removeBookFromLibrary(id) {
  for ( let book of myLibrary ) {
    if ( book.id == id )  {myLibrary.splice(myLibrary.indexOf(book), 1);
  document.querySelectorAll(`[data='${id}']`).forEach(book => book.remove());}
  }
}
// Click event "add book" triggers pop-up with form for user to input details. 
addBookButton.addEventListener('click', () => {document.querySelector('#add-book').style.display='flex'; 
document.querySelector('.grid').classList.add('greyedout')}
);
// Click event "submit" closes pop-up and returns to main library.
submit.addEventListener('click', () => {document.querySelector('#add-book').style.display='none';
document.querySelector('.grid').classList.toggle('greyedout');}
);
// On submit we send the book details to the library.
submit.addEventListener('click', addBook);

// on start-up: entry-point.
loadInitialLibrary();

//add prototype
Book.prototype.readState = function() {
  if (this.readBook == true) { this.readBook = false;}
  else {
    this.readBook = true;
  }
  document.querySelector(`input[data='${this.id}']`).checked = this.readBook;
  console.log(this);
}


const inputCheckObj = document.querySelectorAll(`input[type=checkbox]`);
inputCheckObj.forEach(input => input.addEventListener('change', (e) => { e.target.getAttribute("data");
for (let book of myLibrary) { if (this.id == e.target.getAttribute("data")) { book.readState()} };
let checkboxState = document.querySelector(`input[data="${e.target.getAttribute("data")}"]`)
if (checkboxState.checked == true) {checkboxState.checked = false} else if (checkboxState.checked = false) {checkboxState.checked = true} })); 