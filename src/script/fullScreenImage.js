function addImageClickEvent(selector){
    const images = document.querySelectorAll(selector);
    images.forEach(element => {
        element.onclick = () => displayImageFullScreen(element);
    });
}


function displayImageFullScreen(img){
    const dialog = document.querySelector('#imageFullScreen');
    const dialogContainer = dialog.querySelector('.modal-box');
    dialog.onclose = () => {
        dialogContainer.querySelectorAll('img, h1').forEach(element => {
            element.remove();
        });
    }
    const image = createElement('img', {src: img.src, alt: img.alt});
    const imageDescription = createElement('h1', null, null, img.alt);
    // TODO: Place this in an external function
    dialogContainer.querySelectorAll('img, h1').forEach(element => {
        element.remove();
    });
    dialogContainer.appendChild(image);
    dialogContainer.appendChild(imageDescription);
    dialog.showModal();
}