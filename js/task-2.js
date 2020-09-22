const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredient = ingredients[0];
// console.log('ingredient', ingredient);

const ingredientsContainer = document.querySelector('.el');

// const ingredient = ingredients.map(option => {
//   const ingredientsLi = document.createElement('li');

//   return ingredientsLi;
// });
// console.log('ingredient', ingredient);

// ingredientsContainer.append(...ingredient);

const makeIngredients = options => {
  return options.map(option => {
    const ingredientsLi = document.createElement('li');

    return ingredientsLi;
  });
};

const ingredient = makeIngredients(ingredients);
ingredientsContainer.append(...ingredient);
