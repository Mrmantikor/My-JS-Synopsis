//#region //? Робота з числами (Теорія)
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
/* //! parseInt() (Перетворення рядка в ціле число - Parse Integer)
TODO: Витягує ціле число з рядка, ігноруючи нечислові символи після числа, і повертає його.
 * - Приймає рядок і необов’язковий параметр основи системи числення (radix, від 2 до 36).
 * - Починає аналіз із першого символу, зупиняється на першому нечисловому символі.
 * - Якщо рядок не починається з числа, повертає NaN.
 * - Не працює напряму з нерядковими типами (потрібно спочатку привести до рядка).
console.log(parseInt('42')); // Виведе: 42
console.log(parseInt('123px')); // Виведе: 123
console.log(parseInt('0xff', 16)); // Виведе: 255 (шістнадцяткове число в десятковій формі)
console.log(parseInt('10.5')); // Виведе: 10
console.log(parseInt('')); // Виведе: NaN
console.log(parseInt('Hi' + 5)); // Виведе: NaN
*/
/* //! parseFloat() (Перетворення рядка в число з плаваючою комою - Parse Float)
TODO: Витягує число з плаваючою комою з рядка, ігноруючи нечислові символи після числа, і повертає його.
 * - Приймає рядок і аналізує його для отримання числа з дробовою частиною.
 * - Починає аналіз із першого символу, зупиняється на першому нечисловому символі (крім крапки для дробів).
 * - Якщо рядок не починається з числа, повертає NaN.
 * - Не працює напряму з нерядковими типами (потрібно спочатку привести до рядка).
console.log(parseFloat('3.14')); // Виведе: 3.14
console.log(parseFloat('42.5px')); // Виведе: 42.5
console.log(parseFloat('0.001')); // Виведе: 0.001
console.log(parseFloat('10.5.5')); // Виведе: 10.5
console.log(parseFloat('')); // Виведе: NaN
console.log(parseFloat('Hi' + 5)); // Виведе: NaN
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
/* //! toFixed() (Заокруглення числа до рядка з фіксованою кількістю знаків)
TODO: Округляє число до вказаної кількості знаків після коми та повертає його як рядок.
 * - Приймає один аргумент — кількість знаків після коми (від 0 до 100).
 * - Округлення виконується за математичними правилами (до найближчого значення).
 * - Додає нулі, якщо знаків після коми недостатньо, або відсікає зайві.
 * - Повертає рядок, а не число (для числового результату потрібне додаткове перетворення).
console.log((12.3456).toFixed(2)); // Виведе: '12.35'
console.log((0.1 + 0.2).toFixed(1)); // Виведе: '0.3'
console.log(Number((0.1 + 0.2).toFixed(1))); // Виведе: 0.3
console.log((12345.6459).toFixed(1)); // Виведе: '12345.6'
console.log((0.1 + 0.2)); // Виведе: 0.30000000000000004 (неточність двійкової арифметики)
console.log((12.3456).toFixed(0)); // Виведе: '12'
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
/* //! Math.trunc() (Відкидання дробової частини - Truncate)
TODO: Відкидає дробову частину числа, повертаючи лише цілу частину без округлення.
 * - Приймає один аргумент — число для обробки.
 * - Повертає ціле число, відсікаючи всі знаки після коми (не округляє вгору чи вниз).
 * - Для позитивних чисел: просто прибирає дробову частину (наприклад, 24.83 → 24).
 * - Для негативних чисел: також відсікає дробову частину (-24.83 → -24).
console.log(Math.trunc(24.23)); // Виведе: 24
console.log(Math.trunc(24.83)); // Виведе: 24
console.log(Math.trunc(-24.23)); // Виведе: -24
console.log(Math.trunc(-24.83)); // Виведе: -24

TODO: Обробка числа з відсіканням дробової частини
const num = 24.3456;
console.log(num); // Виведе: 24.3456
console.log(num * 100); // Виведе: 2434.56
console.log(Math.trunc(num)); // Виведе: 24
console.log(Math.trunc(num * 100)); // Виведе: 2434
console.log(Math.trunc(num * 100) / 100); // Виведе: 24.34
*/
/* //! Math.random() (Генерація випадкового числа - Random Number)
TODO: Повертає псевдовипадкове число від 0 (включно) до 1 (виключно).
 * - Не приймає аргументів.
 * - Повертає число типу double у діапазоні [0, 1) (0 ≤ x < 1).
 * - Використовується для генерації випадкових значень, які можна масштабувати.
 * - Псевдовипадковість залежить від реалізації браузера чи движка JS.
console.log(Math.random()); // Виведе: випадкове число
console.log(Math.random() * 10); // Виведе: випадкове число від 0 до 10 (наприклад, 7.2345)
console.log(Math.floor(Math.random() * 10)); // Виведе: ціле число від 0 до 9
console.log(Math.floor(Math.random() * 100) + 1); // Виведе: ціле число від 1 до 100
*/
//#endregion
//#region //? Робота з числами (Практика)
/* //! Арифметичні оператори
TODO: Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин. Результат виведіть у консоль.
.//? Рішення задачі:
const totalMinutes = 90;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);
console.log(hours, ':', minutes); 
*/
/* //! Math.random()
TODO: Напиши формулу використовуючи тільки методи Math.ceil(), Math.floor(), Math.round(), Math.trunc(), Math.random(), в якій потрібно знайти рандомне число від -10 до 10 НЕ включно
.//? Рішення задачі:
const min = -10;
const max = 10;
const random = Math.trunc(Math.random() * (max - min) + min);
console.log(random);
TODO: Напиши формулу використовуючи тільки методи Math.ceil(), Math.floor(), Math.round(), Math.trunc(), Math.random(), в якій потрібно знайти рандомне число від -10 до 10 ВКЛЮЧНО
.//? Рішення задачі:
const min = -10;
const max = 10;
const random = Math.trunc(Math.random() * (max - min + 1) + min);
console.log(random); // Виведе: випадкове ціле число від -10 до 10 (наприклад, 7)
TODO: я поясню логіку:
Покроковий розбір
1. Значення змінних:
  min = -10.
  max = 10.
  max - min + 1 = 10 - (-10) + 1 = 10 + 10 + 1 = 21.
  Це означає, що діапазон включає 21 можливе число (від -10 до 10 включно).
2. Math.random():
  Генерує випадкове число від 0 (включно) до 1 (виключно).
  Наприклад, 0.7234519.
3. Масштабування до діапазону:
  Math.random() * (max - min + 1) → 0.7234519 * 21.
  0.7234519 * 21 = 15.1924899.
  Це число тепер у діапазоні від 0 до 20.999... (21 можливе значення).
4. Зсув для нижньої межі:
  Щоб діапазон починався з -10, а не з 0, додаємо min (тобто -10):
  15.1924899 + (-10) = 15.1924899 - 10 = 5.1924899.
  Чому -10? Бо min = -10 — це нижня межа нашого діапазону. Ми зсуваємо весь діапазон вниз на 10 одиниць:
  Без зсуву: від 0 до <21.
  Із зсувом на -10: від -10 до <11 (але з Math.trunc() отримуємо цілі від -10 до 10).
5. Відсікання дробової частини:
  Math.trunc(5.1924899) = 5.
  Math.trunc() просто прибирає дробову частину, залишаючи ціле число.
6. Результат:
  5 — це ціле число в діапазоні від -10 до 10.
*/
//#endregion
