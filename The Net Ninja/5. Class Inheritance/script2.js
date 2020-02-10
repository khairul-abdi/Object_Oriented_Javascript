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

  deleteUser(lists, user) {
    let result = []
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].email != user.email) {
        result.push(lists[i])
      }
    }    
    return result
  }
}

const userOne = new User('kabdi384@gmail.com', 'khairul Abdi')
const userTwo = new User('abdi@gmail.com', 'abdi')
const admin = new Admin('giryu@ninjas.com', 'giryu')

console.log(admin.deleteUser([userOne, userTwo, admin], userTwo))
