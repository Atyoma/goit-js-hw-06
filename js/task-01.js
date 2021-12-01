// Задание 1
const listWithItem = document.querySelectorAll("li.item");
console.log("Number of categories:", listWithItem.length);

listWithItem.forEach((element) => {
  const titleEl = element.querySelector("h2");
  const numberEl = element.querySelectorAll("li");

  console.log(`Category : ${titleEl.textContent}`);
  console.log(`Elements : ${numberEl.length}`);
});
