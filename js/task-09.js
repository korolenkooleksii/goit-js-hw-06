// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> 
// через инлайн стиль при клике на button.change - color и выводит
// значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.


const span = document.querySelector(".color");
const container = document.querySelector(".widget");
const btn = document.querySelector(".change-color");


btn.addEventListener("click", onSpanClick);

function onSpanClick() {
  span.textContent = getRandomHexColor('');
  container.style.backgroundColor = getRandomHexColor("");
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};