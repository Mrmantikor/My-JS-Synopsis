/*
TODO – Var 1
const languagesStr = 'HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++';

let uniqueLetters = '';

for (let i = 0; i < languagesStr.length; i += 1) {
  if (uniqueLetters.includes(languagesStr[i])) {
    continue;
  }
  uniqueLetters += languagesStr[i];
}
console.log(uniqueLetters);
TODO – Var 2
const languagesStr = 'HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++';

let uniqueLetters = '';
for (let i = 0; i < languagesStr.length; i += 1) {
  if (!uniqueLetters.includes(languagesStr[i])) {
    uniqueLetters += languagesStr[i];
  }
}

console.log(uniqueLetters);

TODO – Var 3
const languagesStr = 'HTML, CSS, JS, JS, PHP, React, Vue, Node.js, C, C++';

let uniqueLetters = '';

for (let i = 0; i < languagesStr.length; i += 1) {
  if (i === languagesStr.indexOf(languagesStr[i])) {
    uniqueLetters += languagesStr[i];
  }
}

console.log(uniqueLetters);
*/
/*
TODO: Напишіть програму яка буде виводити в консоль високосні роки в проміжку від  1700 до 2025. Рік, номер якого кратний 400, - високосний; Інші роки, номер яких кратний 100, - невисокосні (наприклад, роки 1700, 1800, 1900, 2100, 2200, 2300);Інші роки, номер яких кратний 4, - високосні, всі інші роки - невисокосні.
TODO – Var
for (let i = 1700; i <= 2025; i++) {
  if (i % 400 === 0) {
    console.log('високосний', i);
  }

  if (i % 100 !== 0 && i % 4 === 0) {
    console.log('високосний', i);
  }
}
*/
/*
TODO: Напишіть код, який запитуватиме Логін за допомогою prompt і логувати результат в консоль браузера, Якщо відвідувач вводить "Адмін", то prompt запитує пароль. Якщо нічого не ввели або натиснута клавіша Esc - вивести стороку "Скасовано"; Інакше виявити рядок - "Я вас не знаю". Пароль перевіряти так: Якщо введено пароль "Я головний",то вивести рядок - "Здрастуйте!". Якщо нічого не ввели або натиснута клавіша Esc, вивести стороку - "Скасовано", інакше виводити рядок "Невірний пароль!

const userLogin = prompt('Enter login!');
let strAdmin = 'Адмін';
if (userLogin === strAdmin) {
  const userPassword = prompt('Enter your password');
  if (userPassword === 'Я головний') {
    console.log('Здрастуйте!');
  } else if (userLogin === null || userLogin === '') {
    console.log('Скасовано');
  } else {
    console.log('Невірний пароль!');
  }
} else if (userLogin === null || userLogin === '') {
  console.log('Скасовано');
} else {
  console.log('Я вас не знаю');
}
*/
/*
function generateSquare(number) {
  let str = '';
  for (let i = 0; i < number; i++) {
    str += '+'.repeat(number) + '\n';
    if (i !== number - 1) str += '\n';
  }
  console.log(str);
}
generateSquare(3);

function generateSquare(number) {
  let str = '';
  const repeatString = '+'.repeat(number);
  for (let i = 0; i < number; i++) {
    str += repeatString;
    if (i !== number - 1) str += '\n';
  }
  console.log(str);
}
generateSquare(3);
*/
