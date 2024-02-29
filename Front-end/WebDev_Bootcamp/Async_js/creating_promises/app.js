const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) {
                resolve("Your fake data is here");
            }
            reject('Request error');
        }, 1000)
    })
}

// fakeRequest('/dogs/1') 
//     .then((response) => {
//         console.log('data is ', response);
//     })
//     .catch((err) => {
//         console.log('OH no!', err);
//     });


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           document.body.style.backgroundColor = color; 
           resolve();
        }, delay * 1000);
    });
};

// delayedColorChange('red', 1)
//     .then(() => delayedColorChange('blue', 1))
//     .then(() => delayedColorChange('olive', 1))
//     .then(() => delayedColorChange('violet', 1))
//     .then(() => delayedColorChange('green', 1))
//     .then(() => delayedColorChange('orangered', 1))
    
// async function rainbow() {
//     await delayedColorChange('red', 1);
//     await delayedColorChange('green', 1);
//     await delayedColorChange('purple', 1);
//     await delayedColorChange('blue', 1);
//     await delayedColorChange('orangered', 1);
//     await delayedColorChange('violet', 1);
//     await delayedColorChange('olive', 1);
//     return "ALL DONE";
// }

// async function printRainbow() {
//     await rainbow();
//     console.log("end of rainbow");
// }

// printRainbow();

async function makeTwoRequest() {
    try {
        let data1 = await fakeRequest("/dogs/page1");
        console.log(data1);
        let data2 = await fakeRequest("/dogs/page1");
        console.log(data2);
    } catch (e) {
        console.log("Caught an error");
    }
}

makeTwoRequest();