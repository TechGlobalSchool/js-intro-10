const names = [ 'Alex', 'James', 'Jane' ];

let namesString1 = names.toString();

console.log(names); // [ 'Alex', 'James', 'Jane' ]
console.log(namesString1); // Alex,James,Jane

console.log(names.length); // 3
console.log(namesString1.length); // 15


let namesString2 = names.join();
let namesString3 = names.join(' ');
let namesString4 = names.join(' - ');

console.log(namesString2); // Alex,James,Jane
console.log(namesString3); // Alex James Jane
console.log(namesString4); // Alex - James - Jane


