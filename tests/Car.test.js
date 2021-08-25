// test cases: setting speed - 0, setting speed - 10, don't set speed (expect 0)

const Car = require("../src/js/Car");

describe("Car class", () => {
  test("constructor sets speed with parameter", () => {
    const car = new Car(0);
    expect(car.speed).toBe(0);
  });
});
