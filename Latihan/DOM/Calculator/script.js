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

  get result() {
    return this._number;
  }
}


const operation = new Calculator(0)
console.log(operation.addition(8).subtraction(1).result);