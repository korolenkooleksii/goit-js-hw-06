// Задание 2

// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента 
// массива ingredients:

// Создаст отдельный элемент <li>. Обязательно 
// используй метод document.createElement().
// Добавит название ингредиента как его 
// текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию 
// в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1 way

// const findListEl = document.querySelector('#ingredients');

// const arrLi = [];
// for (const ingredient of ingredients) {
//   const makedItemEl = document.createElement("li");
//   makedItemEl.textContent = ingredient;
//   makedItemEl.classList.add("item");
//     arrLi.push(makedItemEl);
// } 

// findListEl.append(...arrLi);

// 2 way
// const findListEl = document.querySelector('#ingredients');

// const addLiInUl = (arr) => {
//   const arrLi = [];
//   for (const el of arr) {
//     const makedItemEl = document.createElement("li");
//     makedItemEl.textContent = el;
//     makedItemEl.classList.add("item");
//     arrLi.push(makedItemEl);
//   }

//   return findListEl.append(...arrLi);
// };

// addLiInUl(ingredients);

// 3 way
// const findListEl = document.querySelector('#ingredients');

// const makeArrLi = ingredients.map(el => {
//   const makedItemEl = document.createElement("li");
//   makedItemEl.textContent = el;
//   makedItemEl.classList.add("item");

//   return makedItemEl;
// });

// findListEl.append(...makeArrLi);

// 4 way

const listEl = document.getElementById("ingredients");

const addItemsInIList = (arr) => {
  return arr.map((elem) => {
    const makedItemEl = document.createElement("li");
    makedItemEl.textContent = elem;
    makedItemEl.classList.add("item");

    return makedItemEl;
  });
};

const makeArrLi = addItemsInIList(ingredients);

listEl.append(...makeArrLi);


