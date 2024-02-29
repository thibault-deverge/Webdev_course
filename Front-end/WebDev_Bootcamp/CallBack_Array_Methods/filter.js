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

const goodTitles = movies
                    .filter(m => m.score > 80)
                    .map(m => m.title);

const badMovies = movies.filter(movie => movie.score < 70);
const recentMovies = movies.filter(movie => movie.year > 2000);