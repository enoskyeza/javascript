document.addEventListener("DOMContentLoaded", function () {
    // Seat one elements
    const balanceInput1 = document.getElementById("balancePlayer1");
    const startButton1 = document.getElementById("startButton1");
    const currentBalancePlayer1 = document.getElementById("currentBalancePlayer1");
    const winsPlayer1 = document.getElementById("winsPlayer1");
    const lossesPlayer1 = document.getElementById("lossesPlayer1");
    const betButton1 = document.getElementById("playerBet1");
    const doubleButton1 = document.getElementById("playerDouble1");
    const playerWinButton1 = document.getElementById("playerWin1");
    const playerLoseButton1 = document.getElementById("playerLose1");
    const dealerWinButton1 = document.getElementById("dealerWin1");
    const dealerLoseButton1 = document.getElementById("dealerLose1");
    const currentBet1 = document.getElementById("currentBet1");
    const resetGameButton1 = document.getElementById("resetGame1");

    // Seat two elements
    const balanceInput2 = document.getElementById("balancePlayer2");
    const startButton2 = document.getElementById("startButton2");
    const currentBalancePlayer2 = document.getElementById("currentBalancePlayer2");
    const winsPlayer2 = document.getElementById("winsPlayer2");
    const lossesPlayer2 = document.getElementById("lossesPlayer2");
    const betButton2 = document.getElementById("playerBet2");
    const doubleButton2 = document.getElementById("playerDouble2");
    const playerWinButton2 = document.getElementById("playerWin2");
    const playerLoseButton2 = document.getElementById("playerLose2");
    const dealerWinButton2 = document.getElementById("dealerWin2");
    const dealerLoseButton2 = document.getElementById("dealerLose2");
    const currentBet2 = document.getElementById("currentBet2");
    const resetGameButton2 = document.getElementById("resetGame2");

    // Initialize variables for seat one
    let balancePlayer1 = 0;
    let winCountPlayer1 = 0;
    let lossCountPlayer1 = 0;
    let betAmount1 = 1000;

    // Initialize variables for seat two
    let balancePlayer2 = 0;
    let winCountPlayer2 = 0;
    let lossCountPlayer2 = 0;
    let betAmount2 = 1000;

    // Event listeners for seat one
    startButton1.addEventListener("click", function () {
        const inputBalance1 = parseFloat(balanceInput1.value);
        if (!isNaN(inputBalance1) && inputBalance1 > 0) {
            balancePlayer1 = inputBalance1;
            currentBalancePlayer1.textContent = balancePlayer1;
            balanceInput1.disabled = true;
            startButton1.disabled = true;
        } else {
            alert("Please enter a valid balance greater than 0 for Seat 1.");
        }
    });

    betButton1.addEventListener("click", function () {
        if (balancePlayer1 >= betAmount1) {
            balancePlayer1 -= betAmount1;
            currentBalancePlayer1.textContent = balancePlayer1;
            currentBet1.textContent = betAmount1;
        } else {
            alert("Seat 1: Insufficient balance for this bet.");
        }
    });

    // Add event listeners for other actions in seat one (double, win, lose, etc.)

    // Event listeners for seat two
    startButton2.addEventListener("click", function () {
        const inputBalance2 = parseFloat(balanceInput2.value);
        if (!isNaN(inputBalance2) && inputBalance2 > 0) {
            balancePlayer2 = inputBalance2;
            currentBalancePlayer2.textContent = balancePlayer2;
            balanceInput2.disabled = true;
            startButton2.disabled = true;
        } else {
            alert("Please enter a valid balance greater than 0 for Seat 2.");
        }
    });

    betButton2.addEventListener("click", function () {
        if (balancePlayer2 >= betAmount2) {
            balancePlayer2 -= betAmount2;
            currentBalancePlayer2.textContent = balancePlayer2;
            currentBet2.textContent = betAmount2;
        } else {
            alert("Seat 2: Insufficient balance for this bet.");
        }
    });

    // Add event listeners for other actions in seat two (double, win, lose, etc.)

    // Add a single event listener for tie and reset actions for both seats

    function resetBet1() {
        betAmount1 = 1000;
        currentBet1.textContent = betAmount1;
    }

    function resetBet2() {
        betAmount2 = 1000;
        currentBet2.textContent = betAmount2;
    }

    resetGameButton1.addEventListener("click", function () {
        balanceInput1.disabled = false;
        startButton1.disabled = false;
        balancePlayer1 = 0;
        winCountPlayer1 = 0;
        lossCountPlayer1 = 0;
        resetBet1();
        // Reset other elements for seat one
    });

    resetGameButton2.addEventListener("click", function () {
        balanceInput2.disabled = false;
        startButton2.disabled = false;
        balancePlayer2 = 0;
        winCountPlayer2 = 0;
        lossCountPlayer2 = 0;
        resetBet2();
        // Reset other elements for seat two
    });
});
