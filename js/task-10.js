// Задание 10 (выполнять не обязательно)

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount и добавляет
// их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем
// самым удаляя все созданные элементы.

const container = document.getElementById("controls");
const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");

input.addEventListener("blur", onInputNumber);
btnDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function onInputNumber(e) {
  let number = Number(e.currentTarget.value);

  if (number <= 0 || number > 100) {
    alert("Введите число больше 0 но меньше 100!");
    e.currentTarget.value = 0;
    number = 0;
  }

  btnCreate.addEventListener("click", () => {
    createBoxe(number);
    number = 0;
  });

  e.currentTarget.value = 0;
}

function createBoxe(amount) {
  const arr = Array.from({ length: amount });
  
  const makeDivs = arr.map((el, ind) => {
    const element = document.createElement("div");

    element.style.width = 10 * ind + 30 + "px";
    element.style.height = 10 * ind + 30 + "px";
    element.style.backgroundColor = getRandomHexColor();

    return element;
  });
  return boxes.append(...makeDivs);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
