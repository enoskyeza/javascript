// document.getElementById("count-el").innerText = 5

// The DOM - Document Object Model
// initialize the count as 0
// listen for clicks on the click button
// add function that increments, and create it in js
// change the count-el in html to reflect the new count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count=0

function increment() {
    count++
    countEl.innerText=count
}

function save() {
    let newEntry= count + " - "
    saveEl.textContent += newEntry
    countEl.innerText= 0
    count = 0

}

// my logger task

// function num_caller() {
//     console.log(42)
// }

// num_caller()

// lap time addiyion task

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lap_adder() {
//     console.log(lap1 + lap2 + lap3 )
// }

// lap_adder()

// Lap_increment task

// let raceLap = 0;

// function lap_increment() {
//     raceLap++
// }

// lap_increment()
// lap_increment()
// lap_increment()

// console.log(raceLap)


// Chapter Assignment


// ////////////////////////////////////////////////////////////////////////
// // Create two variables, firstName and lastName
// let firstName = 'Enos'
// let lastName = 'Kyeza'
// // Concatenate the two variables into a third variable called fullName
// let fullName = firstName + ' ' + lastName
// // Log fullName to the console
// console.log(fullName)


// ////////////////////////////////////////////////////////////////////////
// let name = "Linda"
// let greeting = "Hi there"

// // Create a function that logs out "Hi there, Linda!" when called

// function greetLinda() {
//     console.log(greeting + ", " + name + "!")
// }

// greetLinda()


// ////////////////////////////////////////////////////////////////////////
// let myPoints = 3

// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable

// function add3Points() {
//     myPoints += 3
// }

// function remove1Point() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// remove1Point()
// add3Points()
// remove1Point()


// // Call the functions to that the line below logs out 10
// console.log(myPoints)

// ////////////////////////////////////////////////////////////////////////
// // When the user clicks the purchase button, render out
// // "Something went wrong, please try again" in the paragraph
// // that has the id="error".

// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase() {
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }