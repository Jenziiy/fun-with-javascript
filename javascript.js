let bookInfo;
let myLibrary = [];
let buttons;
// const divBook = document.querySelector('.book');
const divBookStore = document.querySelector('.bookstore');
addEventListener('DOMContentLoaded', removeBookFromLibrary);
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
  displayBook();
  removeBookFromLibrary();
});
const addBookButton = document.querySelector('.add-book');
addBookButton.addEventListener('click', () => {document.querySelector('#add-book').style.display='flex'; 
document.querySelector('.grid').classList.add('greyedout')});


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
  this.inventoryGenerator = function() {
    return `Book title: ${title} Author: ${author}, Number of pages: ${numberOfPages} Read book: ${Boolean(readBook)} `;
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
        removeBookItem.remove();}
        else if ( myLibrary.length == 1) { document.querySelector('.book').remove();}
        console.log(myLibrary);
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

function displayBook(){
  const book = myLibrary.at(-1)
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
  }
const book1 = new Book('De verenigde staten in de 20e eeuw', 'Maarten van Rossum', '509', true);
addBookToLibrary(book1);

const book2 = new Book('Pluk van de Petteflet', 'Annie M.G. Schmidt', '200', true);
addBookToLibrary(book2);

const book3 = new Book('De antwoorden op de Grote Vragen', 'Stephen Hawking', '264', false);
addBookToLibrary(book3);
console.log(myLibrary);
displayBookStore();




