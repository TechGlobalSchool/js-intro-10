/**
 * Events - simply an object
 * 
 * 
 * addEventListener()
 *  - type of an event: click, focus, change, input etc
 *  - callback: action to take. This takes event as an argument
 * 
 * removeListener()
 *  - simply removes event from an elemnt
 */

// click example
const clickBtn = document.getElementById('clickBtn');

clickBtn.addEventListener('click', (event) => {
  console.log('Button clicked!');
  console.log('event', event);
  console.log('Element that is clicked:', event.target);
});


// mouseover example
const boxEl = document.getElementById('box');

boxEl.addEventListener('mouseover', (event) => {
  console.log('Mouse is moving')
  console.log(event.screenX);
  console.log(event.screenY);
})


// removeListener example
const activateBtn = document.getElementById('activate');
const deactivateBtn = document.getElementById('deactivate');
const bodyEl = document.querySelector('body');

let toggle = false;

function changeBackgroundColor(event) {
  toggle = !toggle;
  bodyEl.style.backgroundColor = toggle ? 'white' : 'yellow';
}

activateBtn.addEventListener('click', changeBackgroundColor)

deactivateBtn.addEventListener('click', (event) => {
  activateBtn.removeEventListener('click', changeBackgroundColor)
})

// change and input event examples
// change: waits until user finishes typing
// input: listens to every letter

const inputEl = document.querySelector('input');

// inputEl.addEventListener('change', (event) => {
//   console.log(event.target.value); // value of an input, whatever user typed
// })

inputEl.addEventListener('input', (event) => {
  console.log(event.target.value); // value of an input, whatever user typed
})


