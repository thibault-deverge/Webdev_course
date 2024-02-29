const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// ========= EXEMPLE ASYNC AWAIT ===============
async function getFirstPokemon() {
    const result = await fetch(`${BASE_URL}/1`);
    console.log(result);
}

async function getFourPokemon() {
    try {
        const res1 = await fetch(`${BASE_URL}/1`);
        console.log(res1);

        const res2 = await fetch(`${BASE_URL}/2`);
        console.log(res2);

        const res3 = await fetch(`${BASE_URL}/3`);
        console.log(res3);

        const res4 = await fetch(`${BASE_URL}/4`);
        console.log(res4);
    } catch (error) {
        console.log("Error", error);    
    }
}

async function getTenPokemon() {
    try {
        for (let i = 1; i <= 10; i++) {
            const res = await fetch(`${BASE_URL}/${i}`);
            console.log(res);
        }
    } catch (error) {
        console.log("error: ", error)
    }
}

// ============ Promise.all() ==============
const lotsOfFetchCalls = [
    fetch(`${BASE_URL}/1`),
    fetch(`${BASE_URL}/2`),
    fetch(`${BASE_URL}/3`),
    fetch(`${BASE_URL}/4`),
    fetch(`${BASE_URL}/5`),
    fetch(`${BASE_URL}/6`),
]

// With promises
Promise.all(lotsOfFetchCalls)
    .then(result => {
        console.log("Promise.all resolve :", result);
    })
    .catch(err => {
        console.log("One promise was rejected")
        console.log(err);
    })

// With async/await
async function getLotsOfPokemon() {
    try {
        const results = await Promise.all(lotsOfFetchCalls);
        console.log("Promise.all() is done and resolved!", results);
    } catch (err) {
        console.log("One of the promise was rejected", err);
    }
}

// ============ Promise.allSettled() ==============
async function allSettledDemo() {
    const GITHUB_BASE_URL = "https://api.github.com";

    let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);
    let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);
    let badUrl = fetch(`https://notrealsitwhehehe.com/users/elie`);
    let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);
    let anotherBad = fetch(`http://tudegustes.com/users/elie`);

    let results = await Promise.allSettled([
        elieP, joelP, badUrl, coltP, anotherBad
    ]);

    const fulfilled = results.filter(r => r.status === "fulfilled");
    const rejected = results.filter(r => r.status === "rejected");
    console.log("fulfilled: ", fulfilled); 
    console.log("rejected: ", rejected); 
}