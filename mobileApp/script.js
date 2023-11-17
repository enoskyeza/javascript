import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove }  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-8cc97-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

let inputFieldEl = document.getElementById('input-field')
const addButtonEl = document.getElementById('add-button')
const addDblButtonEl = document.getElementById('double-add-button')
let shoppingList = document.getElementById('shopping-list')


addButtonEl.addEventListener('click', function(){
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    resetInput(inputFieldEl)

})

onValue(shoppingListInDB, function(snapshot){
    clearDOMListEl(shoppingList)

    if (snapshot.val()){
        let itemsArray = Object.entries(snapshot.val())
        for (let i=0; i<itemsArray.length; i++) {
            renderToDOM(shoppingList, itemsArray[i])
        }
    } else {
        console.log('Database is empty')
    }

})

function resetInput(input) {
    input.value = ''
}

// Create newElement and render it to the DOM
function renderToDOM(dom, item) {
    let itemID = item[0]
    let itemValue = item[1]

    // Create new element
    let newEl = document.createElement('li')

    // add informatiion/class/id or event listeners to the created element
    newEl.classList.add("shopping-item")
    newEl.textContent = itemValue
    newEl.addEventListener('click', function(){
        removeDBItem(itemID)
    })

    // append the new element to the parent element/container
    dom.append(newEl)


}

function clearDOMListEl(dom) {
    dom.innerHTML = ""
}

function removeDBItem(id) {
    let dbItemLocation = ref(database, `shoppingList/${id}`)
    remove(dbItemLocation)
}

