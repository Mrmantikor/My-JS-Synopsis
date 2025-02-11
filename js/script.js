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

const firstName = prompt('Як вас звати?');
console.log(firstName);
*/
/* //! Confirm
confirm(`yes and text`); 

const isAdult = confirm('Чи є вам 18?');
console.log(isAdult);
*/
/* //! 3.10 Строки
TODO Method length
const str = 'Love is Java Skript';
console.log(str.length);
console.log(str[0]);
console.log(str.at(0));
console.log(str.at(-1));
console.log(str[str.length - 1]);

const num = 25.25;
console.log(String(num));

TODO Method toLocaleLowerCase(), toLocaleUpperCase()
const strLowerCase = 'You NOT Love is Java Skript?!';
console.log(strLowerCase.toLowerCase());
console.log(strLowerCase.toLocaleLowerCase()); // Коррекиніше працює з нестандартними буквами
console.log(strLowerCase.toUpperCase());
console.log(strLowerCase.toLocaleUpperCase()); // Коррекиніше працює з нестандартними буквами

TODO Method trim()
const methodTrim = '  You NOT Love is Java Skript?!  '; // Прибирає пробілі спочатку і в кінці
console.log(methodTrim.trim());

TODO Method repeat()
const methodRepeat = 'You NOT Love is Java Skript?!';
console.log(methodRepeat.repeat(3));


const str = '    Вже полюбив JS? :)    ';
console.log(str.length);
console.log(str.trim().length);

const str1 = '  Як у тебе справи?  ';
console.log(str1.length);
console.log(str1.trim().length);
 */
/* //! 3.11 BigInt - Великі цілі числа
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

// const numA = prompt('Введіть перше число');
// const numB = prompt('Введіть друге число');

// console.log(typeof numA);
// console.log(typeof numB);

// const result = numA + numB;

// console.log(result);

/* */
/* */
/* */
