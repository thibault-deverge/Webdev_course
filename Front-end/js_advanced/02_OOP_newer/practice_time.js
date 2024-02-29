class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullname) {
        const [first, last] = fullname.split(" ")
        this.firstName = first;
        this.lastName = last;
    }
}

const user = new User("Colt", "Steel");