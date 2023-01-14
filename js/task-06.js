// Задание 6

// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, указывается в его
// атрибуте data - length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

// 1 way

// const input = document.querySelector("#validation-input");

// input.addEventListener("blur", onBorderBlur);

// function onBorderBlur(event) {
//   if (
//     event.currentTarget.value.length ===
//     Number(event.currentTarget.dataset.length)
//   ) {
//     input.classList.add("valid");
//   } else {
//     input.classList.add("invalid");
//   }
// }

// 2 way

const input = document.getElementById("validation-input");

input.addEventListener("blur", onBorderBlur);

function onBorderBlur(event) {
  const symbols = event.currentTarget.value.trim();

  input.classList.add("invalid");

  if (symbols.length === Number(event.currentTarget.dataset.length)) {
    input.classList.replace("invalid", "valid");
  }
};

// Я вважау що для коректної роботи скрипта потрібен код що нижче,
// але в завданні такого не потребують.

// input.addEventListener("focus", onBorderFocus);

// function onBorderFocus(event) {
//   input.classList.replace("valid", "invalid");
// };
