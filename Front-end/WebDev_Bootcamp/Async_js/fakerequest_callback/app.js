// EXEMPLE FUNCTION REQUEST
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 3500) + 500;
    setTimeout(() => {
        if (delay > 3000) {
            failure('Connection timeout :(');
        } else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('connection timeout:(');
            } else {
                resolve(`Here is your fake data from ${url}`);
            }
            
        }, delay);
    });
}

// OLD DAY WITH CALLBACK NESTED - CALLBACK HELL
// fakeRequestCallback('book.com/page1', 
//     function(response) {
//         console.log('it workeeeed');
//         console.log(response);
//         fakeRequestCallback('book.com/page2',
//             function(response) {
//                 console.log("page 2 loaded");
//                 console.log(response);
//                 fakeRequestCallback('book.com/page3',
//                     function(response) {
//                         console.log("work for page 3");
//                         console.log(response);
//                     }, function(error) {
//                         console.log("failed to load page 3");
//                         console.log(error);
//                     })
//             }, function (error) {
//                 console.log("timeout page 2");
//                 console.log(error);
//             });
//     }, function(error) {
//         console.log('it failed');
//         console.log(error);
//     });

// EXAMPLE with promises but still nesting
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("Promise Resolved! (page 1)");
//         fakeRequestPromise("yelp.com/api/coffee/page2")
//             .then(() => {
//                 console.log("Promise Resolved (page2)");
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("Promise Resolved (page3)");
//                     })
//                     .catch (() => {
//                         console.log("Promise Rejected (page3)");
//                     })
//             })
//             .catch(() => {
//                 console.log("Promise Rejected (page2)");
//             })
//     })
//     .catch(() => {
//         console.log("Promise Rejected! (page 1)");
//     })

// EXAMPLE with promises by returning it and one catch to avoid nesting
fakeRequestPromise('yelp.com/coffee/page1')
    .then((data) => {
        console.log("It worked (page 1)");
        console.log(data);
        return fakeRequestPromise('yelp.com/coffee/page2');
    })
    .then(() => {
        console.log("It worked (page 2)");
        console.log(data);
        return fakeRequestPromise('yelp.com/coffee/page3');
    })
    .then(() => {
        console.log("It worked (page 3)");
        console.log(data);
    })
    .catch(() => {
        console.log("OH no, a request failed.");
        console.log(err);
    })