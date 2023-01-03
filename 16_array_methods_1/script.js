//! Arrays and array methods 1
//? basics
let value;

const arrayOne = ["first item", 12, 12, [1, 2, 3], { name: "vardas" }];
const arrayTwo = new Array("string2", 12);

value = arrayOne[2][1];
value = arrayOne[3].name;

value = arrayOne.length;

//? Basic Array methods - changes original array
//pop
value = arrayOne.pop();

//push
value = arrayOne.push("added string");

//shift
value = arrayOne.shift();

//unshift
value = arrayOne.unshift("added string to the start");

//?pass by value - primitive data types
const number = 15;

let number2 = number;
number2 = 11;
// console.log(number, number2);

//? pass by reference - arrays, objects
const arrA = [5, 10, 15];
const arrB = arrA;
arrB[0] = 1;
// console.log(arrA, arrB);

//? Looping thorugh Array

//for loop
for (let i = 0; i < arrayOne.length; i++) {
  //   console.log(arrayOne[i]);
}

//for...of loop
for (const arrayItem of arrayOne) {
  console.log(arrayItem);
}

//?matrix of arrays
const arrMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

value = arrMatrix[2][1];

//todo Task 1:
/*
const musicStyles = ["Jazz", "Blues"];
console.log(musicStyles);
musicStyles.push("Rock-n-Roll");
console.log(musicStyles);
musicStyles[1] = "Classics";
console.log(musicStyles);
const deleted = musicStyles.shift();
console.log(deleted);
console.log(musicStyles);
musicStyles.unshift("Rap", "Reggae");
console.log(musicStyles);
*/

//todo Task 2:
const numbersArr = [11, -2, 34, 45, 19, -5, 6];

function getMaxSubSum(arr) {
  let sum = 0;
  for (const number of arr) {
    if (number > 0) {
      sum += number;
    }
  }
  return sum;
}

console.log(getMaxSubSum(numbersArr));

//? Other methods
//? Splice method - modifies original array

const spliceArray = ["I", "love", "JS", 5];

// value = spliceArray.splice(1, 1);
// value = spliceArray.splice(0, 2, "New love");

//? Slice - does not modify original array, gets copy of part of array or all of it

// value = spliceArray.slice(1, 3);
// value = spliceArray.slice(-2);
// one more way to copy array
// value = spliceArray.slice();

//? concat
const concatArray = spliceArray.concat(arrayOne, arrayTwo);

// console.log(spliceArray);
// console.log(concatArray);

//? spread operator
//alternative to concat method
const concatWithSpreadOperator = [...spliceArray, ...arrayOne, ...arrayTwo];

//one more way to copy array
const arrCopied = [...spliceArray];

// console.log(concatWithSpreadOperator);
// console.log(arrCopied);

//? index of, lastIndexOf, includes methods

// value = arrayOne.indexOf(12);
// value = arrayOne.lastIndexOf(12);
// value = arrayOne.includes(12);

console.log(value);
console.log(arrayOne);

//!Callback function

// document.addEventListener('click', handleClick );

function getName() {
  const name = prompt("Enter your name");
  return name;
}

function getLastName() {
  const lastName = prompt("Enter your last name");
  return lastName;
}

function displayName(nameFn) {
  console.log("Call me " + nameFn());
}

// displayName(getName);
// displayName(getLastName);

//? side note - recursive function

function recursiveCountDown(number) {
  console.log(number);
  number--;

  if (number > 0) {
    recursiveCountDown(number);
  }
}

recursiveCountDown(10);
