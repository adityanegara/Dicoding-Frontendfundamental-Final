class NavbarItem extends HTMLElement {
    set navbarlink(navbarLink){
        this._navbarlink = navbarLink;
        this.render();
    }

    render(){
        this.innerHTML = 
        `   <li class = "custom-nav-link">
                <a href="${this._navbarlink.href}" >${this._navbarlink.caption}</a>
            </li>
           
        `
    }
}

customElements.define("navbar-item", NavbarItem);