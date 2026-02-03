
// functions
const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divide = (a, b) => {
    return a/b;
}

const percentage = (a, b) => {
    return (a / b) * 100;
}

// variables
let firstOp = ""; 
let operator = "";  
let secondOp  = ""; 

// html elements
let display = document.querySelector('.display-value');
let clear = document.querySelector('.btn-c');
let percent = document.querySelector('.btn-p');
let addition = document.querySelector('.btn-a');
let subtraction = document.querySelector('.btn-s');
let multiplication = document.querySelector('.btn-m')
let division = document.querySelector('.btn-d')
// let equal = document.querySelector('.btn-eq')
// let dot = document.querySelector('.btn-dot')
// let num1 = document.querySelector('.btn1')
// let num2 = document.querySelector('.btn2')
// let num3 = document.querySelector('.btn3')
// let num4 = document.querySelector('.btn4')
// let num5 = document.querySelector('.btn5')
// let num6 = document.querySelector('.btn6')
// let num7 = document.querySelector('.btn7')
// let num8 = document.querySelector('.btn8')
// let num9 = document.querySelector('.btn9')
// let zero = document.querySelector('.btn0')
let figures = document.querySelector('.figures')

const operate = ( num1, op, num2) => {
    if (op === '+') return add(num1, num2);
    if (op === '-') return subtract(num1, num2);
    if (op === '*') return multiplication(num1, num2);
    if (op === '/') return divide(num1, num2);
    if (op === '%') return percentage(num1, num2);

}

figures.addEventListener('click', (e) => {
    if(e.target.matches('.btn-c')) {
        display.innerText = " "; 
        firstOp = ""; 
        operator = "";  
        secondOp  = ""; 
    } 

    if(e.target.matches('.num')) {
        firstOp += e.target.innerText
        display.innerText = firstOp;  
    }

    if(e.target.matches('.btn-p, .btn-a, .btn-s, .btn-m, .btn-d')) {
        if (firstOp === "") return;

        secondOp = firstOp;
        operator = e.target.innerText; 
        firstOp = "";
    } 


    if(e.target.matches('.btn-eq')) {
        if (secondOp === null || firstOp === "") return;

        const result = operate(parseFloat(secondOp), operator, parseFloat(firstOp));
        display.innerText = result;

        firstOp = result.toString();
        firstOp = "";
    }
})


console.log(add(22.4, 20));
