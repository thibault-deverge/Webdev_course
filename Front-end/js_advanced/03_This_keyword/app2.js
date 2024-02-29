const ringo = {
    firstName: "Ringo",
    greet: function(greeting) {
        console.log(`${this.firstName} says ${greeting}!`);
    }
};

const george = {
    firstName: "George",
    lastName: "Harrison"
};

const nums = [1,5,2,99,3,5];

function maximum() {
    console.log(arguments);
    return Math.max.apply(null, arguments);
}