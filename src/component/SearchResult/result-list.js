import "./result-item.js";
import  {addClassesToElement} from '../../helper.js';
 
class ResultList extends HTMLElement {
    set results(results) {
        this._results = results;
        this.render();   
    }
    render() {
        this._results.forEach(result => {
            const resultItemElement = document.createElement("result-item");
            resultItemElement.result = result;
            this.appendChild(addClassesToElement(resultItemElement, 
                ["col-lg-4", "col-md-6", "col-sm-6", "col-xs-12", "mt-3"]));
        })
        addClassesToElement(this , ["row"]);
    }

   

}
 
customElements.define("result-list", ResultList );