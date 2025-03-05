//#region //? Основи JS
/* //! Data type (Тип данних)
TODO: основні типи данних, їх 8, У JavaScript значення Infinity і NaN належать до типу даних Number
1. Number — число  
2. BigInt — велике число  
3. String — рядок  
4. Boolean — булеве значення  
5. Undefined — невизначене значення  
6. Null — порожнє значення  
7. Symbol — символ  
8. Object — об'єкт  
*/
/* //! alert() (Сповіщення - Alert)
TODO: Відображає спливаюче вікно з повідомленням і кнопкою "OK" для підтвердження.
 * - Приймає один аргумент — рядок із повідомленням для користувача.
 * - Блокує виконання коду, доки користувач не натисне "OK".
 * - Не повертає значення (undefined).
 * - Використовується для простого інформування користувача.
console.log(alert('Hello, World!')); // Виведе сповіщення з текстом 'Hello, World!', а в консоль - undefined
alert('Error occurred!'); // Показує сповіщення з текстом 'Error occurred!'
alert('Your score: ' + 42); // Показує 'Your score: 42'
*/
/* //! prompt() (Запит введення - Prompt)
TODO: Відображає спливаюче вікно з полем для введення тексту, кнопками "OK" і "Cancel".
 * - Приймає два аргументи: рядок із повідомленням і (необов’язково) початкове значення поля.
 * - Повертає рядок, введений користувачем, або null, якщо натиснуто "Cancel".
 * - Блокує виконання коду, доки користувач не відповість.
 * - Якщо поле порожнє і натиснуто "OK", повертає '' (порожній рядок).
console.log(prompt('Enter your name:')); // Показує запит, повертає введений текст або null
console.log(prompt('Your age:', '18')); // Показує запит із початковим значенням '18'
let name = prompt('What is your name?'); // Зберігає введення в змінну
console.log('Hi, ' + prompt('Who are you?')); // Виведе 'Hi, ' + введений текст
*/
/* //! confirm() (Підтвердження - Confirm)
TODO: Відображає спливаюче вікно з повідомленням і кнопками "OK" та "Cancel", повертає булеве значення.
 * - Приймає один аргумент — рядок із запитанням для користувача.
 * - Повертає true, якщо натиснуто "OK", і false, якщо "Cancel".
 * - Блокує виконання коду, доки користувач не вибере одну з опцій.
 * - Використовується для підтвердження дій користувачем.
console.log(confirm('Are you sure?')); // Показує запит, повертає true або false
confirm('Do you want to proceed?'); // Показує запитання з "OK" і "Cancel"
let choice = confirm('Delete this item?'); // Зберігає вибір у змінну (true/false)
console.log('Result: ' + confirm('Continue?')); // Виведе 'Result: true' або 'Result: false'
*/
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
//#endregion
