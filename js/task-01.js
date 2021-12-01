// Задание 1
const listWithItem = document.querySelectorAll("li.item");
console.log("Number of categories:", listWithItem.length);

listWithItem.forEach((element) => {
  const titleEl = element.querySelector("h2");
  const numberEl = element.querySelectorAll("li");

  console.log(`Category : ${titleEl.textContent}`);
  console.log(`Elements : ${numberEl.length}`);
});

// Задание 2

// Напиши скрипт, который для каждого элемента
// массива ingredients:

// // Создаст отдельный элемент <li>. Обзательно
// используй
// // метод
// // document.createElement().
// // Добавит название ингредиента как его текстовое
// // содержимое.
// // Добавит элементу класс item.
// // После чего вставит все <li> за одну операцию
// // в список ul.ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const addIngredient = ingredients.map((ingredient) => ingredient);
