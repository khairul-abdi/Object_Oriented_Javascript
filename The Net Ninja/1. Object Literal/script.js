const userOne = {
  name: 'Khairul Abdi Dongoran',
  email: 'kabdi384@gmail.com',
  login() {
    console.log(this.email, ' has logged in');
  },
  logout() {
    console.log(this.email, ' has logged out');
  }
}

console.log(userOne.name);
userOne.login()
userOne.logout()
