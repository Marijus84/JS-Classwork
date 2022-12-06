let isItWinter;
console.log(isItWinter);
const isItSummer = false;
// if (isItWinter) {
//   console.log("It is winter and it is cold");
// } else {
//   console.log("I don't know if it is cold or not");
// }

if (isItWinter) {
  console.log("It is winter and it is cold");
} else if (isItSummer) {
  console.log("It might be hot outside");
} else {
  console.log("I don't know if it is cold or not");
}

const isItEvening = false;

//? ternary operator
isItEvening ? console.log("Evening") : console.log("not evening");

let isUserAdult = confirm("Are you an adult?");

isUserAdult
  ? alert("You can watch X rated movies")
  : alert("It is time to sleep");

//?switch statement

const weekDay = 3;

switch (weekDay) {
  case 1:
    console.log("Pirmadienis");
    break;
  case 2:
    console.log("Antradienis");
    break;
  case 3:
    console.log("Trečiadienis");
    break;
  default:
    console.log("Nesuprantama diena");
}
