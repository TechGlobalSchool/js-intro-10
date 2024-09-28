// Recap
// Ways of accessing elements in DOM
// by id: getElementById()
// by class: getElementsByClassName()
// by tag name: getElementsByTagName()
// universal: querySelector(), querySelectorAll()

/**
 * TRAVERSING THE DOM
 */

const parentEl = document.getElementById('parent');

const child1El = document.getElementById('child1');
const child2El = document.getElementById('child2');
const child3El = document.getElementById('child3');

/* --- 1. Node only */

// parentNode
console.log(child1El.parentNode); // parent div
console.log(parentEl.parentNode); // body

// childNodes
const childNodes = parentEl.childNodes;
console.log(childNodes); // NodeList(7) [text, p#child1, text, p#child2, text, p#child3, text]

// firstChild, lastChild
console.log('First Child', parentEl.firstChild) // text
console.log('Last Child', parentEl.lastChild) // text

// previousSibling, nextSibling
console.log('Previous sibling to child1', child1El.previousSibling); // text
console.log('Next sibling to child 1', child1El.nextSibling); // text

/* --- 2. Elements only */

// parentElement
console.log('Parent Element of child 1', child1El.parentElement); // parent div
console.log('Parent Element of parent div', parentEl.parentElement); // body

// children
console.log('Children of parent div', parentEl.children); // HTMLCollection(3) [p#child1, p#child2, p#child3, child1: p#child1, child2: p#child2, child3: p#child3]

// firstElementChild, lastElementChild
console.log('First Element Child', parentEl.firstElementChild) // child 1
console.log('Last Element Child', parentEl.lastElementChild) // child 3

console.log('Child 2', child1El.nextElementSibling); // child 2
console.log('Child 2', child3El.previousElementSibling); // child 2

