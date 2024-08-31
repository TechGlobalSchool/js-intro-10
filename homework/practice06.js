/*
Task01

Requirement:
Write a function named as firstPos() which takes an 
array as an argument and returns the first positive 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one positive element in 
the given array.
 
Examples:
firstPos([0, 3, -9,  5, 8])    -> 3
firstPos([-2, 0, -7, 10, -5])  -> 10
firstPos([1, 2, 3, -2])        -> 1
*/
const firstPos = arr => arr.filter(num => num > 0)[0]
// const firstPos - arr => {
//      for(let num of arr){
//         if(num > 0) return num;
//     }
// }
   
console.log(firstPos([0, 3, -9,  5, 8]))
console.log(firstPos([-2, 0, -7, 10, -5]))
console.log(firstPos([1, 2, 3, -2]))


/*
Task02

Requirement:
Write a function named as lastNeg() which takes an 
array as an argument and returns the last negative 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
NOTE: Assume there is at least one negative element in 
the given array.
 
Examples:
lastNeg([0, 3, -9,  5, 8])    -> -9
lastNeg([-2, 0, -7, 10, -5])  -> -5
lastNeg([1, 2, 3, -2])        -> -2
lastShortest(["white", "yellow", "brown"])  ->  "brown"
*/
const lastNeg = arr => {
    arr = arr.filter(num => num < 0)
    return arr[arr.length-1]
}
console.log(lastNeg([0, 3, -9,  5, 8]))
console.log(lastNeg([-2, 0, -7, 10, -5]))
console.log(lastNeg([1, 2, 3, -2]))

/*
Task03

Requirement:
Write a function named as firstLongest() which takes 
an array as an argument and returns the longest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the longest count of 
characters, always return the first occurrence.
 
Examples:
firstLongest(["red", "blue", "yellow", "white"])  -> "yellow"
firstLongest(["Apple", "Banana", "Orange"])  -> "Banana"
firstLongest(["purple", "yellow", "orange"])  -> purple
lastShortest(["white", "yellow", "brown"])  ->  "yellow"
*/

const firstLongest = arr => {
    let largestWord = '';

    for(let word of arr){
        if(word.length > largestWord.length) largestWord = word
    }

    return largestWord;
}

console.log(firstLongest(["red", "blue", "yellow", "white"]))
console.log(firstLongest(["Apple", "Banana", "Orange"]))
console.log(firstLongest(["purple", "yellow", "orange"]))
console.log(firstLongest(["white", "yellow", "brown"]))


/*
Task04

Requirement:
Write a function named as lastShortest() which takes 
an array as an argument and returns the shortest 
element when invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only string elements.
NOTE: If there are 2 element having the shortest count 
of characters, always return the last occurrence.
 
Examples:
lastShortest(["red", "blue", "yellow", "white"])  ->  "red"
lastShortest(["Apple", "Banana", "Mango"])  ->  "Mango"
lastShortest(["white", "yellow", "brown"])  ->  "brown"
*/

const lastShortest = arr => {
    let lastShortest = arr[arr.length - 1]

    for(let i = arr.length - 2; i >= 0; i--){
        if(arr[i].length < lastShortest.length) lastShortest = arr[i]
    }

    return lastShortest
}

console.log(lastShortest(["red", "blue", "yellow", "white"]))
console.log(lastShortest(["Apple", "Banana", "Mango"]))
console.log(lastShortest(["white", "yellow", "brown"]))

/*
Task05
Requirement:
Write a function named as max() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
max([0, 3, -9,  5, 8])  -> 8
max([-2, 0, -7, 10, -5])  -> 10
max([1, 2, 3, -2])        -> 3
*/

// const max = arr => arr.sort((a, b) => a - b)[arr.length - 1]

const max = arr => {
    let largestNumber = Number.MIN_VALUE;

    for(let num of arr){
        if(num > largestNumber) largestNumber = num
    }
    return largestNumber
}

console.log(max([0, 3, -9,  5, 8]))
console.log(max([-2, 0, -7, 10, -5]))
console.log(max([1, 2, 3, -2]))


/*
Task06
Requirement:
Write a function named as min() which takes an array 
as an argument and returns the greatest element when 
invoked.
NOTE: Assume you will not be given an empty array, 
and it contains only number elements.
 
Examples:
min([0, 3,  5, 8])        -> 0
min([-2, 0, -7, 10, -5])  -> -7
min([1, 2, 3, 15])        -> 1

*/

const min = arr => {
    let smallest = arr[0];

    for(let num of arr){
        if(num < smallest) smallest = num;
    }

    return smallest;
}


console.log(min([0, 3,  5, 8]))
console.log(min([-2, 0, -7, 10, -5]))
console.log(min([1, 2, 3, 15]))
/*
Task07

Write a function named as commonElements() which takes 2 arrays 
as arguments and returns the all the matching elements from the 
both arrays when invoked.
NOTE: Assume you will not be given an empty array.
 
Examples:
commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ])  -> [ 20, 50, 70 ] 
commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])  -> [ ] 
commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ])  -> ["abc" ]
*/
const commonElements = (arr1,arr2) => {
    let arrCommons = []

    for(let ele of arr1){
        if(arr2.includes(ele) && !arrCommons.includes(ele)) arrCommons.push(ele)
    }

    return arrCommons;
}
console.log(commonElements([ 10, 20, 30, 50, 70 ], [ 20, 50, 70 ]));
console.log(commonElements([ 30, 50, 70 ], [ 20, 100, 300 ])); 
console.log(commonElements([ "30", "abc", "hi" ], [ 30, "Hi", "abc" ])); 
console.log(commonElements([ 1,2,2,3], [2,3,4,5]));
