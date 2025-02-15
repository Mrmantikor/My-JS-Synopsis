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







// ~ Псевдомасив arguments
// const foo = function () {
//   console.log('arguments:', arguments);

//   const args = Array.from(arguments);

//   console.log('args:', args);

// //   // for (const arg of arguments) {
// //   //   console.log(arg);
// //   // }
// };

// foo('Hello', 'World', 'World', 'World', 'World', 'World');

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

/*
TODO: Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
TODO: значення яких буде передано до параметра dimensions у вигляді рядка.
TODO: Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const sidesArr = dimensions.split(' ');

//   return Number(sidesArr[0]) * Number(sidesArr[1]);
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
TODO: Напиши функцію logItems(items), яка отримує масив та використовує цикл,
TODO: який для кожного елемента масиву буде виводити в консоль повідомлення у
TODO: форматі <номер елемента> - <значення елемента>. Нумерація елементів
TODO: повинна починатися з 1.
TODO:
TODO: Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
TODO: індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function (items) {
//   console.log('items:', items);

//   for (let i = 0; i < items.length; i++) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
TODO: Напиши функцію printInfo(names, phones) яка виводить
TODO: у консоль ім'я та телефонний номер користувача. У параметри
TODO: names та phones будуть передані рядки імен та телефонних номерів,
TODO: розділені комами. Порядковий номер імен та телефонів у рядках
TODO: вказують на відповідність. Кількість імен та телефонів
TODO: гарантовано однакова.
*/

// const printInfo = function (names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   for (let i = 0; i < names.length; i++) {
//     console.log(`${names[i]} - ${phones[i]}`);
//   }
// };

// printInfo('Jacob,William,Solomon,Artemis', '89001234567,89001112233,890055566377,890055566300');
// printInfo('Marion,Eugenia,Dean,Jesus', '8577702524,9125002644,2028646420,9364154932');

/*
TODO: Напиши функцію formatTime(totalMinutes) яка переведе значення
TODO: minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
*/

// const formatTime = function (totalMinutes) {
//   const hours = Math.floor(totalMinutes / 60);
//   const minutes = totalMinutes % 60;

//   return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
// };

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

/*
TODO: Напишіть функції для роботи з колекцією навчальних курсів courses:
TODO: addCourse(name) - додає курс в кінець колекції
TODO: removeCourse(name) - видаляє курс з колекції
TODO: updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// console.log('courses:', courses);

// const addCourse = function (courseName) {
//   if (courses.includes(courseName)) {
//     console.log(`У вас вже є курс ${courseName}`);
//   } else {
//     courses.push(courseName);
//   }
// };

// const removeCourse = function (courseName) {
//   const indexOfCourse = courses.indexOf(courseName);

//   if (indexOfCourse === -1) {
//     console.log(`${courseName} не знайдено!`);
//   } else {
//     courses.splice(indexOfCourse, 1);
//   }
// };

// const updateCourse = function (oldCourseName, newCourseName) {
//   const indexOfCourse = courses.indexOf(oldCourseName);

//   if (indexOfCourse === -1) {
//     console.log(`${oldCourseName} вже немає`);
//   } else {
//     courses.splice(indexOfCourse, 1, newCourseName);
//   }
// };

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс з такою назвою не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']

/*
TODO: Напиши функцію checkCaseOfLetter(letter), яка буде перевіряти регістр літери.
TODO: В параметр letter будуть передавати рядок із однією літерою.
TODO: Якщо літера знаходиться у верхньому регістрі, то буде повертатися 'upper case' інакше 'lower case'.
*/

// const checkCaseOfLetter = function (letter) {
//   return letter === letter.toUpperCase() ? 'upper case' : 'lower case';
// };

// console.log(checkCaseOfLetter('a')); // 'lower case'
// console.log(checkCaseOfLetter('A')); // 'upper case'

/*
TODO: Напиши функцію changeCaseOfLetters(str), яка буде повертати рядок із зміненим регістром літер.
TODO: В параметр str будуть передавати рядок.
*/

// const changeCaseOfLetters = function (str) {
//   console.log('str:', str);

//   let resultStr = '';

//   for (const char of str) {
//     if (char === char.toUpperCase()) {
//       resultStr += char.toLowerCase();
//     } else {
//       resultStr += char.toUpperCase();
//     }
//   }

//   return resultStr;
// };

// console.log(changeCaseOfLetters('AbCdE')); // aBcDe
// console.log(changeCaseOfLetters('abc')); // ABC
// console.log(changeCaseOfLetters('CBA')); // cba

// TODO: Напишіть функцію countVowels(str), яка рахує кількість голосних літер (a, e, i, o, u) у рядку.

// const countVowels = function (str) {
//   const vowels = 'aeiouAEIOU';

//   let count = 0;

//   for (const char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }

//   return count;
// };

// console.log(countVowels('Hello World!')); // 3
// console.log(countVowels('I love JavaScript!')); // 6
// console.log(countVowels('JavaScript is a lightweight interpreted programming language.')); // 19



