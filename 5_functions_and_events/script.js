//! Functions

//? function declaration
// function printMyName() {
//   console.log("My name is Marijus");
// }

// printMyName();

//? function with inner variables;
// function printMyName() {
//   const myName = "Marijus";
//   console.log(`My name is ${myName}`);
// }

// printMyName();

//? functions with outer (global) variables;

// const myName = "Marijus";

// function printMyName() {
//   console.log(`My name is ${myName}`);
// }

// printMyName();

//? functions with parameters;
// const myName = "Marijus";
// function printMyName(myFirstName) {
//   console.log(`My name is ${myFirstName}`);
// }

// printMyName(myName);

//? function with default parameters
// const myName = "Marijus";

// function printMyName(myFirstName = "Marijus", lastName = "Romanovas") {
//   console.log(`My name is ${myFirstName} ${lastName} `);
// }

// printMyName(undefined, "Jonaitis");

//? functions return statement
// function sum(a, b) {
//   return a + b;
// }

// const summa = sum(2, 3);
// console.log(summa);
// console.log(sum(2, 3));

//? function usage example
function checkAge(age) {
  //   if (age >= 18) {
  //     return true;
  //   } else {
  //     return confirm("Do you have permission from your parents?");
  //   }
  //?variantas su ternary
  //   return age >= 18
  //     ? true
  //     : confirm("Do you have permission from your parents?");
  //   //? variantas su OR operatorium
  //   return age >= 18 || confirm("Do you have permission from your parents?");
}

// let age = prompt("How old are you?", 18);
// if (checkAge(age)) {
//   alert("Access granted");
// } else {
//   alert("Access denied");
// }

//? function expression

const printMyName = function () {
  const myName = "Marijus";
  console.log(`My name is ${myName}`);
};

printMyName();

//? Arrow function
//!function declaration - regular function
function sum(a, b) {
  return a + b;
}

sum(2, 3);

//!function expression - arrow function
const sum2 = (a) => a * a;

sum2(2);

//? Task 1
//function declaration
function printHometown() {
  console.log("Telšiai");
}
printHometown();

// arrow function
const printHometown2 = () => console.log("Telšiai");
printHometown2();

//? Task 2
//function declaration
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}
console.log(min(1, 5));

//arrow function
const min2 = (a, b) => {
  return Math.min(a, b);
};

console.log(min2(1, 5));

const number = Math.ceil(Math.random() * 23);
console.log(number);
