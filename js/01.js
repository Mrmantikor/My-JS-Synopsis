//#region //! Основи JS
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
//? Робота з числами
/* //! Million 1е6 1е-6 (Короткий запис великих чисел)
const million = 1e6;
console.log(million);

const million = 1e-6;
console.log(million);
*/
/* //! Number (Число)
console.log(Number(0)); //0
console.log(Number(-0)); //-0
console.log(Number(1)); //1
console.log(Number('')); //0
console.log(Number('f')); //NaN
console.log(Number(NaN)); //NaN
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
console.log(Number(false)); //0
console.log(Number(true)); //1
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
/* //! Number.MIN_SAFE_INTEGER або Number.MAX_SAFE_INTEGER
TODO: Максимальне та мінімальне число в JavaScript, якщо перевищити це значення без допомоги BigInt , можуть виникати помилки з точністю
console.log(Number.MIN_SAFE_INTEGER); -→ -9007199254740991
console.log(Number.MAX_SAFE_INTEGER); -→ 9007199254740991


*/
/* //! BigInt() (Метод рахувати великі числа)
const num = 999999999999999999999999999999999999n;
console.log(num);

console.log(num * 99999999n); 
console.log(num * 50); -→ Помилка не робити так!
console.log(num * BigInt(50)); //! Var #1
console.log(Number(num) * 50); //! Var #2
console.log(11n / 2n); //! Особливість!

Q: Який результат буде під час виконання console.log(15n / 4n)?
A: При розподілі BigInt чисел дробова частина відкидається, тому що BigInt підтримує лише цілі числа. Таким чином, 15n / 4n дорівнює 3n.
*/
/* //! Number.EPSILON (Більш точне порівняння числа з плаваючою комою)
TODO: Порівняння чисел із плаваючою комою, быльш точне ніж ===
function areEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(0.1 + 0.2 === 0.3); -→ false
console.log(areEqual(0.1 + 0.2, 0.3)); -→ true
*/
/* //! Object.is() (Більш точне порівняння числа)
console.log(NaN === NaN); -→ false ❌
console.log(Object.is(NaN, NaN)); -→ true ✅
*/
/* //! toFixed() (Заокруглює число та перетворює в рядок)
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
/* //! Infinity (Безкінечність)
console.log(1e1000);
*/
/* //! Number.isFinite() (Перевірка на безкінечність)
TODO: Функція isFinite(value) перевіряє, чи є значення безкінченним числом. Якщо число Infinity або NaN, вона поверне false, інакше - true. Не виконує автоматичного перетворення типів — перевіряє, чи аргумент є дійсним числом (number) і чи не є він Infinity або NaN.
Приклад: Чи є число безкінченним?

Ділимо 50 на 2, отримуємо звичайне число 25
const num1 = 50 / 2;
console.log(num1);// 25
console.log(isFinite(num1));// true

Ділимо 50 на 0, отримуємо Infinity (нескінченність)
const num2 = 50 / 0;
console.log(num2); // Виведе: Infinity
console.log(isFinite(num2)); // false

Ділимо -50 на 0, отримуємо -Infinity (негативна нескінченність)
const num3 = -50 / 0;
console.log(num3); // Виведе: -Infinity
console.log(isFinite(num3)); // false


*/
/* //! NaN (Not-a-Number)
TODO: У JavaScript NaN (Not-a-Number) — це спеціальне значення, яке означає, що результат операції не є числом.
1.2 NaN (Not-a-Number)
console.log(typeof NaN); -→ "number"
TODO: NaN не дорівнює самому собі, будь-яке значення NaN є унікальним і не може бути рівним іншому NaN.
console.log(NaN === NaN); -→ false
*/
/* //! Number.isNaN() (Більш точне порівняння чисел)
TODO: isNaN() може дати помилкові результати, тому краще використовувати Number.isNaN(), який працює точніше:

console.log(isNaN("hello")); // true (бо "hello" перетворюється на NaN)
console.log(Number.isNaN("hello")); // false (строка не є числом NaN)
*/
/* //! Math.Min() (Пошук найменьшого числа)
console.log(Math.min(2, 5, -4, 0));
*/
/* //! Math.Max() (Пошук найбільшого числа)
console.log(Math.max(2, 5, -4, 0));
*/
/* //! Math.pow() (Степінь)
console.log(Math.pow(2, 2));
 */
/* //! Math.sqrt() (Квадратний корінь)
console.log(Math.sqrt(8));
 */
/* //! Math.cbrt() (Кубічний корінь)
console.log(Math.cbrt(8));
 */
/* //! Math.ceil() (Округлення у більшу сторону)
TODO – округлення вгору (у більшу сторону) Округлює завжди у більшу сторону (до найближчого більшого цілого)
console.log(Math.ceil(24.23));
console.log(Math.ceil(24.83));
*/
/* //! Math.floor() (Округлення у меншу сторону)
TODO – округлення вниз (у меншу сторону) Округлює завжди в меншу сторону (до найближчого меншого цілого)
console.log(Math.floor(24.23));
console.log(Math.floor(24.83));
console.log(Math.floor(-24.23));
console.log(Math.floor(-24.83));
*/
/* //! Math.round() (Округлення за правилами математики)
TODO – округлення за правилами математики - Округлює число до найближчого цілого
console.log(Math.round(24.23));
console.log(Math.round(24.83));
*/
/* //! Math.trunc() (Відкидання дробової частини)
TODO – відкидання дробової частини Просто прибирає дробову частину, не округляючи
console.log(Math.trunc(24.23));
console.log(Math.trunc(24.83));
console.log(Math.trunc(-24.23));
console.log(Math.trunc(-24.83));
*/
//? Арифметичні оператори
/* //! Арифметичні оператори (Arithmetic Operators) + - / * % **
TODO - додавання (Addition)
const x = 8;
const y = 5;
console.log(x + y);
TODO - відімання (Subtraction)
const x = 8;
const y = 5;
console.log(x - y);
TODO - множення (Multiplication)
const x = 8;
const y = 5;
console.log(x * y);
TODO - ділення (Division)
const x = 8;
const y = 5;
console.log(x / y);
TODO - залишок від ділення (Modulus, Remainder)
const x = 8;
const y = 5;
console.log(x % y);
TODO - степінь (Exponentiation)
const x = 8;
const y = 5;
console.log(x ** y);
*/
/* //! Оператори присвоювання з арифметичними операціями (Assignment with Arithmetic Operators) += -= /= *= %= **=
TODO - додавання (Addition Assignment)
let x = 8;
x += 5;
console.log(x); // 13

TODO - віднімання (Subtraction Assignment)
let x = 8;
x -= 5;
console.log(x); // 3

TODO - множення (Multiplication Assignment)
let x = 8;
x *= 5;
console.log(x); // 40

TODO - ділення (Division Assignment)
let x = 8;
x /= 5;
console.log(x); // 1.6

TODO - залишок від ділення (Modulus Assignment)
let x = 8;
x %= 5;
console.log(x); // 3

TODO - піднесення до степеня (Exponentiation Assignment)
let x = 8;
x **= 5;
console.log(x); // 32768
*/

//#endregion
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

/* //! Явне перетворення до числа (Explicit Number Conversion)
TODO: Перетворює значення в число за допомогою методів чи функцій, таких як Number(), parseInt(), parseFloat(), або унарного +.
 * - Використовується для явного приведення значення до числового типу.
 * - Number() перетворює значення в число, повертаючи NaN для нечислового вмісту.
 * - parseInt() і parseFloat() витягують числа з рядків, ігноруючи нечислові символи після числа.
 * - Унарний + швидко приводить до числа, подібно до Number().
console.log(Number('42')); // Виведе: 42
console.log(+'0'); // Виведе: 0
console.log(Number(null)); // Виведе: 0
*/
