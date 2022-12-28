//! Functions

//? Function declaration
//declare function
function sayHello() {
  console.log("Hello, world!");
}

//call function
sayHello();

//function expression
//same with arrow function as above
const sayHelloArrow = () => console.log("Hello, world arrow function!");

sayHelloArrow();

/* Task 1
Create function with function declaration and arrow function, which:
Print you name and last name. Do not pass parameters; 
*/

//? Passing parameters
function getMyName(firstName, lastName) {
  return `You can call me ${firstName} ${lastName}`;
}

const fName = "Marijus";
const myNameString = getMyName(fName, "Romanovas");
console.log(myNameString);

//arrow function - the same as above
const getMyNameArrow = (firstName, lastName) =>
  `You can call me ${firstName} ${lastName}`;

console.log(getMyNameArrow(fName, "Romanovas"));

/* Task 2
Create function (2 ways), which:
would get width, length and height as parameters and would
return volume of figure; (lets assume it is rectangle S = a * b * c)
console.log returned value
*/
// task 2 solution
function getVolume(a, b, c) {
  return a * b * c;
}
console.log(getVolume(2, 3, 4));

const getVolumeArrow = (a, b, c) => a * b * c;
const length = 5;
width = 4;
height = 3;
console.log(getVolumeArrow(length, width, height));

//? Variables from outer scope
const temperatureInCelsius = 33;

function convertToFahrenheit() {
  return temperatureInCelsius * 1.8 + 32;
}

console.log(convertToFahrenheit());

const convertToFahrenheitArrow = () => temperatureInCelsius * 1.8 + 32;

console.log(convertToFahrenheitArrow());

//? Default parameters

function printMyNameWithDefault(firstName = "Marijus", lastName) {
  return `You can call me ${firstName} ${lastName}`;
}
console.log(printMyNameWithDefault(undefined, "Romanovas"));
console.log(printMyNameWithDefault("Jonas", "Romanovas"));

const printMyNameWithDefaultArrow = (firstName = "Marijus", lastName) =>
  `You can call me ${firstName} ${lastName}`;

console.log(printMyNameWithDefaultArrow(undefined, "Romanovas"));

//? IIFE
(function () {
  console.log("Good morning");
})();

(() => console.log("Good morning with arrow"))();
