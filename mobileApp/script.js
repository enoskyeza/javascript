import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue}  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    push(shoppingListInDB, inputValue)
    resetInput(inputFieldEl)

})

onValue(shoppingListInDB, function(snapshot){
    clearDOMListEl(shoppingList)
    let itemsArray = Object.entries(snapshot.val())

    for (let i=0; i<itemsArray.length; i++) {
        let currentItemID = itemsArray[i][0]
        let currentItemValue = itemsArray[i][1]
        renderToDOM(shoppingList, currentItemValue)
    }
})

function resetInput(input) {
    input.value = ''
}

function renderToDOM(dom, value) {
    dom.innerHTML += `<li>${value}</li>`
}

function clearDOMListEl(dom) {
    dom.innerHTML = ""
}

