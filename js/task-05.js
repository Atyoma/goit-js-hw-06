// Напиши скрипт который, при
// наборе текста в инпуте input#name
//     - input(событие input), подставляет его
// текущее значение в span#name - output.
// Если инпут пустой, в спане должна
// отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  input: document.getElementById("name-input"),
  output: document.getElementById("name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  if (event.currentTarget.value !== "") {
    refs.output.textContent = event.currentTarget.value;
  } else {
    refs.output.textContent = "Anonymous";
  }
}

console.log(refs.output.textContent);
