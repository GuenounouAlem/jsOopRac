// array of book objects
const myLibrary = [
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669},
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669},
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669},
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669},
    {title: 'LOTR', author: 'JRR Tolkien', pages: 669},
]



// Book object Constructor
function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}


// Function to add books to the library
function addBook() {
    const book = new Book(title, author, pages)
    myLibrary.push(book)
}

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
    card.appendChild(img)
    card.appendChild(title)
    card.appendChild(author)
    card.appendChild(pages)
})