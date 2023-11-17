import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove }  from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-8cc97-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

let inputFieldEl = document.getElementById('input-field')
const popupMessageEl = document.getElementById('popup-message');
const addButtonEl = document.getElementById('add-button')
let shoppingList = document.getElementById('shopping-list')
let cartEl = document.getElementById('cart-container')
let timerId



addButtonEl.addEventListener('click', function(){
    let inputValue = inputFieldEl.value.trim()

    if (inputValue === '') {
        popupMessageEl.classList.add('show');

        clearTimeout(timerId);

        timerId = setTimeout(function() {
            popupMessageEl.classList.remove('show') ;
        }, 2000); // 3000 milliseconds = 3 seconds

    } else {
        push(shoppingListInDB, inputValue)
        resetInput(inputFieldEl)
    }

})

onValue(shoppingListInDB, function(snapshot){
    clearDOMListEl(shoppingList)

    if (snapshot.val()){
        let itemsArray = Object.entries(snapshot.val())
        for (let i=0; i<itemsArray.length; i++) {
            renderToDOM(shoppingList, itemsArray[i])
        }
    } else {
        emptyCartDOM(shoppingList)
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

function emptyCartDOM(dom) {
    let newElImg = document.createElement('img')

    newElImg.src = "assets/empty_cart.svg"
    newElImg.classList.add()
    dom.appendChild(newElImg)
}

function clearDOMListEl(dom) {
    dom.innerHTML = ""
}

function removeDBItem(id) {
    let dbItemLocation = ref(database, `shoppingList/${id}`)
    remove(dbItemLocation)
}


// Refactored code below

// // Empty innput Validation using the display: none property

// inputFieldEl.addEventListener('input', function() {
//     // Hide the popup message when User starts typing
//     if (inputFieldEl.value.trim() !== '') {
//         popupMessageEl.style.display = 'none';
//     }
// });

// addButtonEl.addEventListener('click', function(){
//     let inputValue = inputFieldEl.value.trim()

//     if (inputValue === '') {
//         popupMessageEl.style.display = 'block';

//         // Clear any existing timer before starting a new one
//         clearTimeout(timerId);

//         // Set a timer to hide the popup message after 3 seconds (adjust the time as needed)
//         timerId = setTimeout(function() {
//             popupMessageEl.style.display = 'none';
//         }, 1500); // 3000 milliseconds = 3 seconds
//     } else {
//         push(shoppingListInDB, inputValue)
//         resetInput(inputFieldEl)
//     }

// })


{/* <img src="assets/empty_cart.svg" alt="">
<p>Cart is empty, add something!!</p> */}