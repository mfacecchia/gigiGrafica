function getAssetsList(pathname, filename, extension){
    return new Promise(async (resolve, reject) => {
        const assetsList = [];
        let assetExists = true;
        for(let i = 1; assetExists; i++){
            // TODO: Move elements list finder functionality to an external function
            const assetURL = await fetch(pathname + filename + i + '.' + extension);
            if(!assetURL.ok){
                assetExists = false;
                break;
            }
            assetsList.push(assetURL.url);
        }
        resolve(assetsList);
    });
}

function createElement(elementName, attributes = null, classes = null, textContent = null){
    /*
        * Creates an element from the given `elementName` and possible `attributes` and `classes` names
        * The `attributes` parameter should be an Object with the attribute name as key and the relative value as Object value
        * The `classes` parameter should be an Array with all the classes names as values
        * Returns an instance of the chosen `elementName` element
    */
    const element = document.createElement(elementName);
    if(attributes){
        // Applying all attributes to the new element
        for(const attributeName in attributes){
            element.setAttribute(attributeName, attributes[attributeName]);
        }
    }
    if(classes) element.classList.add(...classes);
    if(textContent) element.textContent = textContent;
    return element;
}