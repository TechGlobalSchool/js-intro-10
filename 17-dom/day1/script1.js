console.log('This is js file');

// test/qa, dev, prod(no error) -> hot fix

// client, server

/**
 * Window 
 * */ 
console.log('window', window); // window in client env is an object
console.log(typeof window); // object

// In server side window is undefined

/**
 * Alert
 */

// window.alert('Hi');
// const alertAns = alert('How are you?');
// console.log(alertAns); // undefined


/**
 * Prompt
 */

// const ans = prompt('How are you today?');
// console.log(ans); // String, null, empty string

/**
 * Confirm
 */

// const confirmAns = confirm('Are you ready to enter?');
// console.log(confirmAns); // false or true


/**
 * innerHeight and innerWidth
 */

console.log(innerHeight); // number
console.log(innerWidth); // number


/**
 * LocalStorage
 * - setItem()
 * - getItem()
 * - removeItem()
 * - clear()
 */

localStorage.setItem('username', 'tg20');

const username = localStorage.getItem('username');
console.log(username);

localStorage.removeItem('username');

localStorage.setItem('username2', 'tg2020');
localStorage.setItem('username3', 'tg202020');

localStorage.clear()

