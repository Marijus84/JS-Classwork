/*
Add functionality in JS for slider to: 
+0. Make initial slider functionality - slide images; 
+1. Toolbar button hides/shows toolbar; 
+2. Back button shows rewinds to previous img; 
+3. Pause/play button changes icon and stops/starts carousel; 
+4. Forward button takes to next image immediately. 
+5. Shuffle button takes to one random image. And after that images goes in order. (Not random all the time, but just one image). 
6. Add functionality to use .fade class to make fade in, fade out between slides. 
*/

//Your JS goes here

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
];

let imageIndex = 0;
let pause = false;
let intervalID = setInterval(changeImage, 2000);

const imageElement = document.querySelector("img");
const toolbar = document.querySelector("#toolbar");
const previousButton = document.querySelector("#slider-previous");
const playPauseIcon = document.querySelector("#slider-toggle i");
const pauseButton = document.querySelector("#slider-toggle");
const forwardButton = document.querySelector("#slider-next");
const shuffleButton = document.querySelector("#slider-random");

toolbar.addEventListener("click", toggleTools);
previousButton.addEventListener("click", showPrevious);
pauseButton.addEventListener("click", togglePause);
forwardButton.addEventListener("click", changeImage);
shuffleButton.addEventListener("click", shuffleImage);
imageElement.addEventListener("load", fadeImage);

imageElement.src = images[imageIndex];
playPauseIcon.classList.add("fa-pause");
playPauseIcon.classList.remove("fa-play");

function changeImage() {
  imageIndex++;
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }
  imageElement.src = images[imageIndex];
}

function toggleTools() {
  document.querySelector("nav").classList.toggle("hide");
}

function showPrevious() {
  clearInterval(intervalID);
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = images.length - 1;
  }
  imageElement.src = images[imageIndex];
  intervalID = setInterval(changeImage, 2000);
}

function togglePause() {
  playPauseIcon.classList.toggle("fa-pause");
  playPauseIcon.classList.toggle("fa-play");
  pause = !pause;
  if (pause) {
    clearInterval(intervalID);
  } else {
    intervalID = setInterval(changeImage, 2000);
  }
}

function shuffleImage() {
  imageIndex = Math.floor(Math.random() * images.length);
  imageElement.src = images[imageIndex];
}

function fadeImage() {
  imageElement.classList.toggle("fade");
}

//! task - fix interval bug on forward and shuffle;
