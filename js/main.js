import './animation/scroll_animation.js';
import './component/Navbar/navbar-link.js';
import './component/Cta/cta-card.js';
import './component/Categories/categorie-list.js';
import categories from './component/Categories/categories.js';

const foodCategoryContainer = document.querySelector("#food-category");
const categorieListElement =  document.createElement("categorie-list");
categorieListElement.categories = categories;
foodCategoryContainer.appendChild(categorieListElement);
console.log(categorieListElement.innerHTML);


