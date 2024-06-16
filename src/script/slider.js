async function setSliderElements(){
    const slider = document.querySelector('.certificatesSlider .glide__slides');
    let certificateExists = true;
    for(let i = 1; certificateExists; i++){
        // TODO: Move elements list finder functionality to an external function
        const certificateURL = await fetch(`../assets/icons/certificates/certificate${i}.jpeg`);
        if(!certificateURL.ok){
            certificateExists = false;
            break;
        }
        const sliderElement = document.createElement('li');
        sliderElement.classList.add('glide__slide');
        const image = document.createElement('img');
        image.src = certificateURL.url;
        sliderElement.appendChild(image);
        slider.appendChild(sliderElement);
    }
    initSlider();
}

function initSlider(){
    const slider = new Glide('.certificatesSlider', {
        type: 'carousel',
        perView: 1,
        autoplay: 2000,
        hoverPause: true
    });
    slider.mount();
}