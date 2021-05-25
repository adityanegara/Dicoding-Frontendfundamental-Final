import "./navbar-item.js"

class NavbarList extends HTMLElement {
    set navbarlinks(navbarLinks){
   
        this._navbarlinks = navbarLinks;
        this.render();
    }

    render(){
        this._navbarlinks.forEach(navbarlink => {
            const navbarItemElement = document.createElement("navbar-item");
            navbarItemElement.navbarlink = navbarlink;
            // const new_html = `<li class = custom-nav-link >  ${navbarItemElement.innerHTML}  </li>`;
            // navbarItemElement.innerHTML = new_html;
            this.appendChild(navbarItemElement);
        });
        const new_html = "<ul class='nav-group'>" + this.innerHTML + "</div>";
        this.innerHTML = new_html;
 
    }
}

customElements.define("navbar-list", NavbarList);