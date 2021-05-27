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




async function getCategories(){
    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
        const responseJson = await response.json();
        const categoriesResultArray = [];
        responseJson.categories.forEach(category => {
            categoriesResultArray.push(
                {
                    id : category.idCategory,
                    title : category.strCategory,
                    backgroundImage : category.strCategoryThumb
                }
            )
        });
        renderCategories(categoriesResultArray);
    }catch(error){
        console.log(error);
    }
}

async function getAmericanCuisine(){
    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=American");
        const responseJson = await response.json();        
        const americanCuisineArray = [];
        responseJson.meals.forEach(meal => {
            americanCuisineArray.push(
                {
                    id : meal.idMeal,
                    title : meal.strMeal,
                    img : meal.strMealThumb,
                    rating : "4.8",
                    countRater : 28,
                    creator : "Aditya Negara"
                }
            )
        });
        renderResults(americanCuisineArray);

    }catch(error){
        console.log(error);
    }
}




const renderCategories = (categories) =>{
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

const renderResults = (results) =>{
    const resultsContainer =  $("#results-section").get(0);
    const resultsListElement =  document.createElement("result-list");
    resultsListElement.results = results;
    resultsContainer.appendChild(resultsListElement);
}



getCategories();
getAmericanCuisine();






