const { Driver } = require('../utils/DriverUtils.js');

Driver.setDriver();
Driver.getDriver();
Driver.quitDriver();

const driver = new Driver();
driver.aFunction();