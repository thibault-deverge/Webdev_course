class Cat {

    static numOfCats = 0;
    name;
    breed;
    numLegs = 4;
    hasTail = true;

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        Cat.numOfCats++;
    }

    amputate() {
        this.numLegs -= 1;
    }

}

const blue = new Cat("Blue", "Siamois");

// -------------------------------

class Circle2 {
    #radius;
    constructor(radius) {
        this.#radius = radius;
    }

    get radius() {
        return this.#radius;
    }
}

const myCircle = new Circle2(25);
console.log(myCircle.radius);

// -----------------------------------
class MyClass {
    #privateMethod() {
        console.log("Private Method called");
    }

    publicMethod() {
        this.#privateMethod();
    }
}

const myClass = new MyClass();
myClass.publicMethod();