const appSettings = {
    databaseURL: "https://playground-92113-default-rtdb.firebaseio.com/"
}

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    console.log(`${inputValue} added to database`)
})