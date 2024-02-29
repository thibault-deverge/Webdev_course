const person = {
    name: "Conan",
    city: "Los Angeles",
    sing: function() {
        console.log("This is: ", this);
        return `${this.name} sings LA LA LA`;
    }
}

class Cat {
    constructor(firstName) {
        this.firstName = firstName;
    }

    static getRandomCat() {
        console.log("this is:", this);
    }

    dance(style = "tango") {
        return `Meow, I am ${this.firstName}` + ` and I like to ${style}`;
    }
}

function whatIsThis() {
    console.log("The value of this is:", this);
}

const obj = {
    color: "purple",
    age: 2,
    whatIsThis: whatIsThis,
}

const lisa = {
    name: "Lisa",
    city: "Paris"
};