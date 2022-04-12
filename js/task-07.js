const inputEl = document.querySelector('#font-size-control')
const spanEl = document.querySelector('#text')
inputEl.addEventListener('input', changeTextSize)

spanEl.style.fontSize = `${inputEl.value}px`


function changeTextSize(event) { 

    const inpurPxSize = event.currentTarget.value;
    spanEl.style.fontSize = `${inpurPxSize}px`
    }

 