
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
let firstOp ;
let operator ;
let secondOp ;

// html elements
let display = document.querySelector('.display-value');
let clear = document.querySelector('.btn-c');
let percent = document.querySelector('.btn-p');
let addition = document.querySelector('.btn-a');
let subtraction = document.querySelector('.btn-s');
let multiplication = document.querySelector('.btn-m')
let division = document.querySelector('.btn-d')
let equal = document.querySelector('.btn-eq')
let dot = document.querySelector('.btn-dot')
let num1 = document.querySelector('.btn1')
let num2 = document.querySelector('.btn2')
let num3 = document.querySelector('.btn3')
let num4 = document.querySelector('.btn4')
let num5 = document.querySelector('.btn5')
let num6 = document.querySelector('.btn6')
let num7 = document.querySelector('.btn7')
let num8 = document.querySelector('.btn8')
let num9 = document.querySelector('.btn9')
let zero = document.querySelector('.btn0')


const operate = (op, num1, num2) => {

    add(num1, num2)

}