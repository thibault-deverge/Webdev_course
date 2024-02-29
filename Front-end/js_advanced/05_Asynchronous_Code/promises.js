const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// Using Promise alone doesn't resolve callback hell
// fetch(`${BASE_URL}/1`)
//     .then(res1 => {
//         console.log("response1", res1);
//         fetch(`${BASE_URL}/2`)
//             .then(res2 => {
//                 console.log("response2", res2);
//                 fetch(`${BASE_URL}/3`)
//                     .then(res3 => {
//                         console.log("response3", res3);
//                         fetch(`${BASE_URL}/4`)
//                             .then(res4 => {
//                                 console.log("response4", res4);
//                             })
//                             .catch(err => console.log("ERRR!", err));
//                     })
//                     .catch(err => console.log("ERRR!", err));
//             })
//             .catch(err => console.log("ERRR!", err));
//     })
//     .catch(err => console.log("ERRR!", err));

// Now with Promise Chaining:
fetch(`${BASE_URL}/1`)
    .then(res1 => {
        console.log("response1", res1);
        return fetch(`${BASE_URL}/2`);
    })
    .then(res2 => {
        console.log("response2", res2);
        return fetch(`${BASE_URL}/3`);
    })
    .then(res3 => {
        console.log("response3", res3);
        return fetch(`${BASE_URL}/4`);
    })
    .then(res4 => {
        console.log("response4", res4);
    })
    .catch(err => {
        console.log("error: ", err);
    })