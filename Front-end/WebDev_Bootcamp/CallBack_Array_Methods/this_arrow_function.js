const person = {
    firstName: "Viggo",
    lastName: "Mortensen",

    // Work fine - this = current object
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Wrong - this = window object
    fullName2: () =>{
        return `${this.firstName} ${this.lastName}`;
    },

    // Wrong as setTimeout is a global function so do this
    shoutName: function() {
        setTimeout(function() {
            console.log(this.fullName());
        }, 3000)
    },

    // Work because even inside setTimeout, we use arrow function to came back to shoutName which is a method from 'person' object
    shoutName2: function() {
        setTimeout(() => {
            console.log(this.fullName());
        }, 3000)
    }
}