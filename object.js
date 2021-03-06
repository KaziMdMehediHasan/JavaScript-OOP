// let userOne = {
//   email: "ryu@ninjas.com",
//   name: "Ryu",
//   login() {
//     console.log(this.email, "has logged in");
//   },
//   logout() {
//     console.log(this.email, "has logged out");
//   },
// };

class User {
  constructor(name, email) {
    (this.name = name), (this.email = email), (this.score = 0);
  }
  login() {
    console.log(this.email, "has logged in");
    return this;
  }
  logout() {
    console.log(this.email, "has logged out");
    return this;
  }
  updateScore() {
    this.score++;
    console.log(this.email, "score is now", this.score);
    return this;
  }
}

// class inheritance
class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email !== user.email;
    });
  }
}

let userOne = new User("Ryu", "ryu@ninjas.com");
let userTwo = new User("Yoshi", "yoshii@mariokorp.com");
let admin = new Admin("Shaun", "shaun@ninjas.com");
let users = [userOne, userTwo, admin];

admin.deleteUser(userOne);
console.log(users);

userOne.login();

userTwo.logout();
//the new keyword
//-   creates a new empty object {}
//- sets the value of "this" to be the new empty object
//- calls the constructor method

// method chaining

userOne.updateScore().updateScore().logout();
