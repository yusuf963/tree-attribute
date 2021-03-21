function User(name, email) {
  this.name = name,
    this.email = email
  this.online = false
}


User.prototype.logIn = function () {
  this.online = true
  console.log(this.email, 'has loggedin')
}
User.prototype.logOut = function () {
  this.online = false
  console.log(this.email, 'has nlogged out')
}
const user = new User(this.name = 'Yusuf', this.email = 'hello@hello.com', this.online = 'true')
const user1 = new User(this.name = 'Sam', email = 'sam.com', this.online = true)

user1.logIn()