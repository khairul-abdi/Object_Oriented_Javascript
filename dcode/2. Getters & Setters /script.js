class Squere {
  constructor(_side) {
    this.side = _side
    this.numOfRequestsForArea = 0
  }

  get area() {
    this.numOfRequestsForArea++

    return this.side * this.side
  }

  set area(area) {
    this.side = Math.sqrt(area)
  }
}

let squere1 = new Squere(4)
console.log(squere1.area) //untuk mencari luas sisi menggunakan get

squere1.area = 25
console.log(squere1.side) //Untuk mencari panjang sisinya menggunakan set

console.log(squere1.area) 
console.log(squere1.area) 
console.log(squere1.area) 
console.log(squere1.area) 

console.log(squere1.numOfRequestsForArea)