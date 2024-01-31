import {API_KEY} from "./secrets.js";

// UTILIZANDO AXIOS
// https://github.com/axios/axios?tab=readme-ov-file#installing
const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        'Content-Type':'application/json;charset=utf-8',
    },
    params: {
        'api_key':API_KEY,
    },
});

async function getTrendingMoviesPreview(){
    
    // UTILIZANDO AXIOS
    const {data} = await api('trending/movie/day');
    const movies = data.results;
    console.log({data , movies});
    
    // FORMA DE LLAMAR CON PROMESAS
    // const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY);
    // const data = await res.json();
    // const movies = data.results;
    // console.log({data , movies});
    
    
    movies.forEach(movie => {
        const trendingPreviewMoviesContainer= document.querySelector('#trendingPreview .trendingPreview-movieList');
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container')
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt',movie.title);
        movieImg.setAttribute('src',
        'https://image.tmdb.org/t/p/w300/' + movie.poster_path
        );
        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
}

async function getCategoryPreview(){

    // UTILIZANDO AXIOS
    const {data} = await api('genre/movie/list')
    const categories = data.genres;

    // FORMA DE LLAMAR CON PROMESAS
    // const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key='+ API_KEY);
    // const data = await res.json();
    // const categories = data.genres;
    // console.log('Category Preview');
    
    categories.forEach(category =>{
        const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id'+ category.id);
        const categoryTitleText = document.createTextNode(category.name);
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        previewCategoriesContainer.appendChild(categoryContainer);

    });

}

// HEMOS ENVIADO A NAVIGATION LAS FUNCIONES
// getTrendingMoviesPreview();
// getCategoryPreview();

export {getCategoryPreview, getTrendingMoviesPreview}; 