function User(email, name) {
  this.email = email
  this.name = name
  this.online = false
}

User.prototype.login = function() {
  this.online = true
  console.log(`${this.name}, has logged in`);
}

User.prototype.logout = function() {
  this.online = false
  console.log(`${this.name}, has logged out`);
}

function Admin(...args) {
  User.apply(this, args)
  this.role = "super admin"
}

Admin.prototype = Object.create(User.prototype)

Admin.prototype.deleteUser = function(user) {
  users = users.filter(u => u.email != user.email)
}



const userOne = new User('khairul@gmail.com', 'khairul')
const userTwo = new User('abdi@gmail.com', 'abdi')
const admin = new Admin('ninja@gmail.com', 'ninja')

var users = [userOne, userTwo, admin]
// console.log(userOne)
// console.log(admin)

admin.deleteUser(userTwo)




