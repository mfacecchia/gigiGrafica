let fadeInElements = [];
/*
 * Getting all elements' position after a short delay in order to avoid getting
 * wrong position values due to `fade` class transition
 */
setTimeout(() => {
    let needsSorting = false;
    document.querySelectorAll(".fade:not(.active)").forEach((element) => {
        fadeInElements.push({
            element: element,
            yAxisOffset: element.getBoundingClientRect().top + window.scrollY,
        });
        if (
            fadeInElements.length >= 2 &&
            fadeInElements.at(-1).yAxisOffset <
                fadeInElements.at(-2).yAxisOffset
        )
            needsSorting = true;
    });
    /*
     * Checking for elements positions and eventually sort them in case
     * the order they are obtained from the DOM is not in ascending order
     */
    if (needsSorting) fadeInElements = sortElementsPositions(fadeInElements);
    showElementsOnLoad();
}, 200);

function showElementsOnLoad() {
    /*
     * Shows all elements before the scrolling Y offset in case the page is not loaded
     * at the very beginning
     */
    let lowestElementReached = false;
    while (!lowestElementReached && fadeInElements.length) {
        if (
            window.scrollY >=
            fadeInElements[0].yAxisOffset - window.innerHeight / 1.1
        ) {
            fadeInElements[0].element.classList.add("active");
            fadeInElements.shift();
            continue;
        }
        lowestElementReached = true;
    }
    fadeInElements.length
        ? (window.onscroll = showElementOnScroll)
        : (window.onscroll = undefined);
}

function showElementOnScroll() {
    if (
        window.scrollY >=
        fadeInElements[0].yAxisOffset - window.innerHeight / 1.1
    ) {
        fadeInElements[0].element.classList.add("active");
        fadeInElements.shift();
        if (!fadeInElements.length) window.onscroll = undefined;
    }
}

function sortElementsPositions(elementsList) {
    if (elementsList.length === 1) return elementsList;
    if (elementsList.length === 2)
        return elementsList[0].yAxisOffset > elementsList[1].yAxisOffset
            ? [elementsList[1], elementsList[0]]
            : elementsList;
    const left = elementsList.splice(0, Math.floor(elementsList.length / 2));
    const right = elementsList;
    const sortedLeft = sortElementsPositions(left);
    const sortedRight = sortElementsPositions(right);
    const sortedArr = merge(sortedLeft, sortedRight);
    return sortedArr;
}

function merge(left, right) {
    const sorted = [];
    while (left.length && right.length) {
        if (left[0].yAxisOffset > right[0].yAxisOffset)
            sorted.push(right.shift());
        else sorted.push(left.shift());
    }
    return [...sorted, ...left, ...right];
}
