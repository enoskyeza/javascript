let displayEl = document.getElementById('display')
let calcHistory = []
let oprHistory = ''

function numButton(element) {
    displayEl.value += element.innerText
    console.log('Button content: ' + element.innerText)
    console.log(calcHistory)
    if (calcHistory.length > 0) {
        calcHistory.push(parseInt(displayEl.value))
    }
    console.log(calcHistory)
}

function oprButtone(element) {
    console.log('Button content: ' + element.innerText)

    if (element.innerText === "←") {
        console.log('Yeap thats the backspace!')
        displayEl.value.pop()
    } else if (element.innerText === "C/E" || element.innerText === "C" ) {
         displayEl.value = ''
    } else if (element.innerText === "+") {
        console.log('addition')
        calcHistory.push(parseInt(displayEl.value))
        console.log(calcHistory)
        displayEl.value = ''
        oprHistory = "+"
    } else if (element.innerText === "-") {
        console.log('subtraction')
        calcHistory.push(parseInt(displayEl.value))
        console.log(calcHistory)
        displayEl.value = ''
        oprHistory = "-"
    } else if (element.innerText === "*") {
        console.log('multiplication')
        calcHistory.push(parseInt(displayEl.value))
        console.log(calcHistory)
        displayEl.value = ''
        oprHistory = "*"
    } else if (element.innerText === "/") {
        console.log('division')
        calcHistory.push(parseInt(displayEl.value))
        console.log(calcHistory)
        displayEl.value = ''
        oprHistory = "/"
    } else if (element.innerText === "=") {
        if(calcHistory.length === 2 && oprHistory === "+") {
            displayEl.value = sumNum(calcHistory[0], calcHistory[1])
            calcHistory =[]
        } else if(calcHistory.length === 2 && oprHistory === "-") {
            displayEl.value = subNum(calcHistory[0], calcHistory[1])
            calcHistory =[]
        } else if(calcHistory.length === 2 && oprHistory === "/") {
            displayEl.value = divNum(calcHistory[0], calcHistory[1])
            calcHistory =[]
        } else if(calcHistory.length === 2 && oprHistory === "*") {
            displayEl.value = multNum(calcHistory[0], calcHistory[1])
            calcHistory =[]
        }

    }

}

function sumNum(num1, num2){
    return num1 + num2
}
function divNum(num1, num2){
    return num1 / num2
}
function multNum(num1, num2){
    return num1 * num2
}
function subNum(num1, num2){
    return num1 - num2
}
// buttonEl.addEventListener('click', function() {
//     displayEl.value = "1"
//     console.log('number 1 clicked')
//     console.log(displayEl)
//     console.log('Button content: ' + buttonEl.innerText)
// })


function oprButton(element) {
    console.log('Button content: ' + element.innerText);

    if (element.innerText === "←") {
        displayEl.value = displayEl.value.slice(0, -1);
    } else if (element.innerText === "C/E" || element.innerText === "C") {
        displayEl.value = '';
    } else {
        // Handle operators using a switch statement
        switch (element.innerText) {
            case "+":
                handleOperator("+");
                break;
            case "-":
                handleOperator("-");
                break;
            case "*":
                handleOperator("*");
                break;
            case "/":
                handleOperator("/");
                break;
            case "=":
                if (calcHistory.length === 2 && oprHistory) {
                    calculateResult();
                }
                break;
            default:
                console.log('Invalid operation');
        }
    }
}

function handleOperator(operator) {
    if (oprHistory) {
        console.log('An operator is already set');
    } else {
        calcHistory.push(parseFloat(displayEl.value));
        displayEl.value = '';
        oprHistory = operator;
    }
}

function calculateResult() {
    let result;
    switch (oprHistory) {
        case "+":
            result = sumNum(calcHistory[0], calcHistory[1]);
            break;
        case "-":
            result = subNum(calcHistory[0], calcHistory[1]);
            break;
        case "/":
            result = divNum(calcHistory[0], calcHistory[1]);
            break;
        case "*":
            result = multNum(calcHistory[0], calcHistory[1]);
            break;
    }
    displayEl.value = result;
    calcHistory = [];
    oprHistory = '';
}
