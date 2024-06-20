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
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.alt;
    const imageDescription = document.createElement('h1');
    imageDescription.textContent = img.alt;
    dialogContainer.querySelectorAll('img, h1').forEach(element => {
        element.remove();
    });
    dialogContainer.appendChild(image);
    dialogContainer.appendChild(imageDescription);
    dialog.showModal();
}