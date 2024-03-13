
// ***** Array.prototype.at() *****
const nums = [3,4,56,33,54,23,75,43,13];

for (let i = 1; i <= nums.length; i++){
    console.log(nums.at(`-${i}`))
}

// ***** ReplaceAll() *****
const str = "I really love cats. My cat is such an amazing pet. She loves to cuddle with me and play. What a great cat. cat. cat. cat";

console.log(str.replaceAll('cat', 'dog'))

// ***** Logical Assignment Operators *****
const todo = {
    priority: "",
    task: "Finish Editing Course"
};

// Both do same: check and if not truthy set it to a value 
todo.priority || (todo.priority = 'medium')
todo.priority ||= 'MEDIUM'

// ***** Promise.any() *****
const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

Promise.any([
    // fetch(`http://nope.nope`),
    fetch(`${BASE_URL}/2`),
    fetch(`${BASE_URL}/3`),
    fetch(`${BASE_URL}/4`),
    fetch(`${BASE_URL}/5`),
    fetch(`${BASE_URL}/6`),
])
    .then(firstToFinish => console.log("SUCESS", firstToFinish))
    .catch(err => console.log("ERROR", err))