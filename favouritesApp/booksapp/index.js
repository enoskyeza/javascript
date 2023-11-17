import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-92113-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const addButtonEl = document.getElementById("add-button")
const booksEl = document.getElementById("books")
let inputFieldEl = document.getElementById('input-field')

onValue(booksInDB, function(snapshot){
    clearBooksListEl()
    let booksArray = Object.values(snapshot.val())
    for (let i=0; i<booksArray.length; i++) {
        appendBookToBooksListEl(booksArray[i])
    }
    console.log(booksArray)
})

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(booksInDB, inputValue)
    console.log(`${inputValue} added to database`)
})

function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}
