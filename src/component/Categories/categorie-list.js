import "./categorie-item.js"
import  {addClassesToElement, elementBetween} from '../../helper.js';
 
class CategorieList extends HTMLElement {
 set categories(categories) {
   this._categories = categories;
   this.render();
 }
 
 
 render() {
   this._categories.forEach(categorie => {
     const categorieElement = document.createElement("categorie-item");
     categorieElement.categorie = categorie;
     this.appendChild(addClassesToElement(categorieElement, 
      ["col-6", "mt-2"]));
   })
    this.innerHTML = elementBetween("<div class = 'row'>", this, "</div>");
 }


}
 
customElements.define("categorie-list", CategorieList);