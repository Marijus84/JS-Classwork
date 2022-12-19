//! style manipulation examples

console.dir(document.querySelector("div"));
console.dir(document.querySelector("div").style);
console.dir(document.querySelector("div").style.border);

const allDivs = document.querySelectorAll("div");

//! 1 manipulate with .style property changes
for (let i = 0; i < allDivs.length; i++) {
  //   console.log(allDivs[i]);
  allDivs[i].style.width = "200px";
  allDivs[i].style.height = "200px";
  allDivs[i].style.border = "1px solid black";
  allDivs[i].style.backgroundColor = "red";
}

//! 2 set with function setAttribute('attribute name', 'new attribute value');
allDivs[0].setAttribute(
  "style",
  "width: 200px; height: 200px; border: 1px solid black; background-color: green"
);
console.log(allDivs[0].style);

//!3 set with cssText
allDivs[1].style.cssText =
  "width: 200px; height: 200px; border: 1px solid black; background-color: blue";

//?
// h1, h2, h3 uzdekit stiliu, kuris atitiktu:
// color: crimson;
// font-size: 30px;

const [first, second, third] = document.querySelectorAll("h1, h2, h3");

// console.log(first);

//!Date object

let result;

result = new Date();
result = new Date(0);
result = new Date(24 * 60 * 60 * 1000);
result = new Date("1995-02-11");
result = typeof new Date();
result = new Date().getTime();
result = Date.now();
result = +new Date();

const dateNow = new Date();
result = dateNow.getFullYear();
result = dateNow.getMonth();
result = dateNow.setFullYear("1991");
result = dateNow.getFullYear();
result = dateNow.toISOString();
result = dateNow.toLocaleDateString();
result = dateNow.toLocaleTimeString();

console.log(result);

const runClock = () => {
  document.querySelector(
    "div"
  ).innerHTML = `<h1 style="color:red">${new Date().toLocaleTimeString()}</h1>`;
};

setInterval(runClock, 1000);

//!Extras
// Kokius kintamųjų tipus naudojam JS? Kaip jie declaruojami?
// Tomas
const variableNotChangingValue = "example";
let variableNotChanging;

// Kokie duomenų tipai dažniausiai naudojami (3 duomentų primityvieji tipai, 2 duomenų struktūros)?
// Šarūnas;
// Eimantas ++

// boolean number String;
// Array, object;

const booleanVariable = true;
const stringVariable = "String kintamasis";
const numberVariable = 1999;

const arrayVariable = ["Mantas", "Jonas", "Petras"];
console.log(["Mantas", "Jonas", "Petras"][2]);
const objectVariable = {
  vardas: "Jonas",
  style: 1,
  bool: true,
  arrayVariable: [1, 2, 3],
};

// Kuom skiriasi == ir ===?
//Emilija
// console.log(1 == "1");
// console.log(1 === "1");

// Kokie yra loginio neigimo, ARBA ir AND operatoriai?
//Edgar

let isItWarm = true;
// console.log(!isItWarm);

console.log(true && false);
console.log(true || false);

//ternary, if/else
//Kristina

const weather = isItWarm ? "warm" : "cold";
console.log(weather);

if (isItWarm) {
  console.log("warm in if statement");
} else {
  console.log("cold in if statement");
}
