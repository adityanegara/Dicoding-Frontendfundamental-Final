import $ from "jquery";
import { Tooltip, Toast, Popover } from 'bootstrap';
import './animation/scroll_animation.js';
import './component/Navbar/navbar-link.js';
import './component/Navbar/navbar-list.js';
import './component/Cta/cta-card.js';
import './component/Categories/categorie-list.js';
import './component/Searchbar/searchbar.js';
import './component/SearchResult/result-list.js';
import categories from './component/Categories/categories.js';
import links from './component/Navbar/navbar-links.js';
import results from './component/SearchResult/results.js';


const renderResults = () =>{
    const resultsContainer =  $("#results-section").get(0);
    const resultsListElement =  document.createElement("result-list");
    resultsListElement.results = results;
    resultsContainer.appendChild(resultsListElement);
}



const renderCategories = () =>{
    const foodCategoryContainer =  $("#food-category").get(0);
    const categorieListElement =  document.createElement("categorie-list");
    categorieListElement.categories = categories;
    foodCategoryContainer.appendChild(categorieListElement);
}

const renderNavbar = () =>{
    // The mobile animation doesnt work
    const navbarContainer =  $(".main-header").get(0);
    const navbarListElement = document.createElement("navbar-list");
    navbarListElement.navbarlinks = links;
    navbarContainer.appendChild(navbarListElement);
}



renderCategories();
renderResults();






