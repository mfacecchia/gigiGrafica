const photographiesEvents = {
    garaDelCuoco: {
        title: "Evento Gara del cuoco",
        subtitle: "Lavori 2023 foto evento<br>2a Ediziona la gara del cuoco<br>I.I.S.S Einaudi FG",
        camera: "NIKON Z 7_2"
    },
    festaDellAlbero: {
        title: "Evento Festa dell'albero",
        subtitle: "Lavori 2022/2024 foto Evento<br>Festa dell'albero",
        camera: "NIKON D5600"
    },
    peppeZullo: {
        title: "Visita Peppe Zullo",
        subtitle: "Lavori 2023/2024 foto visita<br>ristorante Peppe Zullo",
        camera: "NIKON D5600"
    },
    salineMargherita: {
        title: "Visita Saline Margherita di Savoia",
        subtitle: "Lavori 2023/2024 foto visita<br>Saline Margherita di Savoia",
        camera: "iPhone 15 Pro Max"
    },
    vari: {
        title: "Vari",
        subtitle: "Sottotitolo Vari eventi",
        camera: "varoious cameras"
    }
}

document.querySelectorAll('#photosEventsSelection > div').forEach(eventButton => {
    eventButton.onclick = async e => {
        // Targetting parent if the user clicks on any child in the element
        let eventID = e.target.nodeName !== 'DIV'? e.target.parentNode.id: e.target.id;
        const photographiesSection = document.querySelector('#event');
        // Scrolling to section
        photographiesSection.scrollIntoView({behavior: "smooth", block: "center"});
        await updateEventSection(eventID);
    };
});

async function updateEventSection(eventID){
    const photographiesSection = document.querySelector('#event');
    const photographiesContainer = photographiesSection.querySelector('#photos');

    // Fallback in case event does not exist
    if(!photographiesEvents[eventID]) eventID = 'garaDelCuoco';
    const selectedEvent = photographiesEvents[eventID];
    photographiesSection.querySelector('header h1').textContent = selectedEvent.title;
    photographiesSection.querySelector('header p').innerHTML = selectedEvent.subtitle;
    photographiesSection.querySelector('#camera #cameraName').textContent = selectedEvent.camera;
    // Removing all images from container
    photographiesContainer.textContent = '';
    let imageExists = true;
    for(let i = 1; imageExists; i++){
        // Checking if the image actually exists before adding it
        const imgURL = await fetch(`../assets/icons/events/${eventID}/${eventID + i}.jpeg`);
        if(!imgURL.ok){
            imageExists = false;
            return;
        }
        const img = document.createElement('img');
        img.src = imgURL.url;
        photographiesContainer.appendChild(img);
    }
}