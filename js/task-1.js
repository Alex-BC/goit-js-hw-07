const numberOfCategories = document.querySelectorAll('li.item');
console.log(`В списке ${numberOfCategories.length} категории`);

const itemsCategoryEl = Array.from(numberOfCategories);
itemsCategoryEl.forEach(value => {
  const titleOfCategories = value.firstElementChild.textContent;
  const quantityOfEl = value.querySelectorAll('li').length;
  console.log(
    `Категория: ${titleOfCategories} \nКоличество элементов: ${quantityOfEl}`,
  );
});
