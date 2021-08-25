/** @format */

class Car {
  // set speed; if no argument, set speed to 0
  constructor(speed = 0) {
    this.speed = speed;
  }

  // add 1 to speed
  accelerate() {}

  // subtract 1 from speed, but never go below 0
  brake() {}
}

module.exports = Car;
