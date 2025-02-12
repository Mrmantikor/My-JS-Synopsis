/* //! Console
function Detected() {
  console.log('Java Script Detected');
}
Detected();
*/
/* //! Let
let username = 'Mango';
username = 'poly';
console.log(username);
 */
/* //! Null
let value = null;
console.log(value);
*/
/* //! Undefined
let value;
console.log(value);
*/
/* //! Infinity
console.log(1e1000);

const num1 = 50 / 2;
console.log(Number.isFinite(num1));
const num2 = 50 / 0;
console.log(Number.isFinite(num2));
*/
/* //! Million 1е6 1е-6
const million = 1e6;
console.log(million);

const mil = 1e-6;
console.log(mil);
*/
/* //! Alert
alert('Hello World!');
*/
/* //! Prompt
prompt(`yes or no`); 
TODO –
const firstName = prompt('Як вас звати?');
console.log(firstName);
TODO – Попросіть користувача ввести число. Виведіть результат у консоль. Приведіть рядок до числа.
const userInput = Number(prompt('Введіть якесь число!'));
console.log(userInput);
*/
/* //! Confirm
confirm(`yes and text`); 

const isAdult = confirm('Чи є вам 18?');
console.log(isAdult);
*/
/* //! Typeof
const q = 1;
console.log(typeof q);
const w = 'Jaca';
console.log(typeof w);
const e = false;
console.log(typeof e);
let r;
console.log(typeof r);
let t = null;
console.log(typeof t);
*/
/* //! length
const str = 'Love is Java Skript';
console.log(str.length);
console.log(str[0]);
console.log(str.at(0));
console.log(str.at(-1));
console.log(str[str.length - 1]);

const num = 25.25;
console.log(String(num));

TODO – Дізнайтесь довжину рядка message.
const message = 'This string is 28 chars long';
const messageLength = message.length;
console.log(message);
console.log(messageLength);

*/
/* //! toLocaleLowerCase(), toLocaleUpperCase()
const strLowerCase = 'You NOT Love is Java Skript?!';
console.log(strLowerCase.toLowerCase());
console.log(strLowerCase.toLocaleLowerCase()); // Коррекиніше працює з нестандартними буквами
console.log(strLowerCase.toUpperCase());
console.log(strLowerCase.toLocaleUpperCase()); // Коррекиніше працює з нестандартними буквами*/
/* //! trim() 
const methodTrim = '  You NOT Love is Java Skript?!  '; // Прибирає пробілі спочатку і в кінці
console.log(methodTrim.trim());
//
const str = '    Вже полюбив JS? :)    ';
console.log(str.length);
console.log(str.trim().length);
//
const str1 = '  Як у тебе справи?  ';
console.log(str1.length);
console.log(str1.trim().length);
*/
/* //! repeat() 
const methodRepeat = 'You NOT Love is Java Skript?!';
console.log(methodRepeat.repeat(3));
*/
/* //! + - / * % **
TODO – додавання
const x = 8;
const y = 5;
console.log(x + y);
TODO – відімання
const x = 8;
const y = 5;
console.log(x - y);
TODO – множення
const x = 8;
const y = 5;
console.log(x * y);
TODO – ділення
const x = 8;
const y = 5;
console.log(x / y);
TODO – залишок від ділення
const x = 8;
const y = 5;
console.log(x % y);
TODO – степінь 
const x = 8;
const y = 5;
console.log(x ** y);
TODO – Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин. Результат виведіть у консоль.
const totalMinutes = 90;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);
console.log(hours, ':', minutes); 
*/
/* //! += -= /= *= %= **=
let age = 25;
age += 1;
console.log(age);
let apples = 10;
apples += 3;
console.log(apples);
let oranges = 5;
oranges -= 2;
console.log(oranges);
let bananas = 7;
bananas *= 2;
console.log(bananas);
 */
/* //! String
TODO – Явне перетворення типів
console.log(String(5));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
TODO – Неявне перетворення типів
console.log('5' + 3);
console.log(3 + '5');
console.log('5' + true);
console.log('5' + false);
console.log('5' + null);
console.log('5' + undefined);
 */
/* //! Number
TODO – Явне перетворення типів
console.log(Number('5'));
console.log(+'5');
console.log(Number(true));
console.log(+true);
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number('Jacob'));
console.log(Number('25px'));
console.log(+'25px');
TODO – Неявне перетворення типів
console.log('5' * 2);
console.log('10' - 5);
console.log(5 + true);
console.log(5 - true);
 */
/* //! toFixed()
TODO – використовується для округлення числа до заданої кількості знаків після коми та перетворення їх у рядок.
-//! Округлює число за математичними правилами
console.log((12.3456).toFixed(2)); // "12.35
TODO
console.log(0.1 + 0.2);
console.log((0.1 + 0.2).toFixed(1));
console.log(Number((0.1 + 0.2).toFixed(1)));
console.log((12345.6459).toFixed(1));
TODO
let num = 12.3456;
console.log(num.toFixed(2)); // "12.35"
console.log(num.toFixed(0)); // "12"
console.log(num.toFixed(5)); // "12.34560"
*/
/* //! BigInt
console.log(Number.MIN_SAFE_INTEGER); //Мінімальне число в JS
console.log(Number.MAX_SAFE_INTEGER); //Максимальне число в JS

const num = 999999999999999999999999999999999999n;
console.log(num);

console.log(num * 99999999n); 
console.log(num * 50); // Помилка не робити так!
console.log(num * BigInt(50)); // Var #1
console.log(Number(num) * 50); // Var #2
console.log(11n / 2n); // Особливість!

Q: Який результат буде під час виконання console.log(15n / 4n)?
A: Все так, при розподілі BigInt чисел дробова частина відкидається, тому що BigInt підтримує лише цілі числа. Таким чином, 15n / 4n дорівнює 3n.
*/
/* //! ${} Template Strings
TODO – Запросіть у користувача ім'я та прізвище і виведіть у консоль повідомлення: Hello <імʼя> <прізвище>, you are logged in.
const firstName = prompt('Введіть ваше імʼя!');
const lastName = prompt('Введіть ваше прізвище!');
const message = `Hello ${firstName} ${lastName}, you are logged in.`;
alert(message);
// 
 TODO – Склади фразу за допомогою шаблонних рядків. A has B bots in stock, де A, B - змінні вставлені в рядок.
const companyName = 'Cyberdyne Systems';
const repairBots = 150;
const defenceBots = 50;
const msg = `${companyName} has ${repairBots + defenceBots} bots in stock`;
console.log(msg); // "Cyberdyne Systems has 200 bots in stock"
// 
*/
/* //! Math.Min, Math.Max
console.log(Math.max(2, 5, -4, 0));
console.log(Math.min(2, 5, -4, 0));
*/
/* //! Math.random()
TODO – від -10 до 10 рандомне число
const min = -10;
const max = 10;
const random = Math.trunc(Math.random() * (max - min) + min);
console.log(random);
TODO – 
const num = 24.3456;
console.log(num);
console.log(num * 100);
console.log(Math.trunc(num));
console.log(Math.trunc(num * 100));
console.log(Math.trunc(num * 100) / 100);
*/
/* //! charCodeAt() Юнікод
console.log('a', 'a'.charCodeAt(0));
console.log('b', 'b'.charCodeAt(0));
console.log('1'.charCodeAt(0));
 */
/* //! parseFloat(), 
const str = '52.86';
console.log(Number(str));
console.log(Number.parseFloat(str));
TODO – Дізнайтесь числове значення висоти елемента.
let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight:', elementHeight);
TODO – Попросіть користувача ввести два числа, складіть їх та виведіть результат у консоль.
const numA = Number.parseFloat(prompt('Введіть перше число!'));
const numB = Number.parseFloat(prompt('Введіть друге число!'));
console.log('numA:', numA);
console.log('numB:', numB);
const result = numA + numB;
console.log('result:', result);
*/
/* //! parseInt()
const str = '52.86';
console.log(Number(str));
console.log(Number.parseInt(str));
TODO – Дізнайтесь числове значення ширини елемента.
let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:', elementWidth);
*/
/* //! Math.ceil()
TODO – округлення вгору (у більшу сторону) Округлює завжди у більшу сторону (до найближчого більшого цілого)
console.log(Math.ceil(24.23));
console.log(Math.ceil(24.83));
*/
/* //! Math.floor()
TODO – округлення вниз (у меншу сторону) Округлює завжди в меншу сторону (до найближчого меншого цілого)
console.log(Math.floor(24.23));
console.log(Math.floor(24.83));
console.log(Math.floor(-24.23));
console.log(Math.floor(-24.83));
*/
/* //! Math.round()
TODO – округлення за правилами математики - Округлює число до найближчого цілого
console.log(Math.round(24.23));
console.log(Math.round(24.83));
*/
/* //! Math.trunc() 
TODO – відкидання дробової частини Просто прибирає дробову частину, не округляючи
console.log(Math.trunc(24.23));
console.log(Math.trunc(24.83));
console.log(Math.trunc(-24.23));
console.log(Math.trunc(-24.83));
*/
/* //! Оператори порівняння
console.log(5 < 4);
console.log(5 >= 6);
console.log(10 > '7');
console.log('2' > '12');
console.log('pampaya' < 'papaya');
console.log('4' == 4);
console.log('4' === 4);
console.log(1 == true);
console.log(1 === true);
console.log('0' == false);
console.log('0' === false);
console.log('Papaya' === 'papaya');
console.log('6' != 5);
console.log('6' !== 5);

*/

/* //! Function
TODO – Напишіть функцію isAdult(age), яка буде перевіряти вік користувач. Якщо користувачу більше 18 років, то функція повертає true інакше false.
function isAdult(userAge) {
  return userAge >= 18;
}
console.log(isAdult(29)); // true
console.log(isAdult(18)); // true
console.log(isAdult(7)); // false

TODO – Напишіть функцію isNumberEven(num), яка перевіряє число на парність. Якщо число парне, то функція повертає true інакше false.
function isNumberEven(num) {
  return num % 2 === 0;
}
console.log(isNumberEven(10)); // true
console.log(isNumberEven(15)); // false
console.log(isNumberEven(100)); // true
TODO – Напишіть функцію getRectArea(sideA, sideB) для обчислення площі прямокутника. Сторони прямокутника будуть переденні до параметрів sideA та sideB.
function getRectArea(sideA, sideB) {
  return sideA * sideB;
}
console.log(getRectArea(8, 11)); // 88
console.log(getRectArea(18, 11)); // 198
console.log(getRectArea(8, 21)); // 168
TODO: Напишіть функцію toCelsius(fahrenheit), яка буде переводити градуси Фаренгейта в градуси Цельсія.Заокругліть значення до однієї цифри після коми.
function toCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);

  return Number(celsius.toFixed(1));
}
console.log(toCelsius(10)); // -12.2
console.log(toCelsius(0)); // -17.8
console.log(toCelsius(-10)); // -23.3
TODO: Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла людини. Для цього необхідно розділити вагу на квадрат висоти. Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто як роздільник дробової частини може бути кома. Індекс маси тіла необхідно округлити до однієї цифри після коми.
function calcBMI(weight, height) {
  weight = Number(weight.replace(',', '.'));
  height = Number(height.replace(',', '.'));
  const bodyIndex = weight / height ** 2;
  return bodyIndex.toFixed(1);
}
const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
const num = 10;
console.log(num.toFixed(2));
*/

/* //! Lesson 2-1 practical
//? Логічні оператори
// console.log(true && 3);
// console.log(false && 3);
// console.log(true && 4 && "kiwi");
// console.log((true && 0) || "kiwi");
// console.log(true || 3);
// console.log(true || 3 || 4);
// console.log(true || false || 7);
// console.log(null || 2 || undefined);
// console.log((1 && null && 2) >= 0);
// console.log(null || (2 && 3) || 4);

//? Перетворення типів
// console.log(2 + 5 + "" + 1 + 0);
// console.log("" + 1 - 0);
// console.log(true + false);
// console.log(6 / Number.parseInt("3px"));
// console.log("2" * "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log("  -9  " + 5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("" + 1);
// console.log(3 > 2 > 1);
// console.log(3 > 2 && 2 > 1);
////////////////////////////////////////////////////////////////

// const str = 'abcdea';
// if (str.indexOf("a") === 0) {
//     console.log("так");
// }
// else{
//     console.log("ні");
// }
// 4 variant
// const message = str[0]==="a" ? "так":"Hi";
// console.log(message);
// 3 variant
// const message = str.startsWith("a") ? "так":"Hi";
// console.log(message);

// 2 variant
// str.startsWith("a") ? console.log("так") : console.log("ні");
// 1 variant
// if (str.startsWith("a")){
//     console.log("так");
// }
// else {
//     console.log("ні");
// }

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

const firstName = "Bobys";
const lastName = "Marleys";
// if (firstName.length > 4 && lastName.length > 5) {
//    console.log(firstName.length + lastName.length)
// }
// else {
//     console.log('неможливо виконати умову')
//     }
// const resolt =
//   firstName.length > 4 && lastName.length > 5
//     ? firstName.length + lastName.length
//     : "неможливо виконати умову";
// console.log(resolt);
// function checkNameLength(firstName, lastName) {
//   return firstName.length > 4 && lastName.length > 5
//     ? firstName.length + lastName.length
//     : "неможливо виконати умову";
// }
// const resolt = checkNameLength(firstName, lastName);
// console.log(resolt);
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxim = prompt('Введіть вік Максима');

// if (ageMaxim >= 0 && ageMaxim <= 16) {
// console.log('Діти');
// }

// else if (ageMaxim >= 17 && ageMaxim <= 60) {
//   console.log('Дорослі');
// }

// else if (ageMaxim >= 61 && ageMaxim <= 100) {
//   console.log(Пенсіонери);
// }
// else {
//   console.log('Жодна з груп');
// }
 

// function checkAgeMaksim(age) {
//   switch (age) {
//     case age >= 0 && age <= 16 && age :
//       console.log('Діти');
//       break;
//     case age >= 17 && age <= 60 && age:
//       console.log('Дорослі');
//       break;
//     case age >= 61 && age <= 100 && age:
//       console.log('Пенсіонери');
//       break;
//     default:
//       console.log('Жодна з груп');
//       break;
//   }

// }

// checkAgeMaksim(155);


// function checkAgeMaksim(age) {
//   return age >= 0 && age <= 16 ? 'Діти' :
//     age >= 17 && age <= 60 ? 'Дорослі' :
//       age >= 61 && age <= 100 ? 'Пенсіонери' :
//         'Жодна з груп'

// }

// console.log(checkAgeMaksim(17));
 */
/* //! Lesson 2-2 Practical











let drink = prompt("Що бажаєте?")?.toLowerCase();
// if (typeof drink === "string") {
//   drink = drink.toLowerCase();
// }

let price = 0;

switch (drink) {
  case "кава":
    price = 1;
    break;
  case "чай":
    price = 2;
    break;
  case "сік":
    price = 3;
    break;
  default:
    "Що це?";
}
console.log(price);

/*
Опис:

*/

//! Math.pow(2, 3); // Степінь
//! console.log(Math.sqrt(8)); // Повертає квадратний корінь числа
//! console.log(Math.cbrt(8)); // Повертає кубічний корінь числа

/* //! Question 1
TODO Потрібно перевітири чи є речення палінром
const str = 'Я несу гусеня'; //! янесугусеня
const str = 'Де помити мопед';
const str = 'І була пані на палубІ';
const str = 'Поліна неси Ром!';
TODO – Var 1
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = 0; i < newStr.length; i++) {
    reversedString += newStr[newStr.length - 1 - i];
  }
  console.log(newStr);
  console.log(reversedString);
  return newStr === reversedString;
}
console.log(isPalindrom(str));
TODO – var 2
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = newStr.length - 1; i >= 0; i--) {
    reversedString += newStr[i];
  }
  console.log(newStr);
  console.log(reversedString);
  return newStr === reversedString;
}
console.log(isPalindrom(str));
TODO – var 3
function isPalindrom(string) {
  const newStr = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < Math.floor(newStr.length / 2); i++) {
    if (newStr[i] !== newStr[newStr.length - 1 - i]) {
      return false;
    }
    // console.log(i);
    // console.log(newStr.length - 1 - i);
    // console.log('-------');
  }
  return true;
}
console.log(isPalindrom(str));
*/
/* //! Question 2
TODO Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
*
**
***
****
*****
TODO – Var 1
let str = '*';
while (str.length < 8) {
  console.log(str);
  str += '*';
}
TODO – Var 2
let str = '*';
do {
  console.log(str);
  str += '*';
} while (str.length < 8);
TODO – Var 3
let str = '*';
for (let i = 0; i < 7; i++) {
  console.log(str);
  str += '*';
}
*/
/* //! Question 3
TODO Порахуйте суму чисел від 12 до 27 = 312
TODO – Var 1 (Не правильно, запитати)
const num1 = 12;
const num2 = 27;
let sum = 0;
for (let i = num1; i < num2; i++) {
  if (i % 2 !== 0) {
    sum += i;
  }
}
TODO – Var 2 (Не правильно, запитати)
for (let i = num1; i < num2; i++) {
  if (i % 2 === 0) {
    continue;
  }
  sum += i;
}
console.log(sum);
*/
/* //! Question 4
TODO Тіммі та Сара думають, що вони закохані, але в тому місці, де вони живуть, вони дізнаються лише тоді, коли зірвуть по одній квітці. Якщо одна з квіток має парну кількість пелюсток, а інша - непарну, то це означає, що вони закохані. Напишіть функцію, яка отримує кількість пелюсток кожної квітки і повертає true, якщо вони закохані, і false, якщо ні.
TODO – Var 1
function checkLove(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
console.log(checkLove(2, 3));
TODO – Var 2
function checkLove(flower1, flower2) {
  if (
    (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 === 0)
  ) {
    return true;
  }
  return false;
}
console.log(checkLove(3, 3));
*/
/* //! Question 5
TODO Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",та залежно від виду напою оголоси суму досплати. Використовувати switch.
let drink = prompt('Що бажаєте?')?.toLowerCase();
let price = 0;
switch (drink) {
  case 'кава':
    price = 1;
    break;
  case 'чай':
    price = 2;
    break;
  case 'сік':
    price = 3;
    break;
  default:
    'Що це?';
}
console.log(price);
*/
