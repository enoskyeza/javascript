let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// Get the leads from the localStorage
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()

    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}


// Testing Truthy & Falsy Concept
// const credits = 0

// if (credits) {
//     console.log("Let's play 🎰")
// } else {
//     console.log("Sorry, you have no credits 😭")
// }

// truthy
// falsy

// false
// 0
// ""
// null -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness
// NaN

let currentViewers = null

currentViewers = ["jane", "nick"]

if (currentViewers) {
    // do something , e.g. notify the live streamers
    console.log("we have viewers")
}