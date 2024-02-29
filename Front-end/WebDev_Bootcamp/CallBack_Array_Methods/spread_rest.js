
/*
**** SPREAD IN FUNCTION CALL ****
const nums = [43, 25, 4, 64, 83, 56, 25];
console.log(Math.max(...nums));
console.log(Math.min(...nums));
console.log(..."hello");
*/

/*
**** SPREAD W/ ARRAY LITTERAL
const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];
const allPets = [...cats, ...dogs, 'Speedy];
*/

/*
**** SPREAD WITH OBJECTS ****
const feline = { legs: 4, family: 'felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = {...feline, ...canine};
console.log(catDog);

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
};

const newUser = {...dataFromForm, id: 2345, isAdmin: false};
*/

/*
**** REST PARAMS ****
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold goes to: ${gold}`);
    console.log(`Silver goes to: ${silver}`);
    console.log(`Thanks to everyone else: ${everyoneElse}`);
}
*/
