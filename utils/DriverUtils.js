class Driver {
  static setDriver() {
    console.log('SET DRIVER');
  }

  static getDriver() {
    console.log('GET DRIVER');
  }

  static quitDriver() {
    console.log('QUIT DRIVER');
  }

  aFunction() {
    console.log('A FUNCTION');
  }
}

module.exports.Driver = Driver;