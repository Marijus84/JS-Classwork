//todo 0: Write named function sum(a, b) and invoke function with test arguments;

//todo 4: Write a function that returns true if a string is empty and false otherwise;

const isEmpty = (string) => (String(string) === "" ? true : false);
const isEmpty2 = (string) => !string;

const response = isEmpty("");
console.log(response);

console.log(isEmpty2("labas"));
