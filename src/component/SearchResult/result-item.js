class ResultItem extends HTMLElement {

    set result(result){
        this._result = result;
        this.render();
    }
    render(){
        this.innerHTML = 
        `
            <div class="card" >
                <img src="${this._result.img}" class="card-img-top">
                <div class="card-body">
                    <p class="card-text">${this._result.title}</p>
                    <p class="card-text font-s-05">
                        <i class="far fa-star"></i> 
                        ${this._result.rating}(${this._result.countRater}) 
                        <span class="  float-end font-s-05 mt-1 ">
                            By ${this._result.creator}
                        </span>
                    </p>
                </div>
            </div>
        `;
    }
}

customElements.define("result-item", ResultItem);
