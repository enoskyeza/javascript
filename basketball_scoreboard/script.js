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


//  Home Buttons
homeScoreBtnOne.addEventListener('click', function(){
    addOne(homeScore)
})

homeScoreBtnTwo.addEventListener('click', function(){
    addTwo(homeScore)
})

homeScoreBtnThree.addEventListener('click', function(){
    addThree(homeScore)
})

homeResetBtn.addEventListener('click', function(){
    resetScore(homeScore)
})

// Guest Buttons
guestScoreBtnOne.addEventListener('click', function(){
    console.log('Guest button onne clicked')
    addOne(guestScore)
})

guestScoreBtnTwo.addEventListener('click', function(){
    addTwo(guestScore)
})

guestScoreBtnThree.addEventListener('click', function(){
    addThree(guestScore)
})

guestResetBtn.addEventListener('click', function(){
    resetScore(guestScore)
})


// Functions

function addOne(score){
    let newScore = parseInt(score.textContent)
    newScore += 1
    score.textContent = newScore
}

function addTwo(score){
    let newScore = parseInt(score.textContent)
    newScore += 2
    score.textContent = newScore
}

function addThree(score){
    let newScore = parseInt(score.textContent)
    newScore += 3
    score.textContent = newScore
}

function resetScore(score){
    score.textContent = 0
}