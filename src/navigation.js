window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
import { getCategoryPreview, getTrendingMoviesPreview } from "./main.js";

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
}

function homePage(){
    console.log('Home dff !!!');
    getCategoryPreview();
    getTrendingMoviesPreview();
}

function trendsPage(){
    console.log('TRENDS !!!');
}

function searchPage(){
    console.log('Search !!');
}

function movieDetailsPage(){
    console.log('Movie');
}

function categoriesPage(){
    console.log('Categoriess !!!');
}