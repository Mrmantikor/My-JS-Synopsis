//#region //? Арифметичні оператори
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
//#region //? Логічні оператори
/* //! && (Логічне "І" - Logical AND)
TODO: Використовується для перевірки кількох умов одночасно або повернення першого "хибного" значення.
 * - `умова1 && умова2` → Повертає `true`, якщо обидві умови `true`, або перше "хибне" значення.
 * - Якщо перша умова `false`, другу навіть не перевіряє (оптимізація).
 * - Якщо обидві умови `true`, повертає останнє "істинне" значення.
 * - `false` — це "хибне" значення; зупиняє перевірку і повертається, якщо зустрічається.
 * - Корисно для перевірки, що всі умови виконані, або для умовного виконання.

TODO: Синтаксис:
умова1 && умова2 

TODO: Приклади:
console.log(true && 'Hello'); // Виводить: 'Hello' (обидва істинні, повертає останнє)
console.log('Hello' && 'World'); // Виводить: 'World' (обидва істинні, повертає останнє)
console.log(false && 'Hello'); // Виводить: false (перше хибне, далі не перевіряє)
console.log(0 && 42); // Виводить: 0 (0 — хибне, зупиняється)
console.log(null && undefined); // Виводить: null (null — хибне, зупиняється)
console.log('' && false && 0); // Виводить: '' (перше хибне, зупиняється)
console.log((true && 5) + (10 && 'text')); // Виводить: '5text' (5 + 'text')
console.log((false && 5) || (true && 10)); // Виводить: 10 (false зупиняє, 10 повертається)
console.log((null && '') * (true && 1)); // Виводить: 0 (null * 1 = 0)
*/
/* //! || (Логічне "АБО" - Logical OR)
TODO: Використовується для перевірки кількох умов одночасно або повернення першого "істинного" значення.
 * - `умова1 || умова2` → Повертає `true`, якщо хоча б одна умова `true`, або перше "істинне" значення.
 * - Якщо перша умова `true`, другу навіть не перевіряє (оптимізація).
 * - Якщо обидві умови `false`, повертає останнє значення (яке є "хибним").
 * - `false` — це "хибне" значення; у логічному "АБО" ігнорується, якщо є "істинне" далі.
 * - Корисно для встановлення значень за замовчуванням, перевірки множинних варіантів.

TODO: Синтаксис:
умова1 || умова2 

TODO: Приклади:
console.log(false || 'Hello'); // Виводить: 'Hello' (false ігнорується, повертає перше істинне)
console.log('Hello' || 'World'); // Виводить: 'Hello' (перше істинне, World не перевіряється)
console.log(0 || 42); // Виводить: 42 (0 — хибне, 42 — істинне)
console.log(null || undefined); // Виводить: undefined (null і undefined — хибні, повертає останнє)
console.log(undefined || '' || false || 0); // Виводить: 0 (усі хибні, повертає останнє)
console.log((null || '') * (false || true)); // Виводить: 0 ('' * true = 0 * 1 = 0)
console.log((NaN || '') - (false || true)); // Виводить: -1 ('' - true = 0 - 1 = -1)
console.log((NaN || '') + (false || true)); // Виводить: '01' ('' + true = '0' + '1' = '01')
console.log((NaN || '') / (false || true)); // Виводить: 0 ('' / true = 0 / 1 = 0)
console.log((null || undefined) / (0 || 1)); // Виводить: NaN (undefined / 1 = NaN)
console.log((undefined || 0) * ('' || false)); // Виводить: 0 (0 * false = 0 * 0 = 0)
*/
/* //! ?? (Оператор нульового злиття - Nullish Coalescing Operator)
TODO: Повертає перше "не нульове" значення (не null і не undefined) із кількох варіантів.
 * - `значення1 ?? значення2` → Повертає `значення1`, якщо воно не `null` і не `undefined`, інакше `значення2`.
 * - Не вважає `false`, `0`, `''` "хибними" — тільки `null` і `undefined` є "нульовими".
 * - Якщо перше значення не "нульове", друге не перевіряється (оптимізація).
 * - Корисно для встановлення значень за замовчуванням, коли потрібно ігнорувати лише null/undefined.

TODO: Синтаксис:
значення1 ?? значення2 

TODO: Приклади:
console.log(null ?? 'Hello'); // Виводить: 'Hello' (null — нульове, береться друге)
console.log(undefined ?? 'World'); // Виводить: 'World' (undefined — нульове)
console.log(false ?? 'Yes'); // Виводить: false (false не нульове)
console.log(0 ?? 42); // Виводить: 0 (0 не нульове)
console.log('' ?? 'text'); // Виводить: '' (порожній рядок не нульовий)
console.log('Hello' ?? 'World'); // Виводить: 'Hello' (перше не нульове)
console.log((null ?? 5) + (undefined ?? 10)); // Виводить: 15 (5 + 10)
console.log((false ?? '') * (0 ?? 1)); // Виводить: 0 (false * 1 = 0)
console.log((null ?? undefined) ?? 'default'); // Виводить: 'default' (обидва нульові)
*/
/* //! ! (Логічне "НЕ" - Logical NOT)
TODO: Інвертує булеве значення операнда, повертаючи true для falsy значень і false для truthy значень.
 * - Оператор перевіряє операнд.
 * - Якщо значення є falsy (неістинне), повертає true.
 * - Якщо значення є truthy (істинне), повертає false.
 * - Falsy значення: false, 0, '', null, undefined, NaN. Truthy — усе інше.
 * - Завжди повертає булевий тип (true або false).
console.log(!false); // Виведе: true
console.log(!'Hello'); // Виведе: false
console.log(!0); // Виведе: true
console.log(!null); // Виведе: true
console.log(!(undefined && '' && false)); // Виведе: true
console.log(!null * !false); // Виведе: false
console.log(!NaN - !false); // Виведе: 0
console.log(!NaN + !true); // Виведе: 'truefalse'
console.log(!NaN / !false); // Виведе: NaN
console.log(!null / !(0 && 1)); // Виведе: NaN
console.log(!undefined * !('' && false)); // Виведе: 1
*/
/* //! === (Суворе порівняння - Strict Equality)
TODO: Порівнює два операнди на рівність значень і типів, повертаючи true, якщо вони ідентичні, і false, якщо ні.
 * - Оператор перевіряє лівий і правий операнди.
 * - Якщо типи даних різні, повертає false без приведення типів.
 * - Якщо типи однакові, порівнює значення: повертає true при повній ідентичності, інакше false.
 * - Не виконує примусове приведення типів (на відміну від ==).
console.log(false === false); // Виведе: true
console.log('Hello' === 'Hello'); // Виведе: true
console.log(0 === '0'); // Виведе: false
console.log(null === undefined); // Виведе: false
console.log(undefined === ('' && false)); // Виведе: false
console.log((null === null) * (false === true)); // Виведе: 0
console.log((NaN === NaN) - (false === true)); // Виведе: NaN
console.log((5 === '5') + (false === true)); // Виведе: 0
console.log((NaN === '') / (false === false)); // Виведе: NaN
console.log((null === undefined) / (0 === 0)); // Виведе: 0
console.log((undefined === undefined) * ('' === false)); // Виведе: 0
*/
/* //! !== (Суворе порівняння на нерівність - Strict Inequality)
TODO: Порівнює два операнди на нерівність значень або типів, повертаючи true, якщо вони різні, і false, якщо ідентичні.
 * - Оператор перевіряє лівий і правий операнди.
 * - Якщо типи даних різні, повертає true без приведення типів.
 * - Якщо типи однакові, порівнює значення: повертає true, якщо значення різні, інакше false.
 * - Не виконує примусове приведення типів (на відміну від !=).
console.log(false !== true); // Виведе: true
console.log('Hello' !== 'World'); // Виведе: true
console.log(0 !== '0'); // Виведе: true
console.log(null !== undefined); // Виведе: true
console.log(undefined !== ('' && false)); // Виведе: true
console.log((null !== null) * (false !== true)); // Виведе: 0
console.log((NaN !== NaN) - (false !== false)); // Виведе: 0
console.log((5 !== '5') + (false !== true)); // Виведе: 2
console.log((NaN !== '') / (false !== false)); // Виведе: Infinity
console.log((null !== undefined) / (0 !== 0)); // Виведе: Infinity
console.log((undefined !== undefined) * ('' !== false)); // Виведе: 0
*/
/* //! Number (console.log(Number))
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
*/
/* //! String (console.log(String))
console.log(String(0)); //0;
console.log(String(-0)); //0;
console.log(String(1)); //1;
console.log(String(''));
console.log(String('f')); //f;
console.log(String(NaN)); //NaN;
console.log(String(null)); //null;
console.log(String(undefined)); //undefined;
console.log(String(false)); //false;
console.log(String(true)); //true;
*/
/* //! Boolean (console.log(Boolean))
console.log(Boolean(0)); // false
console.log(Boolean(-0)); //false
console.log(Boolean('')); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(false)); //false
console.log(Boolean(true)); //true
console.log(Boolean(1)); //true
console.log(Boolean('f')); //true
*/
//#endregion
