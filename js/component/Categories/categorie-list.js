import "./categorie-item.js"
 
 
class CategorieList extends HTMLElement {
 set categories(categories) {
   this._categories = categories;
   this.render();
 }
 
 
 render() {
   this._categories.forEach(categorie => {
     const categorieElement = document.createElement("categorie-item");
     categorieElement.categorie = categorie;
     categorieElement.classList.add("col-6");
     categorieElement.classList.add("mt-2");
     console.log(categorieElement);
     this.appendChild(categorieElement);
   })
    const new_html = "<div class='row'>" + this.innerHTML + "</div>";
    this.innerHTML = new_html;
 }


}
 
customElements.define("categorie-list", CategorieList);