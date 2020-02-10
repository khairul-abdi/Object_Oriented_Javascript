class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.score = 0
  }

  login() {
    console.log(`${this.email}, just logged in`);
    return this
  }

  logout() {
    console.log(`${this.email}, just logged out`);
    return this
  }

  updateScore() {
    this.score++
    console.log(`${this.name}, score is now${this.score}`);
    return this
  }
} 

class Admin extends User {

  deleteUser(user) {
    users = users.filter(u => {
      return u.email != user.email
    })
  }
}

const userOne = new User('kabdi384@gmail.com', 'khairul Abdi')
const userTwo = new User('abdi@gmail.com', 'abdi')
const admin = new Admin('giryu@ninjas.com', 'giryu')

var users = [userOne, userTwo, admin]

// userOne.deleteUser(userTwo)  //Error: Uncaught TypeError: userOne.deleteUser is not a function 
// Dikarenakan bukan sebagai class Admin

admin.deleteUser(userTwo)
console.log(users);