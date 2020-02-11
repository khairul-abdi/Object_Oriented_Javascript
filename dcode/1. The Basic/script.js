/*
Class --> Object

Instance Properties: what they have
  - name
  - age
  - height
  - etc

Instance Methods: what they do
  - talk
  - run
  -jump
  - etc
*/

class Rectangle {
  // Setup
  constructor(_width, _height, _color) {
    
    this.width = _width
    this.height = _height
    this.color = _color
    
    console.log(`The Rectangle is being created by 
width\t: ${this.width}, 
height\t: ${this.height}, 
color\t: ${this.color}
    `)

  }

  getArea() {
    return `Area of rectangle is ${this.width * this.height}`
  }

  printDescription() {
    console.log(`I am rectangle of ${this.width} x ${this.height} and I am ${this.color}`)
  }
}

let myRectangle1 = new Rectangle(5, 3, 'blue')
let myRectangle2 = new Rectangle(10, 5, 'red')

console.log(myRectangle1.getArea())
console.log(myRectangle2.getArea())

myRectangle1.printDescription()
myRectangle2.printDescription()