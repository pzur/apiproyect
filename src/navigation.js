window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
import variables from "./node.js";
import {getCategoryPreview, getTrendingMoviesPreview, getMoviesByCategory} from "./main.js";

variables.searchFormBtn.addEventListener('click', ()=> {
    location.hash = '#search=';
});

variables.arrowBtn.addEventListener('click', ()=> {
    location.hash = '#home';
});
variables.trendingBtn.addEventListener('click', ()=> {
    location.hash = '#trends';
});

function navigator(){ 
    console.log({location});

    if (location.hash.startsWith('#trends')){
        trendsPage();
    } else if (location.hash.startsWith('#search=')){
        searchPage();
    } else if (location.hash.startsWith('#movie=')){
        movieDetailsPage();
    } else if (location.hash.startsWith('#category=')){
        categoriesPage();
    } else {
        homePage();
    }

    document.body.scrollTop =0;
    document.documentElement.scrollTop=0;
}

function homePage(){
    console.log('Home dff !!!');
    variables.headerSection.classList.remove('header-container--long');
    variables.headerSection.style.background = '';
    variables.arrowBtn.classList.add('inactive');
    variables.arrowBtn.classList.remove('header-arrow--white');
    variables.headerTitle.classList.remove('inactive');
    variables.headerCategoryTitle.classList.add('inactive');
    variables.searchForm.classList.remove('inactive');
    variables.trendingPreviewSection.classList.remove('inactive');
    variables.categoriesPreviewSection.classList.remove('inactive');
    variables.genericSection.classList.add('inactive');
    variables.movieDetailSection.classList.add('inactive');
    getTrendingMoviesPreview();
    getCategoryPreview();
}

function trendsPage(){
    console.log('TRENDS !!!');
    variables.headerSection.classList.remove('header-container--long');
    variables.headerSection.style.background = '';
    variables.arrowBtn.classList.remove('inactive');
    variables.arrowBtn.classList.remove('header-arrow--white');
    variables.headerTitle.classList.add('inactive');
    variables.headerCategoryTitle.classList.remove('inactive');
    variables.searchForm.classList.add('inactive');
    variables.trendingPreviewSection.classList.add('inactive');
    variables.categoriesPreviewSection.classList.add('inactive');
    variables.genericSection.classList.remove('inactive');
    variables.movieDetailSection.classList.add('inactive');
}

function searchPage(){
    console.log('Search !!');
    variables.headerSection.classList.remove('header-container--long');
    variables.headerSection.style.background = '';
    variables.arrowBtn.classList.remove('inactive');
    variables.arrowBtn.classList.remove('header-arrow--white');
    variables.headerTitle.classList.add('inactive');
    variables.headerCategoryTitle.classList.remove('inactive');
    variables.searchForm.classList.remove('inactive');
    variables.trendingPreviewSection.classList.add('inactive');
    variables.categoriesPreviewSection.classList.add('inactive');
    variables.genericSection.classList.remove('inactive');
    variables.movieDetailSection.classList.add('inactive');
}

function movieDetailsPage(){
    console.log('Movie');
    variables.headerSection.classList.add('header-container--long');
    // variables.headerSection.style.background = '';
    variables.arrowBtn.classList.remove('inactive');
    variables.arrowBtn.classList.add('header-arrow--white');
    variables.headerTitle.classList.add('inactive');
    variables.headerCategoryTitle.classList.add('inactive');
    variables.searchForm.classList.add('inactive');
    variables.trendingPreviewSection.classList.add('inactive');
    variables.categoriesPreviewSection.classList.add('inactive');
    variables.genericSection.classList.add('inactive');
    variables.movieDetailSection.classList.remove('inactive');
}

function categoriesPage(){
    console.log('Categoriess !!!');
    variables.headerSection.classList.remove('header-container--long');
    variables.headerSection.style.background = '';
    variables.arrowBtn.classList.remove('inactive');
    variables.arrowBtn.classList.remove('header-arrow--white');
    variables.headerTitle.classList.add('inactive');
    variables.headerCategoryTitle.classList.remove('inactive');
    variables.searchForm.classList.add('inactive');
    variables.trendingPreviewSection.classList.add('inactive');
    variables.categoriesPreviewSection.classList.add('inactive');
    variables.genericSection.classList.remove('inactive');
    variables.movieDetailSection.classList.add('inactive');

    //se agrega para obtener el id del hash
    const[,categoryData] =location.hash.split('=');
    const [categoryId, categoryName]= categoryData.split('-');

    // se agregar el titulo de la categoria desde el api
    variables.headerCategoryTitle.innerHTML = decodeURIComponent(categoryName);

    getMoviesByCategory(categoryId);

};
