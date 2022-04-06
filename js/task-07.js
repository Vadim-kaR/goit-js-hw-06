const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
inputEl.addEventListener('input', changeTextSize)

function changeTextSize(event) { 
    const inpurPxSize = event.currentTarget.value;
    spanEl.style.fontSize = `${inpurPxSize}px`
    }

 