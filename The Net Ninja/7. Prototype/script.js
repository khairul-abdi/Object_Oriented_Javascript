function User(email, name) {
  this.email = email
  this.name = name
}

User.prototype.login = function() {
  this.online = true
  console.log(`${this.name}, has logged in`);
}

User.prototype.logout = function() {
  this.online = false
  console.log(`${this.name}, has logged out`);
}

const userTwo = new User('abdi@gmail.com', 'abdi')
const userOne = new User('khairul@gmail.com', 'khairul')

console.log(userOne);
userTwo.login()
