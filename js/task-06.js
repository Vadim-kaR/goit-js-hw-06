const inputEl = document.querySelector("#validation-input")


inputEl.addEventListener("blur", checkInputLength)

function checkInputLength(event) {
    
    const minInputLength = inputEl.dataset.length;
    const currentInputValue = (event.currentTarget.value).length;



    if (minInputLength >= currentInputValue) {
        invalidInputLength();
    }
    else {
        validInputLength();
    }
}

function validInputLength () { 

    inputEl.classList.replace('invalid', 'valid')
}

function invalidInputLength () { 
    inputEl.classList.add('invalid')
}