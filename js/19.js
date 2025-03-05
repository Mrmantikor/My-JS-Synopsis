//? Рядки
/* //! typeof
TODO: typeof використовується для перевірки типу змінної або значення. Важливо пам’ятати, що для null він повертає "object" — це відома особливість JavaScript.

TODO - визначення типу змінної (Typeof)
let x = 8;
console.log(typeof x); // "number"

TODO - визначення типу рядка (Typeof String)
let str = "Hello";
console.log(typeof str); // "string"

TODO - визначення типу булевого значення (Typeof Boolean)
let isTrue = true;
console.log(typeof isTrue); // "boolean"

TODO - визначення типу undefined (Typeof Undefined)
let notDefined;
console.log(typeof notDefined); // "undefined"

TODO - визначення типу null (Typeof Null)
let emptyValue = null;
console.log(typeof emptyValue); // "object" (особливість JavaScript)

TODO - визначення типу об'єкта (Typeof Object)
let obj = { name: "Alice" };
console.log(typeof obj); // "object"

TODO - визначення типу масиву (Typeof Array)
let arr = [1, 2, 3];
console.log(typeof arr); // "object" (масиви в JavaScript — це об'єкти)

TODO - визначення типу функції (Typeof Function)
function myFunc() {}
console.log(typeof myFunc); // "function"
*/
/* //! + Конкатенація рядків (String Concatenation)
TODO: Об’єднує два операнди в один рядок, якщо хоча б один із них є рядком, або виконує додавання, якщо обидва числа.
 * - Оператор перевіряє типи операндів.
 * - Якщо хоча б один операнд є рядком, обидва приводяться до рядків і об’єднуються.
 * - Якщо обидва операнди числа, виконується арифметичне додавання.
 * - Нечислові значення (null, undefined, true, тощо) при конкатенації з рядком приводяться до рядкової форми.
console.log('Hello' + 'World'); // Виведе: 'HelloWorld'
console.log('Number: ' + 42); // Виведе: 'Number: 42'
console.log('' + 0); // Виведе: '0'
console.log(null + 'test'); // Виведе: 'nulltest'
console.log(undefined + ('' && false)); // Виведе: 'undefined'
console.log(('Hi' + '') * (false + true)); // Виведе: NaN
console.log(('NaN' + '') - (false + 'true')); // Виведе: NaN
console.log(('Code' + 5) + (false + true)); // Виведе: 'Code51'
console.log(('Text' + NaN) / ('yes' + false)); // Виведе: NaN
console.log((null + 'end') / (0 + 1)); // Виведе: NaN
console.log((undefined + 'start') * ('' + false)); // Виведе: NaN
*/
/* //! `` Шаблонні рядки (Template Literals) (Backtick - Бектіки)
TODO: Створює рядок із використанням зворотних лапок, дозволяючи вбудовувати вирази через ${} і писати багатострокові рядки.
 * - Використовуються зворотні лапки (``) замість одинарних або подвійних лапок.
 * - Вирази всередині ${} обчислюються і підставляються в рядок.
 * - Підтримує пряме написання рядків із переносами без спеціальних символів (\n).
 * - Усі операнди всередині ${} приводяться до рядків.
TODO – Запросіть у користувача ім'я та прізвище і виведіть у консоль повідомлення: Hello <імʼя> <прізвище>, you are logged in.
const firstName = prompt('Введіть ваше імʼя!');
const lastName = prompt('Введіть ваше прізвище!');
const message = `Hello ${firstName} ${lastName}, you are logged in.`;
alert(message);
*/
/* //! Явне перетворення рядків (Explicit String Conversion)
TODO: Перетворює значення в рядок за допомогою спеціальних методів чи функцій, таких як String() або .toString().
 * - Використовується для явного приведення значення до рядкового типу.
 * - String() працює з будь-яким значенням, включаючи null і undefined.
 * - .toString() викликається на об’єктах/числах, але не працює з null і undefined.
 * - Результат завжди рядок, навіть для спеціальних значень (NaN, null, тощо).
console.log(String(false)); // Виведе: 'false'
console.log(String(42)); // Виведе: '42'
console.log((0).toString()); // Виведе: '0'
console.log(String(null)); // Виведе: 'null'

*/
/* //! length (Властивість довжини - Length Property)
TODO: Повертає кількість елементів у рядку (символів) або масиві (елементів).
 * - Доступна для рядків (кількість символів у кодуванні UTF-16) і масивів (кількість індексованих елементів).
 * - Для рядків: повертає число символів, враховуючи пробіли та спеціальні символи.
 * - Для масивів: повертає кількість елементів, незалежно від їх типу чи значення.
 * - Повертає ціле число (не від’ємне), для інших типів недоступна напряму.
console.log('Hello'.length); // Виведе: 5
console.log([1, 2, 3].length); // Виведе: 3
console.log(''.length); // Виведе: 0
*/
/* //! indexOf() (Пошук індексу - Index Of)
TODO: Повертає індекс першого входження вказаного значення в рядку або масиві, або -1, якщо значення не знайдено.
 * - Для рядків: шукає підрядок, повертає позицію першого символу.
 * - Для масивів: шукає елемент, повертає його індекс (порівняння через ===).
 * - Приймає необов’язковий другий аргумент — позицію, з якої починати пошук.
 * - Чутливий до регістру для рядків, для масивів порівнює тип і значення.
console.log('Hello'.indexOf('l')); // Виведе: 2
console.log([1, 2, 3].indexOf(2)); // Виведе: 1
console.log('Hello'.indexOf('x')); // Виведе: -1

const howIndex = 'Bohdan';
console.log(howIndex[2]); // Виведе: 'h' (доступ до символу за індексом 2)
console.log(howIndex[6]); // Виведе: undefined (індекс поза межами рядка)
console.log(howIndex[howIndex.length - 1]); // Виведе: 'n' (останній символ)
console.log(howIndex.indexOf(howIndex[howIndex.length - 1])); // Виведе: 5 (індекс останнього символу 'n')
*/
/* //! charCodeAt() (Код символу за індексом - Character Code At)
TODO: Повертає числовий код UTF-16 символу в рядку за вказаним індексом.
 * - Приймає один аргумент — індекс символу (ціле число, від 0 до length - 1).
 * - Повертає ціле число від 0 до 65535, яке відповідає коду UTF-16 символу.
 * - Якщо індекс поза межами рядка або не вказано, повертає NaN.
 * - Для складних символів (наприклад, емодзі) може повертати код лише однієї одиниці UTF-16.
console.log('Hello'.charCodeAt(0)); // Виведе: 72 (код 'H')
console.log('Hello'.charCodeAt(2)); // Виведе: 108 (код 'l')
console.log(''.charCodeAt(0)); // Виведе: NaN (немає символів)
console.log('Bohdan'.charCodeAt('Bohdan'.length - 1)); // Виведе: 110 (код 'n')
console.log('Test'.charCodeAt(4)); // Виведе: NaN (індекс поза межами)
*/
