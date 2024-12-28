const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author, 
    this.pages = pages,
    this.read = read
}

Book.prototype.toogleRead = function() {
    this.read = !this.read;
}


function toogleRead(index) {
    myLibrary[index].toogleRead();
    render();
}

function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = " ";
    for( let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        <div class="card">
            <h3 id="title">${book.title}</h3>
            <h5 id="author">By ${book.author}</h5>
            <p id="pages">${book.pages} Pages</p>
            <button id="read-status" onclick="toogleRead(${i})">${book.read ? "Read" : "Not Read Yet"}</button>
            <button id="remove" onclick="removeBook(${i})">Remove</button>
        </div>        
        `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

function addBookToLibrary() {
    let title = document.querySelector("#bookTitle").value;
    let author = document.querySelector("#bookAuthor").value;
    let pages = document.querySelector("#bookPages").value;
    let read = document.getElementById("bookRead").checked;
    let newBook  = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function() {
    let myModal = document.querySelector("#myModal");
    myModal.style.display = "block"; 
})

let cancelModal = document.querySelector(".close")
cancelModal.addEventListener("click", () => {
    myModal.style.display = "none"; 
});

document.querySelector("#bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    myModal.style.display = "none"; 
    this.reset();
})