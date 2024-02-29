class Cat {
    static species = "felis cactus";

    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    static meow() {
        return "Meow Meow Meow " + this.species;
    }
}