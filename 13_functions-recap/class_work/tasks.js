//todo 0: Write named function sum(a, b) and invoke function with test arguments;

//todo 4: Write a function that returns true if a string is empty and false otherwise;

const isEmpty = (string) => (String(string) === "" ? true : false);
const isEmpty2 = (string) => !string;

const response = isEmpty("");
console.log(response);

console.log(isEmpty2("labas"));

//todo HW 1
/*
Create a function wasteTime(), which would have a loop and would make 10000000 iterations. 
In every iteration it would just make dummy operation,
e.g. 5 * 95 / 12; Function should return how long it took to run iterations. 
Tip. Set timestamp (Date.now()) before running function and subtract it at the end of the function from new timestamp.
Write function as declaration and as arrow function.
*/

const wasteTime = () => {
  const startingTimestamp = Date.now();
  for (let i = 0; i < 100000000; i++) {
    (5 * 9) / 12;
  }
  return Date.now() - startingTimestamp;
};

const timeWasted = wasteTime();
console.log(wasteTime());

function wasteTime2() {
  console.time("wastedTime");
  for (let i = 0; i < 100000000; i++) {
    (5 * 9) / 12;
  }
  return console.timeEnd("wastedTime");
}

wasteTime2();

//todo HW 2
/* 
Write function calculator, which would take 3 parameters: number, operator, number, and would return result of number operator number,
e.g. 3, ‘-’, 1, should return 2. 
Set that default operator is ‘+’ if undefined is supplied as operator. 
Write function as declaration and as arrow function.
*/

const calculator = (firstOperand, operator = "+", secondOperand) => {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
    case "%":
      return firstOperand % secondOperand;
    default:
      break;
  }
};

const result = calculator(3, "-", 5);
console.log(result);
const result2 = calculator(3, undefined, 5);
console.log(result2);

function calculator2(firstOperand, operator = "+", secondOperand) {
  switch (operator) {
    case "+":
      return firstOperand + secondOperand;
    case "-":
      return firstOperand - secondOperand;
    case "*":
      return firstOperand * secondOperand;
    case "/":
      return firstOperand / secondOperand;
    case "%":
      return firstOperand % secondOperand;
    default:
      break;
  }
}

const result3 = calculator2(3, "-", 5);
console.log(result);
const result4 = calculator2(3, undefined, 5);
console.log(result2);

//todo HW 3
/*
Write IIFE with function declaration and as arrow function, 
which would print to console immediately after loading JS string with greeting: ‘Hello, today is <Monday>’,
where day name would be created depending on today’s weekday name 
(https://www.w3schools.com/jsref/jsref_obj_date.asp).Function invocation is not allowed.
*/

(() => {
  const day = new Date().getDay();
  let dayName;
  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Unknown day";
      break;
  }
  console.log(`Hello, today is ${dayName}`);
})();

(function () {
  const day = new Date().getDay();
  let dayName;
  switch (day) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    default:
      dayName = "Unknown day";
      break;
  }
  console.log(`Hello, today is ${dayName}`);
})();
