const fadeInElements = [];
/* 
    * Getting all elements' position after a short delay in order to avoid getting
    * wrong position values due to `fade` class transition
*/
setTimeout(() => {
    document.querySelectorAll('.fade:not(.active)').forEach(element => {
        fadeInElements.push({
            element: element,
            yAxisOffset: element.getBoundingClientRect().top + window.scrollY
        });
    });
    showElementsOnLoad();
}, 200);

function showElementsOnLoad(){
    /*
        * Shows all elements before the scrolling Y offset in case the page is not loaded
        * at the very beginning
    */
    let lowestElementReached = false;
    while(!lowestElementReached && fadeInElements.length){
        if(window.scrollY >= fadeInElements[0].yAxisOffset - (window.innerHeight / 1.1)){
            fadeInElements[0].element.classList.add('active');
            fadeInElements.shift();
            continue;
        }
        lowestElementReached = true;
    }
    fadeInElements.length? window.onscroll = showElementOnScroll: window.onscroll = undefined;
}

function showElementOnScroll(){
    if(window.scrollY >= fadeInElements[0].yAxisOffset - (window.innerHeight / 1.1)){
        fadeInElements[0].element.classList.add('active');
        fadeInElements.shift();
        if(!fadeInElements.length) window.onscroll = undefined;
    }
}