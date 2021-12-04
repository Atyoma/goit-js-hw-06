function getRandomHexColor() {
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
// Напиши скрипт, который изменяет цвета фона элемента
//   < body > через инлайн стиль при клике на
// button.change - color и выводит значение цвета
// в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const refs = {
  mutableElement: document.querySelector("body"),
  btnChangeColor: document.querySelector("button.change-color"),
  color: document.querySelector("span.color"),
};
console.log(refs.btnChangeColor);
console.log(refs.color);
console.log(refs.mutableElement);

const onChangeColor = (event) => {
  refs.mutableElement.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  refs.color.textContent = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
};

refs.btnChangeColor.addEventListener("click", onChangeColor);
