// SIMPLE EXAMPLE
// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("Resolved!", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log("Error ", e);
//     })

// SECOND EXAMPLE WITH TWO REQUESTS
// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         console.log("Resolved!", res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch("https://swapi.dev/api/people/2")
//     })
//     .then(res => {
//         console.log("Second request resolve");
//         return res.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(e => {
//         console.log("Error ", e);
//     })

const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1");
        const data = await res.json();
        console.log(data);

        const res2 = await fetch("https://swapi.dev/api/people/2");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) {
        console.log("Error: ", e);    
    }
}

loadStarWarsPeople();