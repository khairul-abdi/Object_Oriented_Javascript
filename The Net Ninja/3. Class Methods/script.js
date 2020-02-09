class User {
  constructor(email, name) {
    this.email = email
    this.name = name
  }
  login() {
    console.log(`${this.email}, just logged in`);
  }
  logout() {
    console.log(`${this.email}, just loged out `);
  }
}

const userOne = new User('kabdi384@gmail.com', 'khairul')
const userTwo = new User('abdi@gmail.com', 'abdi')

userOne.login()
userTwo.logout()

