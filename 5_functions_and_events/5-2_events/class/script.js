//! events general example

function start() {
  for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i].tagName);
  }
}

const startArrow = () => {
  for (let i = 0; i < document.body.children.length; i++) {
    console.log(document.body.children[i].tagName);
  }
};

const printMousePosition = (event) => {
  console.log(event);
  console.log(event.clientX, event.clientY);
  console.dir(event.target);
};

const heading = document.querySelector("h1");
heading.addEventListener("click", printMousePosition);

//! most common events
//? mouse events

//click
const container = document.querySelector("div");
container.addEventListener("click", () => console.log("div clicked"));

//dblclick
container.addEventListener("dblclick", () => console.log("div double clicked"));

//mouseover
container.addEventListener("mouseover", () => console.log("div has mouseover"));

//mouseout
container.addEventListener("mouseout", () =>
  console.log("div has no mouseover")
);

//? keyboard events
//keypress
document.addEventListener("keypress", (event) => console.log(event.key));

//keydown
document.addEventListener("keyup", (e) => console.log(e));
