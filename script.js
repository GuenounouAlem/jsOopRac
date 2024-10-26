// array of book objects
const myLibrary = [
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669, read: true},
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669, read: true},
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669, read: true},
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669, read: true},
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669, read: true},
]

const container = document.querySelector('.book-container')

// Book object Constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    toggleRead = function () {
        this.read = !this.read
    }
}


// Function to add books to the library
function addBook(title, author, pages) {
    const book = new Book(title, author, pages)
    myLibrary.push(book)
}

function displayBooks() {
    container.innerHTML = ''
    myLibrary.forEach((book) => {
        const card = document.createElement('div')
        card.className = 'book'
        const img = document.createElement('img')
        img.src = 'book.png'
        const title = document.createElement('h3')
        title.innerText = book.title
        const author = document.createElement('h4')
        author.innerText = book.author
        const pages = document.createElement('h4')
        pages.innerText = book.pages
        const read = document.createElement('h4')
        if(book.read) {
            read.innerText = 'Read'
        } else {
            read.innerText = 'Not Read yet'
        }
        card.appendChild(img)
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(read)
        container.appendChild(card)
    })
}

displayBooks()








//-------------------- Form Modal handeling ----------------------// 

const addBtn = document.getElementById("add");
const bookDialog = document.getElementById("bookDialog");
const dTitle = document.getElementById("title")
const dAuth = document.getElementById("auth")
const dPages = document.getElementById("pages")
const confirmBtn = bookDialog.querySelector("#confirm");

// "Show the dialog" button opens the <dialog> modally
addBtn.addEventListener("click", () => {
  bookDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  bookDialog.close(addBook(dTitle.value, dAuth.value, dPages.value));
  displayBooks();

   // Have to send the select box value here.
});
