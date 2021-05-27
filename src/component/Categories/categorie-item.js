class CategorieItem extends HTMLElement {
    set categorie(categorie){
        this._categorie = categorie;
        this.render();
    }
    render(){
        
        this.innerHTML = 
        `
            <div class="card"  style="background-image: url('${this._categorie.backgroundImage}');">
                <div class="card-body" >
                <h5 class="card-title" >${this._categorie.title}</h5>
                </div>
            </div>
       `
    }
}

customElements.define("categorie-item", CategorieItem);
