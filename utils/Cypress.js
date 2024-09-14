class Cypress {
  static visit(url) {
    setTimeout(() => {
      console.log(`${url} visited!`);
    }, 1000);
  }

  static login(username, password) {
    setTimeout(() => {
      console.log(`Logged in with ${username} ${password}!`);
    }, 500);
  }

  static validateLoginMessage(text) {
    setTimeout(() => {
      console.log(`${text} validated!`)
    }, 250);
  }

  // CALLBACKS
  static visit1(url, callback) {
    setTimeout(() => {
      console.log(`${url} visited!`);
      callback();
    }, 1000);
  }

  static login1(username, password, callback) {
    setTimeout(() => {
      console.log(`Logged in with ${username} ${password}!`);
      callback();
    }, 500);
  }

  static validateLoginMessage1(text) {
    setTimeout(() => {
      console.log(`${text} validated!`)
    }, 250);
  }

  // PROMISES
  static visit2(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${url} visited!`);
        resolve();
      }, 1000);
    });
  }

  static login2(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Logged in with ${username} ${password}!`);
        resolve();
      }, 500);
    });
  }

  static validateLoginMessage2(text) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${text} validated!`);
        resolve();
      }, 250);
    });
  }
}

module.exports.Cypress = Cypress;