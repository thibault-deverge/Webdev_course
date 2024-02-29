// ============= PROTOTYPE CHAIN ==============
const grandparent = {
    greet() {
        return "Hi there!";
    }
};

const parent = {
    color: "purple",
    sing() {
        return "LA LA LA";
    },
    __proto__: grandparent
};

const child = {
    num: 2,
    __proto__: parent,
};

// ===================== INHERITANCE =======================
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    bark() {
        return `${this.name} says woof!`;
    }

    sleep() {
        return `${this.name} is sleeping!`
    }
}

class GuideDog extends Dog {
    constructor(name, breed, owner) {
        super(name, breed);
        this.owner = owner;
    }

    alert() {
        return `${this.name} alerts you to danger. Good dog!`;
    }
}

const chaco = new GuideDog("Chaco", "Labrado", "Maggie");