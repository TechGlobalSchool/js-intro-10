const boxEl = document.getElementById('box');
console.log('Style object', boxEl.style); // CSSStyleDeclaration

// CSSStyleDeclaration is an object that contains all CSS values to that element/node
// We can update its values that way change its styles

boxEl.style.border = '2px solid gray';
boxEl.style.backgroundColor = 'lightgray';
boxEl.style.color = 'red';

// Loop
const boxes = document.querySelectorAll('.box2');

for (let i = 0; i < boxes.length; i++) {
  const element = boxes[i];
  element.style.backgroundColor = 'aqua';
  element.style.padding = '40px';
  element.style.border = '1px solid'
}
