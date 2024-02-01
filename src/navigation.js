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
    // headerSection.classList.remove('header-container--long');
    // headerSection.style.background = '';
    // arrowBtn.classList.add('inactive');
    // arrowBtn.classList.remove('header-arrow--white');
    // headerTitle.classList.remove('inactive');
    // headerCategoryTitle.classList.add('inactive');
    // searchForm.classList.remove('inactive');
    // trendingPreviewSection.classList.remove('inactive');
    // categoriesPreviewSection.classList.remove('inactive');
    // genericSection.classList.add('inactive');
    // movieDetailSection.classList.add('inactive');

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