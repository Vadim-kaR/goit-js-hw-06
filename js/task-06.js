const inputEl = document.querySelector("#validation-input")
inputEl.addEventListener("blur", checkInputLength)

function checkInputLength(event) {
    const minInputLength = inputEl.dataset.length;
    const currentInputValue = (event.currentTarget.value).length ;

     if (minInputLength <= currentInputValue) {
            
        validInputLength();
    }
    else {
        invalidInputLength();
    }
}

function validInputLength() { 

    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')
    
}

function invalidInputLength () { 
    inputEl.classList.add('invalid')
}