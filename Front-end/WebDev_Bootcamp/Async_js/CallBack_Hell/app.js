function makeRandColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`
}

const delayedColorChange = (delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = makeRandColor();
        doNext();
    }, delay * 1000);
}

delayedColorChange(1, () => {
    delayedColorChange(1, () => {
        delayedColorChange(1, () => {
            delayedColorChange(1, () => {

            });
        })
    })
});

// setTimeout(() => {
//     document.body.style.backgroundColor = makeRandColor();
//     setTimeout(() => {
//         document.body.style.backgroundColor = makeRandColor();
//         setTimeout(() => {
//             document.body.style.backgroundColor = makeRandColor();
//             setTimeout(() => {
//                 document.body.style.backgroundColor = makeRandColor();
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = makeRandColor();
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

/* EXAMPLE REAL LIFE
searchMoviesAPI('Amadeus', () => {
    // if API is up and request succeeded
    saveToMyDB(movies, () => {
        // if it works
    }, () => {
        // if it failed
    })

}, () => {
    // if API is down, or request failed
})
*/