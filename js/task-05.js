// Задание 5

// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее
// значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  input: document.getElementById("name-input"),
  nameOutput: document.getElementById("name-output"),
};

refs.input.addEventListener("input", onNameOutputInput);

function onNameOutputInput(event) {
  if (event.currentTarget.value === "") {
    refs.nameOutput.textContent = "Anonymous";
  } else {
    refs.nameOutput.textContent = event.currentTarget.value;
  }
};
