// Set timeout
console.log("Helloooo");

setTimeout(() => {
    console.log("Are you still here ?");
}, 3000);

console.log("Goodbye");

// Set interval
console.log(Math.random());

const id = setInterval(() => {
    console.log(Math.random());
}, 1500);

clearInterval(id);