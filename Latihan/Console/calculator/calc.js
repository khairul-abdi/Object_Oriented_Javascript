class Calculator {
  constructor(number) {
    this._number = number
  }

  addition(number) {
    this._number += number
    return this
  }

  subtraction(number) {
    this._number -= number
    return this
  }

  dividing(number) {
    this._number /= number
    return this
  }

  multiply(number) {
    this._number *= number
    return this
  }
  get result() {
    return this._number;
  }
}

const operation = new Calculator(1)
// const operation = new Calculator(0)
// console.log(operation.addition(5).subtraction(1).result);
console.log(operation.dividing(5).multiply(10).result);