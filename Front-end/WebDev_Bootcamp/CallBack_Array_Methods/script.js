/*
**** DESTRUCTURING ARRAY ****
const scores = [929321, 899341, 888336, 772739, 543671, 111934];
const [gold, silver, bronze, ...everyoneElse] = scores;
*/

// **** DESTRUCTURING OBJECT ****
const user = {
    email: 'harvey@gmail.com',
    password: '123456',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an american politician',
    city: 'San Fransisco',
    state: 'California'
};

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzales',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
};

// const {firstName, lastName, email, bio} = user;
// const { born: birthYear, death: deathYear } = user;

// const {city, state, died = false} = user2;

/*
**** DESTRUCTURING PARAM ****
*/
function fullName(user) {
    const {firstName, lastName} = user;
    return `${firstName} ${lastName}`;
}

function fullName2({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}