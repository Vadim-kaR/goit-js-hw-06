
const refs = { 
  createBtn :document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  inputEl: document.querySelector('input'),
  containerEl: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes)
refs.destroyBtn.addEventListener('click', destroyBoxes)
refs.inputEl.addEventListener('input', getAmount)

let inputAmount = null;

function getAmount(event) { 
  inputAmount = event.target.value;
}


function createBoxes() {
  const array = [];
  let baseWidth = 20;
  let baseHeight = 20;
    for (let i = 0; i < inputAmount; i++) { 
      array.push(`<div style="background-color:${getRandomHexColor()}; width:${baseWidth +=10}px; height:${baseHeight+=10}px"></div>`)
    }

  refs.containerEl.innerHTML =  array.join('');
}

function destroyBoxes() { 
  refs.containerEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

