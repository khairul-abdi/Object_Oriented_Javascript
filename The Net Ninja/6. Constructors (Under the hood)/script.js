function User(email, name) {
  this.email = email
  this.name = name
  this.online = false
  this.login = function() {
    console.log(`${this.email}, has logged in`);
  }
}

const userOne = new User('khairul@gmail.com', 'khairul')
const userTwo = new User('abdi@gmail.com', 'abdi')

console.log(userOne);
userTwo.login()
