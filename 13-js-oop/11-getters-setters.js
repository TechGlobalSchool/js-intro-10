class Account {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  setUsername(username) {
    if(username) this.username = username;
    else throw new Error('Username cannot be empty!!!');
  } 

  getUsername() {
    return this.username;
  }

  setPassword(password) {
    if(password.length >= 8) this.password = password;
    else throw new Error('Password should have of 8 characters at least!!!');
  }

  getPassword() {
    return this.password;
  }
}

const myAccount = new Account('TechGlobal', 'Test1234');

// Getting properties with get methods
console.log(myAccount.getUsername()); // TechGlobal
console.log(myAccount.getPassword()); // Test1234

// Setting properties with set methods
myAccount.setPassword('ABCD9999');
console.log(myAccount.getPassword()); // ABCD9999
