const inputEl = document.querySelector("#validation-input")

inputEl.addEventListener("blur", checkInputLength)

function checkInputLength(event) {
    
    const inputLength = inputEl.getAttribute('data-length')
    const minimalValue = event.currentTarget.value;

    if (inputLength >= minimalValue.length) {
        invalidInputLength(); 
    }
    else {
        validInputLength();
    }
}

function validInputLength () { 
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')
}

function invalidInputLength () { 
    inputEl.classList.add('invalid')
}