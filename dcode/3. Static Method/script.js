class Rectangle {
  constructor(_width, _height) {
    this.width = _width
    this.height = _height
  }

  static equals(a, b) {
    return a.width * a.height === b.width * b.height
  }

  static isValidDimensions(width, height) {
    return width === height
  }
}

let rectangle1 = new Rectangle(8, 5)
let rectangle2 = new Rectangle(8, 5)

console.log(Rectangle.equals(rectangle1, rectangle2))

console.log(Rectangle.isValidDimensions(5, 7))
