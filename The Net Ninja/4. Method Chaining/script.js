class User {
  constructor(email, name) {
    this.email = email
    this.name = name
    this.score = 0
  }

  logIn() {
    console.log(`${this.email}, just logged in`);
    return this
  }

  logOut() {
    console.log(`${this.email}, just logged out`);
    return this
  }

  updateScore() {
    this.score++
    console.log(`${this.name}, score is now ${this.score}`);
    return this
  }
}

const userOne = new User('kabdi384@gmail.com', 'khairul')
const userTwo = new User('abdi@gmail.com', 'abdi')

userOne.logIn().updateScore().updateScore().logOut()
