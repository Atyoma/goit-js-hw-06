function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и
// нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один
// параметр - число.Функция создает столько < div >, сколько
// указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше
// предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//   тем самым удаляя все созданные элементы.

// =====task 10.1==========

const refs = {
  input: document.querySelector("input"),
  divBoxes: document.getElementById("boxes"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};

const newElement = "<div></div>";
// console.log(refs.input);
// console.log(refs.divBoxes);
// console.log(refs.btnCreate);
// console.log(refs.btnDestroy);

const onCreateCollection = (event) => {
  console.log("add colection");
};

const onDestroyCollection = (event) => {
  console.log("destroy colection");
};

const onCountChange = (event) => {
  const { value } = event.target;

  const arr = Array(Number(value))
    .fill("")
    .map(() => newElement);
  refs.divBoxes.innerHTML = "";
  refs.divBoxes.insertAdjacentHTML("beforeend", arr.join(""));
  console.log(value);
};

refs.input.addEventListener("input", onCountChange);
refs.btnCreate.addEventListener("click", onCreateCollection);
refs.btnDestroy.addEventListener("click", onDestroyCollection);

// createBoxes = (amount) => {
//   divBoxes.append;
// };
