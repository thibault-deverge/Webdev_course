// ========= OLD WAY BEFORE CLASS ===========
// constructor function to generate object
// function Dog(name, breed) {
//     console.log("this is: ", this);
//     this.name = name;
//     this.breed = breed;

//     this.bark = function() {
//         return `${this.name} says woof!`;
//     }
//     this.sleep = function() {
//         return `${this.name} is sleeping!`
//     }
// }

// function User(username, email) {
//     this.username = username;
//     this.email = email;
//     this.isAdmin = false;    
// }


// =============== PROTOTYPE ================
// class Dog {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }

//     bark() {
//         return `${this.name} says woof!`;
//     }

//     sleep() {
//         return `${this.name} is sleeping!`
//     }
// }

// const tommy = new Dog("Tommy", "cocker");
// const sam = new Dog("Sam", "labrador");

// const myObj = {
//     color: "purple",
//     score: 99,
//     greet() {
//         console.log("HIII!");
//     }
// };

// ============= USING PROTOTYPE OLDER WAY =======
function Dog(name, breed) {
    console.log("this is: ", this);
    this.name = name;
    this.breed = breed;
}

Dog.prototype.bark = function() {
    return `${this.name} says woof!`;
}

Dog.prototype.sleep = function () {
    return `${this.name} is sleeping!`
}

const tommy = new Dog("tommy", "cocker");