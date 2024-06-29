// const cors = require('cors')
// app.use(cors())
function allBook() {
    fetch("http://localhost:3000/listAllBook")
        .then((data) => data.json())
        .then((responseData) => {
            console.log(responseData);
            const allBookData = document.querySelector('.allBook-secContainer');
            allBookData.innerHTML = "";

            responseData.findBook.forEach((book) => {
                allBookData.innerHTML += `
                    <div id="allBooks">
                        <h3> Author: ${book.Author}</h3>
                        <h3> Title: ${book.BookTitle}</h3>
                        <h3> Description: ${book.Description}</h3>
                        <h3> Published: ${book.Publised}</h3>
                    </div>`;
            });
        })
        .catch((error) => {
            console.error(error);
        });
}

async function addBook() {
    const addBookStore = {
        BookId: document.getElementById('BookId').value,
        BookTitle: document.getElementById('BookTitle').value,
        Description: document.getElementById('Description').value,
        Author: document.getElementById('Author').value,
        Publised: document.getElementById('Publised').value
    }
    try {
        const url = ("http://localhost:3000/addNewbook")
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addBookStore)
        })
        if (!response.ok) {
            throw new error("BookId is already exist..")
        }
        const addBookData = await response.json()
        console.log(addBookData);
        document.getElementById('addBookShow').innerHTML = addBookData.message;
    } catch (error) {
        console.log(error);
        document.getElementById('addBookShow').innerHTML = "some internal issue.."

    }

}

async function removeBook() {
    const removeBookstore = {
        BookId: document.getElementById('BookId').value,
    }
    try {
        const url = ("http://localhost:3000/removeBook")
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(removeBookstore)
        })
        if (!response.ok) {
            throw new error("BookId is already exist..")
        }
        const removeBookData = await response.json()
        console.log(removeBookData);
        document.getElementById('removeBookShow').innerHTML = removeBookData.message;
    } catch (error) {
        console.log(error);
        document.getElementById('removeBookShow').innerHTML = "some internal issue.."

    }
}

async function updateBook() {
    const updateBookStore = {
        BookId: document.getElementById('BookId').value,
        BookTitle: document.getElementById('BookTitle').value,
        Description: document.getElementById('Description').value,
        Author: document.getElementById('Author').value,
        Publised: document.getElementById('Publised').value
    }
    try {
        const url = ("http://localhost:3000/updateBook")
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBookStore)
        })
        if (!response.ok) {
            throw new error("BookId is already exist..")
        }
        const updateBook = await response.json()
        console.log(updateBook);
        document.getElementById('updateBookShow').innerHTML = updateBook.message;
    } catch (error) {
        console.log(error);
        document.getElementById('updateBookShow').innerHTML = "some internal issue.."

    }

}

async function issueBook() {
    const issueBookStore = {
        BookId: document.getElementById('BookId').value,
        email: document.getElementById('email').value
    }
    try {
        const url = ("http://localhost:3000/bookIssue")
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(issueBookStore)
        })
        if (!response.ok) {
            throw new error("Book is not available..")
        }
        const issueBookData = await response.json()
        console.log(issueBookData);
        document.getElementById('issueBookShow').innerHTML = issueBookData.message
    } catch (error) {
        console.log(error);
        document.getElementById('issueBookShow').innerHTML = "please check your email.."

    }
}

async function returnBook() {
    const returnBookStore = {
        BookId: document.getElementById('BookId').value,
        email: document.getElementById('email').value
    }
    try {
        const url = ("http://localhost:3000/returnBook")
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(returnBookStore)
        })
        if (!response.ok) {
            throw new error("not a valid member")
        }
        const returnBookData = await response.json()
        console.log(returnBookData);
        document.getElementById('returnBookShow').innerHTML = returnBookData.message
    } catch (error) {
        console.log(error);
        document.getElementById('returnBookShow').innerHTML = "please check your email.."

    }
}