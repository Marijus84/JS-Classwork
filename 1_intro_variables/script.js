// console.log("Hello world! in external file");

//! variable types
//global variables
pirmasKintamasis = 2022;
console.log(pirmasKintamasis);

// var variable - function scoped
var secondVariable = 2023;
console.log(secondVariable);

// let variable - block scoped
let thirdVariable = "Christmas";
console.log(thirdVariable);

{
  let firstName = "Marijus";
  {
    console.log(firstName);
  }
}

// console.log(firstName);

//const variable - block scoped constant
const season = "Winter";
// season = "Summer";
console.log(season);

//!Basic data types
//String
const workplace = "CodeAcademy";
console.log(workplace);
const groupName = "CAFE04";
console.log(groupName);
const totalName = `Total name is : ${workplace} ${groupName}`;
console.log(totalName);

//Number
const currentYear = 2022;
const temperature = 3.77;

console.log(currentYear);
console.log(temperature);

//Boolean
const isDark = false;

console.log(isDark);

//Array
const colors = ["red", 15, true];
console.log(colors);

//Object
const car = {
  color: "blue",
  model: "Audi",
  year: 2022,
  isFrontWheelDriven: true,
};

console.log(car);
console.log(car.color);
console.log(car.year);

console.log(typeof car);
console.log(typeof workplace);
console.log(typeof currentYear);
console.log(typeof isDark);
console.log(typeof colors);

//!Basic operators

const a = 10;
const b = 3;
const sumNew = a + b;
console.log(sumNew);
const difference = a - b;
console.log(difference);
const multiplication = a * b;
console.log(multiplication);
const subtraction = a / b;
console.log(subtraction);
const remainder = a % b;
console.log(remainder);

// alert("Hello, I am first Alert");
// alert(55);

// let answer = confirm("Are you adult?");
// console.log(answer);

let promptAge = prompt("What is your age?", 18);
console.log(typeof promptAge);

document.write("15");
