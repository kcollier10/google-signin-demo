

export const clickHandler = (elementId, handlerFn) => {
    const clickElement = document.getElementById(elementId);
    if(clickElement) clickElement.onclick = handlerFn
}