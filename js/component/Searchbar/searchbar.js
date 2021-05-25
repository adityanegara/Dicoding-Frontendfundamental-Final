class SearchBar extends HTMLElement {
    connectedCallback() {
        this.placeholder = this.getAttribute("placeholder") || null;
        this.buttonIcon = this.getAttribute("button-icon") || null;
        this.render();
    }
    render(){
        this.innerHTML = 
        ` <div class="row" id="search-bar">
            <div class="col-10 ">
                <div class="input-group" >
                    <input type="text" class="form-control custom-input" " placeholder="${this.placeholder}">
                </div>
            </div>
            <div class="col-2">
                <button class="btn btn-dark"><i class="${this.buttonIcon}"></i></button>
            </div>
        </div>`
    }
   }
   customElements.define("search-bar", SearchBar);