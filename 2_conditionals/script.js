//! Type conversions
//?to Number
// const age = prompt("Enter age");
// console.log(typeof age);

// const ageAsNumber = Number(age);
// console.log(typeof ageAsNumber);

console.log(Number("a"));

console.log(parseFloat("2.22"));
console.log(parseFloat("2.22ablasdjfljasdf"));
console.log(parseFloat("aa2.22"));

console.log(parseInt("2.22"));
console.log(parseInt(true));

// const age = +prompt("Enter age");

// // const ageAsNumber = +age;
// console.log(typeof age);

//? to String
const temperature = 5;
console.log(typeof temperature);
console.log(typeof String(temperature));
// console.log(typeof temperature.toString());

//? Numbers and strings from Booleans
console.log(typeof String(true));
console.log(typeof Number(false));

//? automatic conversions

console.log("3" + 4);
console.log("3" - 4);
console.log("3" - true);
console.log(3 + false);

console.log("Marijus" + " Romanovas");
const lastName = "Romanovas";
console.log(`Marijus ${lastName}`);

//!Operators
//? Asignment operators

const a = 5;

let b = 2;
b += 5;
//the same as above:  b = b + 5;
console.log(b);

b -= 2;
console.log(b);

b *= 2;
b /= 2;

//? comparison operators

console.log(1 == "1");
console.log(1 === "1");
console.log(1 !== "1");
console.log(1 > 2);
console.log(1 >= "1");

console.log("C" > "A");

//? increment/decrement operators

let number = 1;
// number++;
// console.log(number);
number--;
console.log(number);

//? logical operators

console.log(true && true && true);
console.log(false || false);
console.log(!true);

console.log(3 == 4);
