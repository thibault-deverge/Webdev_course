
/*
***** Higher order function ***** 

***** TAKING FUNCTION AS ARGUMENTS *****
function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

const greet = function() {console.log("Hi")};

function callTwice(func) {
    func();
    func();
}

callTwice(rollDice);

***** RETURNING FUNCTIONS *****
function makeMysteryFunc() {
    const rand = Math.random();

    if (rand > 0.5) {
        return function() {
            console.log("Congrat, I'm a good function");
        }
    }
    else {
        return function() {
            alert("You have been infected by a computer virus");
        }
    }
}

function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}

const isKid = makeBetweenFunc(5, 19);
const isAdult = makeBetweenFunc(20, 64);
const isSenior = makeBetweenFunc(64, 120);

console.log(isSenior(35));
*/

/* ***** METHODS *****
const myMath = {
    PI: 3.14,

    square(num) {
        return num * num;
    },

    cube(num) {
        return num * num * num;
    }
}

const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "scottish fold",

    meow() {
        console.log(`${this.name} says MEOW MEOW`);
    }
}
const meow2 = cat.meow;
*/

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (error) {
        console.log(error);
        console.log("Please pass a string"); 
    }
}

yell(4);
yell("string ");