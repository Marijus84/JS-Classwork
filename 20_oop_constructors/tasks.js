//? Task 2
/*
Naudojant ES6 klases sukurkite objekto Filmas (Movie) kūrimo konstruktorių, kuris turės šias savybes: 
1. name; 2. year; 3. director; 4. budget; 5. income.
ir metodus:
1. getIntroduction, kuris grąžins filmo pilną pavadinimą (su name, year, director);
2. getProfit, kuris grąžins sumą, kurią uždirbo (pelną) filmas.
*/

class Movie {
  constructor(name, year, director, budget, income) {
    this.name = name;
    this.year = year;
    this.director = director;
    this.budget = budget;
    this.income = income;
  }
  getIntroduction() {
    return `Movie ${this.name} was created on ${this.year} and directed by ${this.director}`;
  }
  getProfit() {
    const balance = this.income - this.budget;
    return balance > 0
      ? `Movie has earned: ${balance}`
      : `Movie lost: ${balance}`;
  }
}

const titanicMovie = new Movie("Titanic", 1999, "Cameron", 20000000, 150000000);
const badMovie = new Movie("Bad Movie", 2000, "Putin", 255555555, 1000);

console.log(titanicMovie);
console.log(titanicMovie.getIntroduction());
console.log(titanicMovie.getProfit());

console.log(badMovie);
console.log(badMovie.getIntroduction());
console.log(badMovie.getProfit());

//? Task 3
/*

Sutvarkykite kodą, kad pavyktų sukurti objektą Rabbit: 
class Animal {
constructor(name) { this.name = name;
} }
class Rabbit extends Animal { constructor(name) {
this.name = name;
this.created = Date.now(); }
}
let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name) {
    super(name);
    this.created = Date.now();
  }
}
let rabbit = new Rabbit("White Rabbit");
console.log(rabbit);
console.log(rabbit.created);

//? Task4
/*
Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), 
kuris turės šias savybes: 1. make; 2. model; 3. year.
ir metodus:
1. getIntroduction, kuris grąžins pilną pavadinimą (su make ir model).
2. getAge, kuris gražins “10 metų arba naujesnis”, 
jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, 
jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą).
Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle),
 kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę:
1. wheels (kurio vertė bus number). Ir metodą:
1. getWheelsNumber, kuris grąžins “motociklas turi 3 ratus”, jei wheels vertė bus 3 ir “motociklas turi 2 ratus”, jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių).
Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.
*/

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getIntroduction() {
    return `The car is ${this.make} ${this.model}`;
  }
  getAge() {
    return new Date().getFullYear() - this.year > 10
      ? "11 metų arba senesnis"
      : "10 metų arba naujesnis";
  }
}

const myCar = new Car("VW", "Passat", 2009);
console.log(myCar);
console.log(myCar.getIntroduction());
console.log(myCar.getAge());

const newCar = new Car("VW", "Passat", 2022);
console.log(newCar.getAge());

class Motorcycle extends Car {
  constructor(make, model, year, wheels) {
    super(make, model, year);
    this.wheels = wheels;
  }
  getWheelsNumber() {
    if (this.wheels === 3) {
      return "Motociklas turi 3 ratus";
    } else if (this.wheels === 2) {
      return "Motociklas turi 2 ratus";
    }
    return "Keistas motociklas su neįprastu ratų skaičiumi";
  }
}

const normalMotorcycle = new Motorcycle("Kawasaki", "R1", 2015, 2);
console.log(normalMotorcycle);
console.log(normalMotorcycle.getWheelsNumber());
console.log(normalMotorcycle.getAge());

const strangeMotorcycle = new Motorcycle("KK", "R2", 2005, 1);
console.log(strangeMotorcycle.getWheelsNumber());
