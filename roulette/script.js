// Keep track of balance
let fibonacciBalance = 0;
let neoBalance = 0;

// Keep track of the round number for each strategy
let fibonacciRoundNumber = 1;
let neoRoundNumber = 1;


// Function to add a transaction to the table
function addTransaction(strategy, status, betAmount, profit) {
  const table = document.getElementById(`${strategy}-transactions`).getElementsByTagName('tbody')[0];
  const newRow = table.insertRow(-1);
  const roundCell = newRow.insertCell(0);
  const statusCell = newRow.insertCell(1);
  const betAmountCell = newRow.insertCell(2);
  const profitCell = newRow.insertCell(3);

  roundCell.textContent = strategy === 'fibonacci' ? fibonacciRoundNumber++ : neoRoundNumber++;
  statusCell.textContent = status;
  betAmountCell.textContent = betAmount;
  profitCell.textContent = profit;
}


function startFibonacciGame() {
    const startingBalance = parseFloat(document.getElementById("fibonacci-starting-balance").value);
    if (!isNaN(startingBalance)) {
      fibonacciBalance = startingBalance;
      updateBalanceDisplay('fibonacci');
    }
}

function betFibonacci() {
const betAmount = parseFloat(document.getElementById("fibonacci-bet-amount").value);
if (!isNaN(betAmount) && betAmount <= fibonacciBalance) {
    fibonacciBalance -= betAmount;
    updateBalanceDisplay('fibonacci');
}
}

function winFibonacci() {
  const betAmount = parseFloat(document.getElementById("fibonacci-bet-amount").value);
  if (!isNaN(betAmount)) {
    fibonacciBalance += betAmount * 3;
    updateBalanceDisplay('fibonacci');
    addTransaction('fibonacci', 'Win', betAmount, betAmount * 2);
    // Reset the bet input
    document.getElementById("fibonacci-bet-amount").value = '';
  }
}

function loseFibonacci() {
  const betAmount = parseFloat(document.getElementById("fibonacci-bet-amount").value);
  if (!isNaN(betAmount)) {
    addTransaction('fibonacci', 'Lose', betAmount, 0);
    // Reset the bet input
    document.getElementById("fibonacci-bet-amount").value = '';
  }
}


function startNeoMartingaleGame() {
  const startingBalance = parseFloat(document.getElementById("neo-starting-balance").value);
  if (!isNaN(startingBalance)) {
    neoBalance = startingBalance;
    updateBalanceDisplay('neo');
  }
}

function betNeoMartingale() {
  const betAmount = parseFloat(document.getElementById("neo-bet-amount").value);
  if (!isNaN(betAmount) && betAmount <= neoBalance) {
    neoBalance -= betAmount;
    updateBalanceDisplay('neo');
  }
}

function winNeoMartingale() {
  const betAmount = parseFloat(document.getElementById("neo-bet-amount").value);
  if (!isNaN(betAmount)) {
    neoBalance += betAmount * 2;
    updateBalanceDisplay('neo');
    addTransaction('neo', 'Win', betAmount, betAmount);
    // Reset the bet input
    document.getElementById("neo-bet-amount").value = '';
  }
}

function loseNeoMartingale() {
  const betAmount = parseFloat(document.getElementById("neo-bet-amount").value);
  if (!isNaN(betAmount)) {
    addTransaction('neo', 'Lose', betAmount, 0);
    // Reset the bet input
    document.getElementById("neo-bet-amount").value = '';
  }
}


function stopGame(strategy) {
  if (strategy === 'fibonacci') {
    fibonacciBalance = 0;
    updateBalanceDisplay('fibonacci');
  } else if (strategy === 'neo') {
    neoBalance = 0;
    updateBalanceDisplay('neo');
  }
}

function updateBalanceDisplay(strategy) {
  if (strategy === 'fibonacci') {
    document.getElementById("fibonacci-balance").textContent = fibonacciBalance;
  } else if (strategy === 'neo') {
    document.getElementById("neo-balance").textContent = neoBalance;
  }
}



// function winFibonacci() {
//   const betAmount = parseFloat(document.getElementById("fibonacci-bet-amount").value);
//   if (!isNaN(betAmount)) {
//     fibonacciBalance += betAmount * 3;
//     updateBalanceDisplay('fibonacci');
//     // Reset the bet input
//     document.getElementById("fibonacci-bet-amount").value = '';
//   }
// }

// function loseFibonacci() {
//   // Reset the bet input
//   document.getElementById("fibonacci-bet-amount").value = '';
// }



// function winNeoMartingale() {
//   const betAmount = parseFloat(document.getElementById("neo-bet-amount").value);
//   if (!isNaN(betAmount)) {
//     neoBalance += betAmount * 2;
//     updateBalanceDisplay('neo');
//     // Reset the bet input
//     document.getElementById("neo-bet-amount").value = '';
//   }
// }

// function loseNeoMartingale() {
//   // Reset the bet input
//   document.getElementById("neo-bet-amount").value = '';
// }

