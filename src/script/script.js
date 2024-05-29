const fadeInElements = [];
document.querySelectorAll('.fade:not(.active)').forEach(element => {
    fadeInElements.push({
        element: element,
        yAxisOffset: element.getBoundingClientRect().top + window.scrollY
    });
});


window.onscroll = e => {
    if(window.scrollY >= fadeInElements[0].yAxisOffset - 200){
        fadeInElements[0].element.classList.add('active');
        fadeInElements.shift();
        if(!fadeInElements.length) window.onscroll = undefined;
    }
}