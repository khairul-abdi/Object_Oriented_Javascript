// class User {
//   constructor(email, name){
//     this.email = 'kabdi384@gmail.com'
//     this.name = 'khairul'
//   }
// }

// const dataOne = new User()
// console.log(dataOne);



class User {
  constructor(email, name) {
    this.email = email
    this.name= name 
  }
}

const dataOne = new User('kabdi384@gmail.com', 'khairul')
const dataTwo = new User('abdi@gmail.com', 'abdi')

console.log(dataOne);
console.log(dataTwo);