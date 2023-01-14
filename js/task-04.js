// Задание 4

// Счетчик состоит из спана и кнопок, которые, при клике, должны
// увеличивать и уменьшать его значение на единицу.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Создай переменную counterValue в которой будет храниться текущее значение
// счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай
// значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// const span = document.querySelector("#value");
// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');

const refs = {
  span: document.getElementById("value"),
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.decrementBtn.addEventListener("click", onDecrementClick);

function onDecrementClick() {
    counterValue -= 1;
    refs.span.textContent = counterValue;
};

refs.incrementBtn.addEventListener("click", onIncrementClick);

function onIncrementClick() {
    counterValue += 1;
    refs.span.textContent = counterValue;
};

