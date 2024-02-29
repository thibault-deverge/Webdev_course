// BASIC EXAMPLE
// async function hello() {

// }

// const sing = async () => {
//     throw "ho nooo";
//     return 'LA LA LA LA LA';
// }

// sing()
// .then((data) => {
//     console.log("Promise resolve with : ", data);
// })
// .catch(err => {
//     console.log("Oh noo : ", err);
// })

// BETTER EXAMPLE
// const login = async (username, password) => {
//     if (!username || !password) 
//         throw 'Missing Credentials'
//     if (password === 'corgifeetarecute') 
//         return 'Welcome'
//     throw 'Invalid password'
// }

// login('aksdsds',"corgifeetarecute")
// .then(msg => {
//     console.log("LOGIN : ", msg);
// })
// .catch(err=> {
//     console.log("Error: ", err);
// })