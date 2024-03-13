// Simple exemple to transform a Node list to an array
const buttons = document.querySelectorAll('button');
const btnArray = Array.from(buttons);

// Passing a mapping function
const alphabets = ['a', 'b', 'c', 'd', 'e'];
const upper_alphabets = Array.from("abcd", x => x.toUpperCase());
console.log(upper_alphabets);

// Generate array of a certain length
const generateArr = Array.from({length: 10}, el => true)
console.log(generateArr);

const sequence = Array.from({length: 100}, (el, idx) => idx + 1);
console.log(sequence);