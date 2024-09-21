const { MouseActions } = require('../15-js-modules/MouseActions.js');

// static methods
MouseActions.click();

// non-static methods
const ma = new MouseActions();
ma.rightClick();