/* //! time() timeEnd()
console.time('for...of');
console.timeEnd('for...of');
*/
/* //! if else
const lang = prompt('How your love languages?');
if (lang === 'javascript') {
  console.log('Yes of course!!!');
} else {
  console.log('Are you sure?!');
}
*/
/* //! prompt()
TODO: Напишіть програму, яка запитує у користувача поточну погоду (через prompt) і виводить відповідне повідомлення в консоль. Якщо користувач вводить "rainy", програма виводить "take umbrella". Якщо "sunny" — "take glasses". Якщо "cold" — "dress warmer". В інших випадках виводиться "have a nice day".
const weather = prompt('How weather now?');
if (weather === 'rainy') {
  console.log('take umbrella');
} else if (weather === 'sunny') {
  console.log('take glasses');
} else if (weather === 'cold') {
  console.log('dress warmer');
} else {
  console.log('have a nice day');
}
*/


/*
const size = prompt('pizza size').trim().toLowerCase();

if (size === 'small') {
  console.log('Price: $800');
} else if (size === 'medium') {
  console.log('Price: $1200');
} else if (size === 'large') {
  console.log('Price: $1500');
} else { console.log(); }
*/


/*
dot notation
brackets notation
compound brackets notation
*/

// #region //?_Об'єкти_Теоргія?//
/* //! for...in
TODO: Порахуйте загальну кількість відгуків.
TODO – Var 1 (Через цикл for...in)
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

console.log('feedbacks:', feedbacks);

let totalFeedbacks = 0;

for (const key in feedbacks) {
  totalFeedbacks += feedbacks[key];
}

console.log('totalFeedbacks:', totalFeedbacks);
*/
/* //! Object.keys()
TODO – Var 2 (Через метод Object.keys() )
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const feedbacksKeys = Object.keys(feedbacks);

let totalFeedbacks = 0;

for (const key of feedbacksKeys) {
  totalFeedbacks += feedbacks[key];
}

console.log('totalFeedbacks:', totalFeedbacks);
*/
/* //! Object.values()
TODO – Var 3 (Через метод Object.values() )
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const feedbacksValues = Object.values(feedbacks);

let totalFeedbacks = 0;

for (const value of feedbacksValues) {
  totalFeedbacks += value;
}

console.log(totalFeedbacks);
*/
// #endregion
// #region //?_Об'єкти_Практика?//

//#endregion
