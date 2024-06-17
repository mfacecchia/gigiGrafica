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