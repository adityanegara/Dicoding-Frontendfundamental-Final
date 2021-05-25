class NavbarLink extends HTMLElement {
    connectedCallback() {
        this.link = this.getAttribute("link") || null;
        this.caption = this.getAttribute("caption") || null;
        this.render();
    }
    render(){
        this.innerHTML = 
        `<li class="custom-nav-link ">
            <a href="${this.link}" >${this.caption}</a>
         </li>`
    }
   }
   customElements.define("navbar-link", NavbarLink);