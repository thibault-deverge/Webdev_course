const prices = [9.99, 1.50, 19.99, 40.99, 30.5];

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand by me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Nothing Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 2008
    }
];

/* ***** Example 1 ***** */
const total = prices.reduce((total, price) => total + price);
console.log(total);

/* ***** Example 2 ***** */
const minPrice = prices.reduce((min, price) => {
    return price < min ? price : min;
});
console.log(minPrice);

/* ***** Example 3 ***** */
const bestMovie = movies.reduce((bestMovie, currMovie) => {
    return bestMovie.score > currMovie.score ? bestMovie : currMovie;
})
console.log(bestMovie);

/* ***** Example 3 - initial accumulator ***** */
const evens = [2, 4, 6, 8];

const sumInitial = evens.reduce((sum, num) => sum + num, 100);
console.log(sumInitial);