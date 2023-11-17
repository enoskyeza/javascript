import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push}  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-8cc97-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

let inputFieldEl = document.getElementById('input-field')
const addButtonEl = document.getElementById('add-button')
let shoppingList = document.getElementById('shopping-list')

addButtonEl.addEventListener('click', function(){
    let inputValue = inputFieldEl.value
    // push(shoppingListInDB, inputValue)
    renderToDOM(shoppingList, inputValue)
    resetInput(inputFieldEl)

})

function resetInput(input) {
    input.value = ''
}

function renderToDOM(dom, value) {
    dom.innerHTML += `<li>${value}</li>`

}

// function renderList(list) {
//     for (let i=o; i<list.length; i++) {

//     }
// }