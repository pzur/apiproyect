import {API_KEY} from "./secrets.js";
import variables from "./node.js";

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
    
    //permite que no se vuelva a cargar la data varias veces
    variables.trendisnMOviesPrevieList.innerHTML='';
    
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container')
        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt',movie.title);
        movieImg.setAttribute('src',
        'https://image.tmdb.org/t/p/w300/' + movie.poster_path
        );
        movieContainer.appendChild(movieImg);
        variables.trendisnMOviesPrevieList.appendChild(movieContainer);
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
    
    //permite que no se vuelva a cargar la data varias veces
    variables.categoriesPreviewList.innerHTML='';

    categories.forEach(category =>{
        // const previewCategoriesContainer = document.querySelector('#categoriesPreview .categoriesPreview-list');
        const categoryContainer = document.createElement('div');
        categoryContainer.classList.add('category-container');
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id', 'id'+ category.id);
        categoryTitle.addEventListener('click', () => {
            location.hash =`#category=${category.id}-${category.name}`;
        })
        const categoryTitleText = document.createTextNode(category.name);
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryTitle);
        variables.categoriesPreviewList.appendChild(categoryContainer);
    });

}

async function getMoviesByCategory(id){
    const {data} = await api('discover/movie',{
        params: {
            with_genres:id,
        }
    });

    const movies = data.results;

    //permite que no se vuelva a cargar la data varias veces
    variables.genericSection.innerHTML='';

    movies.forEach(movie => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container')
    const movieImg = document.createElement('img');
    movieImg.classList.add('movie-img');
    movieImg.setAttribute('alt',movie.title);
    movieImg.setAttribute('src',
    'https://image.tmdb.org/t/p/w300/' + movie.poster_path
    );
    movieContainer.appendChild(movieImg);
    variables.genericSection.appendChild(movieContainer);
});
};

// HEMOS ENVIADO A NAVIGATION LAS FUNCIONES
// getTrendingMoviesPreview();
// getCategoryPreview();

export {getCategoryPreview, getTrendingMoviesPreview, getMoviesByCategory}; 