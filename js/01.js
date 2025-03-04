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
/* //! Math.ceil() (округлення у більшу сторону)
TODO – округлення вгору (у більшу сторону) Округлює завжди у більшу сторону (до найближчого більшого цілого)
console.log(Math.ceil(24.23));
console.log(Math.ceil(24.83));
*/
/* //! Math.floor() (округлення у меншу сторону)
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
//?
//#endregion
