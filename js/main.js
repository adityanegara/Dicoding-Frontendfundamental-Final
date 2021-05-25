import './animation/scroll_animation.js';
import './component/Navbar/navbar-link.js';
import './component/Navbar/navbar-list.js';
import './component/Cta/cta-card.js';
import './component/Categories/categorie-list.js';
import './component/Searchbar/searchbar.js';
import categories from './component/Categories/categories.js';
import links from './component/Navbar/navbar-links.js';

const renderCategories = () =>{
    const foodCategoryContainer = document.querySelector("#food-category");
    const categorieListElement =  document.createElement("categorie-list");
    categorieListElement.categories = categories;
    foodCategoryContainer.appendChild(categorieListElement);
}

const renderNavbar = () =>{
    // The mobile animation doesnt work
    const navbarContainer = document.querySelector(".main-header");
    const navbarListElement = document.createElement("navbar-list");
    navbarListElement.navbarlinks = links;
    navbarContainer.appendChild(navbarListElement);
}



renderCategories();






