const Car = require("./Car");

let car = new Car(0);

const speedOutput = document.getElementById("speed");
const accelerateButton = document.getElementById("accelerate");
const brakeButton = document.getElementById("brake");

function updateDisplay() {
  speedOutput.innerText = car.speed;
}

accelerateButton.addEventListener("click", () => {
  car.accelerate();
  updateDisplay();
});
brakeButton.addEventListener("click", () => {
  car.brake();
  updateDisplay();
});

updateDisplay();