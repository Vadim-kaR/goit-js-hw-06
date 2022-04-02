const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients")

const result = ingredients.map(item => {
  const itemCreate = document.createElement('li');
  itemCreate.textContent = item;
  itemCreate.classList.add("item");
  return itemCreate;
});


list.append(...result);

console.log(list);
