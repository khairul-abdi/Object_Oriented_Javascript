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

Admin.prototype.deleteUser = function(users, delUser) {
  let result = []
  for (let i = 0; i < users.length; i++) {
    if (users[i].email != delUser.email) {
      result.push(users[i])
    }
  }
  return result
}



const userOne = new User('khairul@gmail.com', 'khairul')
const userTwo = new User('abdi@gmail.com', 'abdi')
const admin = new Admin('ninja@gmail.com', 'ninja')

// console.log(userOne)
// console.log(admin)


console.log(admin.deleteUser([userOne, userTwo, admin], userTwo))



