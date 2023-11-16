let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
const homeScoreBtnOne = document.getElementById('home-score-btn-1')
const homeScoreBtnTwo = document.getElementById('home-score-btn-2')
const homeScoreBtnThree = document.getElementById('home-score-btn-3')
const homeResetBtn = document.getElementById('reset-home-score')
const guestScoreBtnOne = document.getElementById('guest-score-btn-1')
const guestScoreBtnTwo = document.getElementById('guest-score-btn-2')
const guestScoreBtnThree = document.getElementById('guest-score-btn-3')
const guestResetBtn = document.getElementById('reset-guest-score')

//  refactored  function

function updateScore(scoreElement, value) {
    let newScore = parseInt(scoreElement.textContent)
    if (value === 0){
        scoreElement.textContent = 0
    } else {
        newScore += value
        scoreElement.textContent = newScore
    }
}

//  Home Buttons

homeScoreBtnOne.addEventListener('click', function(){
    updateScore(homeScore, 1)
})

homeScoreBtnTwo.addEventListener('click', function(){
    updateScore(homeScore, 2)
})

homeScoreBtnThree.addEventListener('click', function(){
    updateScore(homeScore, 3)
})

homeResetBtn.addEventListener('click', function(){
    updateScore(homeScore, 0)
})

// Guest Buttons
guestScoreBtnOne.addEventListener('click', function(){
    updateScore(guestScore, 1)
})

guestScoreBtnTwo.addEventListener('click', function(){
    updateScore(guestScore, 2)
})
guestScoreBtnThree.addEventListener('click', function(){
    updateScore(guestScore, 3)
})

guestResetBtn.addEventListener('click', function(){
    updateScore(guestScore, 0)
})









// Old code

//  Home Buttons

// homeScoreBtnOne.addEventListener('click', function(){
//     updateScore(homeScore, 1)
// })

// homeScoreBtnTwo.addEventListener('click', function(){
//     addTwo(homeScore)
// })

// homeScoreBtnThree.addEventListener('click', function(){
//     addThree(homeScore)
// })

// homeResetBtn.addEventListener('click', function(){
//     resetScore(homeScore)
// })

// // Guest Buttons
// guestScoreBtnOne.addEventListener('click', function(){
//     console.log('Guest button onne clicked')
//     addOne(guestScore)
// })

// guestScoreBtnTwo.addEventListener('click', function(){
//     addTwo(guestScore)
// })

// guestScoreBtnThree.addEventListener('click', function(){
//     addThree(guestScore)
// })

// guestResetBtn.addEventListener('click', function(){
//     resetScore(guestScore)
// })


// Functions

// function addOne(score){
//     let newScore = parseInt(score.textContent)
//     newScore += 1
//     score.textContent = newScore
// }

// function addTwo(score){
//     let newScore = parseInt(score.textContent)
//     newScore += 2
//     score.textContent = newScore
// }

// function addThree(score){
//     let newScore = parseInt(score.textContent)
//     newScore += 3
//     score.textContent = newScore
// }

// function resetScore(score){
//     score.textContent = 0
// }
