const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsContainer = document.querySelector('#ingredients');

const makeIngredients = ingredients.map(options => {
  const ingredientsLi = document.createElement('li');
  ingredientsLi.textContent = options;
  return ingredientsLi;
});
console.log(makeIngredients);

ingredientsContainer.append(...makeIngredients);
