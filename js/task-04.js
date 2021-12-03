// Счетчик состоит из спана и кнопок, которые,
// при клике, должны увеличивать и уменьшать его
// значение на единицу.

//     Создай переменную counterValue в которой
// будет храниться текущее значение счетчика и
// инициализируй её значением 0.
// // Добавь слушатели кликов на кнопки,
// внутри которых увеличивай или уменьшай значение
// счтетчика.Обновляй интерфейс новым значением
// переменной counterValue.

let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
console.log(decrement);

const increment = document.querySelector('button[data-action="increment"]');
console.log(increment);

const value = document.getElementById("value");
console.log(value);

const changeValue = (step) => {
  value.textContent = counterValue += step;
  console.log(counterValue);
};

decrement.addEventListener("click", () => changeValue(-1));
increment.addEventListener("click", () => changeValue(+1));
