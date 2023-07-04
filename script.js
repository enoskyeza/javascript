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
