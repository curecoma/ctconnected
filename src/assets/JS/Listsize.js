function fixListSize() {
    let WindowSize = window.innerWidth;

    let text = "";
    for (var [i, j] = [0, 0]; j < WindowSize; i++) {
        j = 40 + 268 * i;
        if (j < WindowSize) {
            text = 268 * i;
        }
    }

    Array.from(document.getElementsByClassName("center"))
        .forEach((element) => element.style.maxWidth = text + 'px');
}

window.onload = fixListSize;
window.onresize = fixListSize;