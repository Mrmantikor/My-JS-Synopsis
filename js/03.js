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
TODO: Повертає перший неістинний (falsy) операнд або останній операнд, якщо всі істинні (truthy).
 * - Оператор перевіряє ліву частину виразу.
 * - Якщо ліве значення неістинне (falsy), він повертає це значення.
 * - Якщо ліве значення істинне (truthy), оператор перевіряє праву частину та повертає її значення.
 * - Falsy значення: false, 0, '', null, undefined, NaN. Truthy — усе інше.
console.log(false && 'Hello'); // Виведе: false
console.log('Hello' && 'World'); // Виведе: 'World'
console.log(0 && 42); // Виведе: 0
console.log(null && undefined); // Виведе: null
console.log(undefined && '' && false && 0); // Виведе: undefined
console.log((null && '') * (false && true)); // Виведе: 0
console.log((NaN && '') - (false && true)); // Виведе: NaN
console.log((NaN && '') + (false && true)); // Виведе: NaN
console.log((NaN && '') / (false && true)); // Виведе: NaN
console.log((null && undefined) / (0 && 1)); // Виведе: NaN
console.log((undefined && 0) * ('' && false)); // Виведе: undefined
*/
/* //! || (Логічне "АБО" - Logical OR)
TODO: Повертає перший істинний (true) операнд, або остання істинну умову.
 * - Оператор перевіряє ліву частину виразу.
 * - Якщо ліве значення істинне (true), він повертає це значення.
 * - Якщо ліве значення неістинне (false), оператор перевіряє праву частину та повертає її значення.
console.log(false || 'Hello');
console.log('Hello' || 'World'); 
console.log(0 || 42);
console.log(null || undefined); 
console.log(undefined || '' || false || 0); 
console.log((null || '') * (false || true)); 
console.log((NaN || '') - (false || true)); 
console.log((NaN || '') + (false || true)); 
console.log((NaN || '') / (false || true)); 
console.log((null || undefined) / (0 || 1));
console.log((undefined || 0) * ('' || false));
*/
/* //! ?? (Оператор нульового злиття - Nullish Coalescing Operator)
TODO: Повертає перший операнд, який не є null або undefined, або останній операнд, якщо всі є null/undefined.
 * - Оператор перевіряє ліву частину виразу.
 * - Якщо ліве значення не є null або undefined (тобто "не нульове"), він повертає це значення.
 * - Якщо ліве значення є null або undefined, оператор перевіряє праву частину та повертає її значення.
 * - На відміну від ||, ?? не вважає 0, '' або false "неістинними" — він працює лише з null і undefined.
console.log(false ?? 'Hello'); // Виведе: false
console.log('Hello' ?? 'World'); // Виведе: 'Hello'
console.log(0 ?? 42); // Виведе: 0
console.log(null ?? undefined); // Виведе: undefined
console.log(undefined ?? '' ?? false ?? 0); // Виведе: ''
console.log((null ?? '') * (false ?? true)); // Виведе: 0
console.log((NaN ?? '') - (false ?? true)); // Виведе: NaN
console.log((NaN ?? '') + (false ?? true)); // Виведе: 'false'
console.log((NaN ?? '') / (false ?? true)); // Виведе: NaN
console.log((null ?? undefined) / (0 ?? 1)); // Виведе: NaN
console.log((undefined ?? 0) * ('' ?? false)); // Виведе: 0
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
