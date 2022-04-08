function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodySelector = document.querySelector('body');
const buttonEl = document.querySelector(".change-color")
const spanEl = document.querySelector('.color')

buttonEl.addEventListener('click', changeBodyColor)

function changeBodyColor() { 

  bodySelector.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();

}