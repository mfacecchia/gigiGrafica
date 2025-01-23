function addImageClickEvent(selector) {
    const images = document.querySelectorAll(selector);
    images.forEach((element) => {
        element.onclick = () => displayImageFullScreen(element);
    });
}

function displayImageFullScreen(img) {
    const dialog = document.querySelector("#imageFullScreen");
    const dialogContainer = dialog.querySelector(".modal-box");
    dialog.onclose = () => {
        removeManifestsDialogContent(dialogContainer);
    };
    const image = createElement("img", { src: img.src, alt: img.alt });
    const imageDescription = createElement("h1", null, null, img.alt);
    removeManifestsDialogContent(dialogContainer);
    dialogContainer.appendChild(image);
    dialogContainer.appendChild(imageDescription);
    dialog.showModal();
}

function removeManifestsDialogContent(dialogContainer) {
    dialogContainer.querySelectorAll("img, h1").forEach((element) => {
        element.remove();
    });
}
