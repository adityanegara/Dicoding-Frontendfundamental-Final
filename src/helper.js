export const addClassesToElement = (element, classes)=>{
    classes.forEach(c => {
        element.classList.add(c);
    });
    return element;
}

export const elementBetween = (before, element, after) =>{
    return before + element.innerHTML + after;
}

