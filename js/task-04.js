let counterValue = 0;

const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');


decrementEl.addEventListener('click', onClickDecrement);

incrementEl.addEventListener('click', onClickIncrement);

function onClickDecrement() { 
    valueEl.textContent = counterValue -= 1;
}

function onClickIncrement() { 
   valueEl.textContent = counterValue += 1;
}

