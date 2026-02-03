
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
let container = document.querySelector('.container');
let title = document.querySelector('.title')
let display = document.querySelector('.display-value');
let btn = document.querySelector('.btn');
let clear = document.querySelector('.btn-c');
let percent = document.querySelector('.btn-p');
let addition = document.querySelector('.btn-a');
let subtraction = document.querySelector('.btn-s');
let multiplication = document.querySelector('.btn-m');
let division = document.querySelector('.btn-d');
let mode = document.querySelector('#mode');
let figures = document.querySelector('.figures');

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

mode.addEventListener('click', () => {
    
     mode.classList.toggle("light")
     btn.classList.toggle("light")
     display.classList.toggle("light");
     title.classList.toggle("light");
     container.classList.toggle("light")
     document.body.classList.toggle("light");
     

  // Save the current state to localStorage
  if (document.body.classList.contains("")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "");
  }
})



