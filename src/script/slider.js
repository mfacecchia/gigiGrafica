async function setSliderElements(){
    const slider = document.querySelector('.certificatesSlider .glide__slides');
    const certificates = await getAssetsList('../assets/icons/certificates/', 'certificate', 'jpeg');
    certificates.forEach(certificateURL => {
        const sliderElement = document.createElement('li');
        sliderElement.classList.add('glide__slide');
        const image = document.createElement('img');
        image.src = certificateURL;
        sliderElement.appendChild(image);
        slider.appendChild(sliderElement);
    });
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