import "./result-item.js";
 
 
class ResultList extends HTMLElement {
    set results(results) {
        this._results = results;
        this.render();   
    }
 
    render() {
        this._results.forEach(result => {
            const resultItemElement = document.createElement("result-item");
            resultItemElement.result = result;
            
            resultItemElement.classList.add("col-lg-4");
            resultItemElement.classList.add("col-md-6");
            resultItemElement.classList.add("col-sm-6");
            resultItemElement.classList.add("col-xs-12");
            resultItemElement.classList.add("mt-3");


            this.appendChild(resultItemElement);
        })

        this.classList.add("row");
    }

}
 
customElements.define("result-list", ResultList );