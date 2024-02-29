const conan = {
    name: "Conan",
    city: "Los Angeles",
    sing: function() {
        console.log("this is :", this);
        console.log(`${this.name} sings LA LA LA`);
    },
};

const lisa = {
    name: "lisa",
    city: "Paris"
};

const lisaSing = conan.sing.bind(lisa);

// ======================================
function applySalesTax(taxRate, price) {
    return price + price * taxRate;
}

const applyCASalesTax = applySalesTax.bind(null, 0.0725);
const applySFSalesTax = applySalesTax.bind(null, 0);
const applyNYSalesTax = applySalesTax.bind(null, 0.14);

// ====================================
function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);
const alwaysNine = multiply.bind(null, 3, 3);

// ===================================
const btn = document.querySelector("#click-me");
btn.addEventListener("click", conan.sing.bind(conan));

//  =================================
class Counter {
    constructor(startingNum = 0, incrementAmt = 1) {
        this.count = startingNum;
        this.incrementAmt = incrementAmt;
    }

    incrementAndPrint() {
        console.log(this.count);
        this.count += this.incrementAmt;
    }

    start() {
        setInterval(this.incrementAndPrint.bind(this), 1000)
    }
}

const counter = new Counter(100, 500);
// counter.start();

// ==============================
class Cat {
    constructor(firstName) {
        this.firstName = firstName;
    }

    superGreet() {
        console.log(`#1. I am ${this.firstName}`);

        setTimeout(function () {
            console.log(`#2. I am ${this.firstName}`);
        }, 500);

        setTimeout(() => {
            console.log(`#3. I am ${this.firstName}`);
        }, 500);
    }
}

let kitty = new Cat("Kitty");
kitty.superGreet();