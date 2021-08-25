/** @format */

// test cases: setting speed - 0, setting speed - 10, don't set speed (expect 0)

const Car = require("../src/js/Car");

describe("Car class", () => {
  test("constructor sets speed with parameter 0", () => {
    const car = new Car(0);
    expect(car.speed).toBe(0);
  });
  test("constructor set speed with parameter 10", () => {
    const car = new Car(10);
    expect(car.speed).toBe(10);
  });
  test("constructor set speed to 0 w/o argument", () => {
    const car = new Car();
    expect(car.speed).toBe(0);
  });
  test("functionality of accelerate method: starting at 0", () => {
    // Arrange: create a car with speed 0
    const car = new Car(0);
    // Act: calling the accelerate function
    car.accelerate();
    // Assert
    expect(car.speed).toBe(1);
  });
  test("functionality of accelerate method: call it twice", () => {
    // Arrange: create a car with speed 0
    const car = new Car(0);
    // Act: calling the accelerate function
    car.accelerate();
    car.accelerate();
    // Assert
    expect(car.speed).toBe(2);
  });
  test("if speed starts at 10", () => {
    // Arrange: create a car with speed starting at 10
    const car = new Car(10);
    // Act: calling the accelerate function
    car.accelerate();
    car.accelerate();
    // Assert
    expect(car.speed).toBe(12);
  });
});
