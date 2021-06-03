class CtaCard extends HTMLElement {
    connectedCallback() {
        this.title = this.getAttribute("title") || null;
        this.description = this.getAttribute("description") || null;
        this.backgroundImage = this.getAttribute("background-image") || null;
        this.buttonCaption = this.getAttribute("button-caption") || null;
        this.render();
    }
    render(){
        this.innerHTML = 
        ` <div class="card" style="background-image: url('${this.backgroundImage}');" >
            <div class="card-body ms-5 me-5 mt-3 pb-5 pt-5">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-12 mt-5">
                        <div class="col-lg-12 ">
                            <p class="card-title  h1">${this.title} </p>
                        </div>
                        <div class="col-12 mt-5">
                            <p class=" h5">${this.description}</p>
                        </div>
                        <div class="col-12 mt-5">
                            <a href="#">
                                <div class="d-grip gap-2">
                                    <button type="button" class="btn btn-cta btn-block">${this.buttonCaption}</button>
                                </div>                  
                            </a>
                        </div>
                    </div>
                </div>      
            </div>
        </div>`
    }

    
    
   }
   customElements.define("cta-card", CtaCard);