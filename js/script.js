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


/*
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


// #region //?_Function_Теоргія?//
/* //! Function Declaration() 
TODO: (Можна викликати ДО оголошення функції в коді). Перевага в тому, що окремо в коді можна створити "Регіон" з аргументами і окремо "Регіон" з функціями
greetUser('Oleksii', 'Repin');
greetUser1('Phoebe', 'Howell');
greetUser2('Garrett', 'Cooper');

function greetUser(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
}
function greetUser1(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
}
function greetUser2(firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
}
*/
/* //! Function expression ()
TODO: Викликати тільки ПІСЛЯ оголошення в коді. Все те саме, що і в Function Declaration(), тільки навпаки, інтерпретатор спочатку прочитає функцію і потім виведе її результат.
const greetUser = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};
const greetUser1 = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};
const greetUser2 = function (firstName, lastName) {
  console.log(`Welcome ${firstName} ${lastName}`);
};

greetUser('Oleksii', 'Repin');
greetUser1('Phoebe', 'Howell');
greetUser2('Garrett', 'Cooper');
*/

/* //!
*/

/* //!
*/

/* //!
*/
// #endregion





// const sum = function (numA, numB) {
//   return numA + numB;
// };

// console.log(sum(10, 20));
// console.log(sum(20, 100));

//~ Псевдомасив arguments
// const foo = function () {
//   console.log('arguments:', arguments);

//   const args = Array.from(arguments);

//   console.log('args:', args);

//   // for (const arg of arguments) {
//   //   console.log(arg);
//   // }
// };

// foo('Hello', 'World');

/*
TODO: Напиши функцію add для складання довільної кількості аргументів (чисел)
*/

// const add = function () {
//   console.log('arguments:', arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

/*
TODO: Створіть функцію calculateAverage(), яка приймає довільну кількість числових аргументів
TODO: та розраховує середнє арефметичне.
*/

// const calculateAverage = function () {
//   console.log('arguments:', arguments);

//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total / arguments.length;
// };

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2