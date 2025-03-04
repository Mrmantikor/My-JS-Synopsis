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
/* //! time() timeEnd()
console.time('for...of');
console.timeEnd('for...of');
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
