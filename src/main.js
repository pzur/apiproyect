import {API_KEY} from "./secrets.js";
console.log('hello people');

async function getTrendingMoviesPreview(){
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    const data = await res.json();
    const movies = data.results;
    console.log({data , movies});

    movies.forEach(movie => {
        
    });
}

getTrendingMoviesPreview();