const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand by me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
];

const doubleNumbers = numbers.map(function(num) {
    return num * 2;
})

const titles = movies.map(function(movie) {
    return movie.title.toUpperCase();
});

console.log(doubleNumbers);
console.log(titles);