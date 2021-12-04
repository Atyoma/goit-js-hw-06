// Напиши скрипт, который реагирует на изменение
// значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя
// свойство font - size.В результате при
// перетаскивании ползунка будет меняться
// размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  imput: document.getElementById("font-size-control"),
  textSize: document.getElementById("text"),
};

const onRangeChange = (event) => {
  const { value } = event.target;

  refs.textSize.style.fontSize = `${value}px`;
};

refs.imput.addEventListener("input", onRangeChange);
