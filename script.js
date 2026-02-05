
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
    if (b === 0) {
        return 'oops, not possible'
    } else {
        return a/b;
    }
    
}

const percentage = (a, b) => {
    return (a / b) * 100;
}

// variables
let firstOp = "";
let secondOp = ""; 
let operator = null;  
let waitingForSecond = false;

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
let num = document.querySelector('.num');

const operate = ( num1, op, num2) => {
    if (op === '+') return add(num1, num2);
    if (op === '-') return subtract(num1, num2);
    if (op === '*') return multiply(num1, num2);
    if (op === '/') return divide(num1, num2);
    if (op === '%') return percentage(num1, num2);

}

figures.addEventListener('click', (e) => {

  /* CLEAR */
  if (e.target.matches('.btn-c')) {
    display.innerText = "";
    firstOp = "";
    operator = null;
    waitingForSecond = false;
    return;
  }

  /* NUMBER */
  if (e.target.matches('.num')) {
    if (waitingForSecond) {
      display.innerText = "";
      waitingForSecond = false;
    }

    display.innerText += e.target.innerText;
    firstOp = display.innerText;
    return;
  }


  /* OPERATOR */
  if (e.target.matches('.btn-p, .btn-a, .btn-s, .btn-m, .btn-d')) {

    if (operator !== null && !waitingForSecond) {
      // chain calculation
      const result = operate(
        parseFloat(secondOp),
        operator,
        parseFloat(firstOp)
      );
      display.innerText = parseFloat(result.toFixed(2));
      firstOp = parseFloat(result.toFixed(2));
    }

    operator = e.target.innerText;
    secondOp = firstOp;
    waitingForSecond = true;
    return;
  }

  /* EQUALS */
  if (e.target.matches('.btn-eq')) {
    if (operator === null || waitingForSecond) return;

    const result = operate(
      parseFloat(secondOp),
      operator,
      parseFloat(firstOp)
    );

    display.innerText = parseFloat(result.toFixed(2));
    firstOp = parseFloat(result.toFixed(2));
    operator = null;
    waitingForSecond = true;
  }

     /* backspace */
  if (e.target.matches('.btn-b')) {
    // if (waitingForSecond) return
        display.innerText = display.innerText.slice(0, -1);
        firstOp = display.innerText;

    console.log(display.innerText);
    return;
  }
});



// dark mode
mode.addEventListener('click', () => {
    
     mode.classList.toggle("light")
    //  btn.classList.toggle("light")
     display.classList.toggle("light");
     title.classList.toggle("light");
     container.classList.toggle("light")
     document.body.classList.toggle("light-body");
     

})



