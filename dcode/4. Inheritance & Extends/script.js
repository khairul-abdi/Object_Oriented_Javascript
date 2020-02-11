// Parent and Child Class
class Person {
  constructor(_name, _age) {
    this.name = _name
    this.age = _age
  }

  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old`)
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearOfExperience) {
    super(_name, _age)

    // Custom behaviour
    this.yearOfExperience = _yearOfExperience
  }

  code() {
    console.log(`${this.name} is coding`)
  }
}

let person1 = new Person('Jeff', 45)
let programmer1 = new Programmer('Dom', 56, 12)

// console.log(person1)
// console.log(programmer1)

const data = [
  new Programmer('abdi', 25, 12),
  new Programmer('khairul', 27, 4),
  new Person('ninja', 20)
]

function devOrNot(data) {
  for (let person of data) {
    // console.log(person)
    if (person.code) {
      person.code()
    } else {
      person.describe()
    }
  }
}

devOrNot(data)