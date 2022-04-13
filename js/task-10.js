
const refs = { 
  createBtn :document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  inputEl: document.querySelector('input'),
  containerEl: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', () => createBoxes(refs.inputEl.value))
refs.destroyBtn.addEventListener('click', destroyBoxes)
refs.inputEl.addEventListener('input', getAmount)

let inputAmount = null;
let baseWidth = 20;
let baseHeight = 20;

function getAmount(event) { 
  inputAmount = event.target.value;
}

function createBoxes(amount) {
  
  let array = [];
    for (let i = 0; i < amount; i++) { 
      array.push(`<div style="background-color:${getRandomHexColor()}; width:${baseWidth +=10}px; height:${baseHeight+=10}px"></div>`)
    }

  refs.containerEl.insertAdjacentHTML('beforeend', array.join(''));
}

function destroyBoxes() { 
  refs.containerEl.innerHTML = '';
  baseWidth = 20;
  baseHeight = 20;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

