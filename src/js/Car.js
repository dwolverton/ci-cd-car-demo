/** @format */

class Car {
  // set speed; if no argument, set speed to 0
  constructor(speed = 0) {
    this.speed = speed;
  }

  // add 1 to speed
  accelerate() {
    this.speed++;
  }

  // subtract 1 from speed, but never go below 0
  brake() {
    if (this.speed === 0) {
    // do nothing here  
    } else {
      this.speed--;
    }
  }
}

module.exports = Car;
