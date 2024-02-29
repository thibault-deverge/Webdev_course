function randomRejectResolve(duration){
    const p = new Promise(function(resolve, reject) {
        setTimeout(function() {
            const rand = Math.random();
            if (rand < 0.5){
                resolve("Pickles");
            } else {
                reject("Error!!!");
            }
        }, duration)
    })
    return p;
}

// async function demo() {
//     console.log("hi");
//     const val = await wait(2000);
//     console.log(val);
// }

// wait(5000)
//     .then(val => console.log(val));

randomRejectResolve(3000)
    .then(val => console.log(val))
    .catch(err => console.log(err))