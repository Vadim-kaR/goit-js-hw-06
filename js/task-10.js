
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
let array = [];
let baseWidth = 30;
let baseHeight = 30;


function createBoxes() {
  divCollectionMaker();
  refs.containerEl.insertAdjacentHTML('afterbegin', array.join(''));
}

function destroyBoxes() { 
  refs.containerEl.innerHTML = '';
}

function getAmount(event) { 
  inputAmount = event.currentTarget.value;
}

function divCollectionMaker() { 
    for (let i = 0; i < inputAmount; i++) { 
      baseHeight += 10;
      baseWidth += 10;
      array.push(`<div style="background-color:${getRandomHexColor()};width:${baseWidth}px; height:${baseHeight}px"></div>`)
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
