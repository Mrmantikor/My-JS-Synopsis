//#region //! ES, DOM, BOM
/* //! ОСНОВИ Об'єктна модель документа
 * JavaScript in browsers
 *
 * - ECMAScript (ES) - це основа мови JavaScript.
 * - DOM (Document Object Model) - Керує вмістом сторінки (елементами HTML). Це програмний інтерфейс для веб-документів. Він представляє HTML-сторінку у вигляді дерева об'єктів, де кожен елемент є окремим вузлом (Node), до якого можна звертатися та змінювати його за допомогою JavaScript.
 * - BOM (Browser Object Model) - Керує вікном браузера і його параметрами. Це модель об'єктів браузера, яка дозволяє JavaScript взаємодіяти з вікном браузера та його елементами, що не належать до DOM

.//! Навігація по DOM
TODO: Елементи DOM-дерева мають ієрархічне відношення один до одного. Для опису відносин використовуються терміни:
 * - предок (ancestor)
 * - нащадок (descendant)
 * - батько (parent)
 * - дитина (child)
 * - сусід (sibling)
*/
/* //! document.querySelector('selector') (Пошук елементів)
TODO: document.querySelector('selector')  Метод використовується для пошуку першого елемента на сторінці, який відповідає вказаному CSS-селектору.
 * Виконує пошук HTML елементу:
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 * - Повертає ПЕРШИЙ знайдений елемент або null, якщо елемента немає.
 * - Використовує CSS-синтаксис селекторів, як у CSS.
 * - console.log(); -→ Якщо передати DOM-елемент, у консолі відобразиться його HTML-структура.
 * - console.dir(); -→ Виводить повний об'єкт із його властивостями та методами у вигляді дерева.
 * 
TODO var - 1 //? За назвою тегу
HTML
<button class="clas-button js-button" id="magic-button" type="button">TEXT</button>

JS
const consoleButton = document.querySelector('button'); 
console.log(consoleButton);
console.dir(consoleButton);
TODO var - 2 //? За назвою класу
HTML
<button class="clas-button js-button" id="magic-button" type="button">TEXT</button>

JS
const consoleButton = document.querySelector('.clas-button'); 
console.dir(consoleButton);
console.log(consoleButton);
TODO var - 3 //? За ID 
HTML
<button class="clas-button js-button" id="magic-button" type="button">TEXT</button>

JS
const consoleButton = document.querySelector('#magic-button'); 
console.log(consoleButton);
console.dir(consoleButton);
*/
/* //! document.querySelectorAll('selector') (Пошук ВСІХ елементів)
TODO: document.querySelectorAll('selector') Метод, який повертає всі елементи на сторінці, що відповідають вказаному CSS-селектору.
 * Виконує пошук HTML елементу:
 * - За назвою тегу
 * - За назвою класу
 * - За ID
 * - Повертає всі знайдені елементи або пустий псевдо-масив, якщо елемента немає.
 * - Використовує CSS-синтаксис селекторів, як у CSS.
 * 
HTML
<ul class="list">
  <li class="link"></li>
  <li class="link"></li>
  <li class="link"></li>
  <li class="link"></li>
</ul>;

JS
const linkSelector = document.querySelectorAll('.link');
console.log(linkSelector);
console.dir(linkSelector);
*/
/* //! Перезапис атрибутів
HTML
<ul class="list">
  <li class="link">
    <a href="https://www.google.com/" class="social" target="_blank">
      social
    </a>
  </li>
</ul>;

JS
const browser = document.querySelector('.social');
console.log(browser); -→ HTML-структура
console.log(browser.href); -→ https://www.google.com/
browser.href = 'https://www.bing.com/'; -→ Перезаписуємо
console.log(browser.href); -→ https://www.bing.com/
*/
/* //! .textContent (Змінювати текстовий вміст)
TODO: textContent - це властивість, яка дозволяє отримувати або змінювати текстовий вміст елемента, включаючи весь текст усередині нього, навіть прихований через display: none

const elP = document.querySelector('.text');
const elSpan = document.querySelector('.sub-text');
console.log(elP.textContent); -→ Bohdan Vasylovich
console.log(elSpan.textContent); -→ Vasylovich
elSpan.textContent = 'Lukashenko'; -→ Змінюємо Span
console.log(elP.textContent); -→ Bohdan Lukashenko
console.log(elSpan.textContent); -→ Lukashenko
*/
//#region //! Властивості
/* //! .classList 
TODO: - властивість, яка дозволяє додавати, видаляти чи переводити класи елемента
 * - .add('class') Додає клас
 * - .remove('class') Видаляє клас
 * - .toggle('class') Перемикає
 * - .contains('class') Перевіряє, чи є клас у елемента (true або false)
 * - .replace('old', 'new') Замінює один клас іншим
 * 
HTML
<a href="https://www.google.com/" class="social" target="_blank">social</a>
JS
const link = document.querySelector('.social');
console.log(link.classList);
*/
/* //! .classList.add('class') (Додає новий клас)
const link = document.querySelector('.social');
link.classList.add('new-class');

console.log(link);
TODO: Можна вказати більше одного класу, вказавши кілька аргументів через кому:
const link = document.querySelector('.social');
link.classList.add('new-class', 'new-social-class', 'new-social-class1');

console.log(link);
*/
/* //! .classList.remove('class') (Видаляє клас)
TODO: Якщо спробувати видалити клас, якого не існує - не буде помилки, просто нічого не відбудеться.
const link = document.querySelector('.social');
link.classList.remove('social');

console.log(link);
TODO: Дозволяє видаляти кілька класів одночасно, просто передаючи їх через кому.
element.classList.remove('class1', 'class2', 'class3');
*/
/* //! .classList.toggle('class') (Перемикає)
TODO: Додає клас, якщо його немає, і видаляє, якщо він є.
  const button = document.getElementById('toggle-btn');
  const text = document.getElementById('text');

  button.addEventListener('click', () => {
    text.classList.toggle('highlight');
  });
 */
/* //! .classList.contains('class') (Перевіряє True/False)
TODO: Перевіряє, чи є клас у елемента (true або false)
const link = document.querySelector('.social');
const trueOrFalse = link.classList.contains('new-class');

console.log(trueOrFalse);
*/
/* //! .classList.replace('old', 'new') (Замінює)
TODO: Замінює один клас іншим
const selectorReplace = document.querySelector('.social');

const oldToNew = selectorReplace.classList.replace('social', 'new-social-class');

console.log(selectorReplace);
 */
//#endregion
//#region //! Атрибути
/* //! .hasAttribute(name) (Перевіряє True/False)
TODO: Перевіряє, чи є атрибут (true) - атрибут існує, (false) - не існує.
const atribute = document.querySelector('.social');
const hasOrNot = atribute.hasAttribute('href');

console.log(hasOrNot);
*/
/* //! .getAttribute(name) (отримує значення атрибута)
TODO: Якщо атрибута немає, поверне null.
const atribute = document.querySelector('.social');
const getOrNot = atribute.getAttribute('href');

console.log(getOrNot);
*/
/* //! .setAttribute(name, value) (Перезаписує)
TODO: Додає новий атрибут до елемента або змінює значення існуючого.
  const link = document.querySelector('a');
  const button = document.getElementById('changeLink');

  button.addEventListener('click', () => {
    link.setAttribute('href', 'https://www.youtube.com/'); -→ змінюємо посилання
    link.setAttribute('class', 'new-social'); -→ змінюємо клас
    link.setAttribute('target', '_self'); -→ відкривати у цьому ж вікні
  });

*/
/* //! .removeAttribute(name) (Видаляє атрибут)
TODO: Якщо спробувати видалити атрибут, якого не існує - не буде помилки, просто нічого не відбудеться.
const atribute = document.querySelector('.social');
atribute.removeAttribute('href');

console.log(atribute);
*/
//#endregion
//#region //! Елементи
/* //! .createElement(name) (Створити елемент)
TODO: Метод document.createElement(name) використовується для створення нового HTML-елемента в JavaScript.
 * - Елемент створюється в пам’яті, а не одразу в DOM. 
 * - Створює лише сам елемент, без вмісту. 
 * - Цей метод активно використовується для динамічного створення контенту на веб-сторінках, наприклад, при генерації списків, карток товарів, повідомлень у чаті тощо.
 * 
const newParagraph = document.createElement('p');
console.log(newParagraph);
*/
/* //!  element.remove() (Видалити елемент)
const del = document.querySelector('.append-preppend-box'); -→ Оголошуємо інсуючий елемент
del.remove(); -→ Видаляємо елемент
*/
/* //! .append() (Додати в КІНЕЦЬ в DOM)
TODO: Додає елементи або текст у DOM в кінець вибраного елемента.
 * - Може приймати кілька аргументів одночасно (елементи та текст).
 * - Додає новий вузол (newElement) або рядковий текст ("Текст").
 * - Додає вміст всередину вибраного елемента
.//? Зверни увагу! Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого місця й додається у нове. Отже, є правило: один і той самий елемент не може бути одночасно у двох місцях.
const box = document.querySelector('.append-preppend-box'); -→ Отримуємо елемент за класом
const first = document.createElement('p');
first.textContent = '⬆ Початковий елемент';
box.prepend(first); -→ Додає на початок
 */
/* //! .prepend() (Додати НА ПОЧАТОК в DOM)
TODO: Додає елементи або текст у DOM на початок вибраного елемента.
 * - Може приймати кілька аргументів одночасно (елементи та текст).
 * - Додає новий вузол (newElement) або рядковий текст ("Текст").
 * - Додає вміст всередину вибраного елемента
.//? Зверни увагу! Якщо елемент для додавання вже знаходиться в DOM, то він видаляється зі свого старого місця й додається у нове. Отже, є правило: один і той самий елемент не може бути одночасно у двох місцях.
const box = document.querySelector('.append-preppend-box'); //-→ Отримуємо елемент за класом
const last = document.createElement('p');
last.textContent = '⬇ Кінцевий елемент';
box.append(last); //-→ Додає в кінець
 */
/* //! element.innerHTML (Отримує, додає і тд)
TODO: Метод innerHTML - отримує або встановлює вміст елемента в форматі HTML. Він дозволяє працювати з вмістом елемента як з рядком HTML-коду, що включає як текст, так і інші HTML-елементи.
 * - Отримання вмісту
 * - Встановлення вмісту
 * - Зміна вмісту (додавання до існуючого)
 * - Використання порожнього рядка ("")
 * - Якщо вписати порожній рядок у innerHTML, то весь вміст елемента буде видалено, і він залишиться порожнім.
 * //! Використання innerHTML який отримано від користувача або з ненадійного джерела, може призвести до XSS-атак, оскільки зловмисники можуть вставити шкідливий код.
 * 
.//? Отримання вмісту
const div = document.querySelector('.inner');
console.log(div.innerHTML);
.//? Встановлення вмісту
const div = document.querySelector('.inner');
div.innerHTML = '<strong>Новий текст</strong>';
.//? Зміна вмісту (додавання до існуючого)
const div = document.querySelector('.inner');
div.innerHTML += ' + Доданий текст';
.//? Використання порожнього рядка ("")
const div = document.querySelector('.inner');
div.innerHTML = '';
*/
/* //! element.insertAdjacentHTML(position, string) (Сучасний InnerHTML)
TODO: сучасний метод!!! Синтаксис:
 * - position - місце, куди вставити HTML.
 * - string - HTML-код, який потрібно вставити.
.//? position Може бути:
 * - "beforebegin" - перед самим елементом.
 * - "afterbegin" - всередині елемента, перед першим дочірнім вузлом.
 * - "beforeend" - всередині елемента, після останнього дочірнього вузла.
 * - "afterend" - після самого елемента.
 * //! Дозволяє додавати HTML без перезапису існуючого контенту.
 * //! Використовується для швидкої вставки без порушення структури DOM.
 * //! Більш безпечний, ніж innerHTML, оскільки не видаляє обробники подій у вже існуючих елементах
 * 
.//? beforebegin
const section = document.querySelector('.section-wrap');
section.insertAdjacentHTML('beforebegin', '<p>Перед секцією</p>');
.//? afterbegin
const section = document.querySelector('.section-wrap');
section.insertAdjacentHTML('afterbegin', '<p>На початку секції</p>');
.//? beforeend
const section = document.querySelector('.section-wrap');
section.insertAdjacentHTML('beforeend', '<p>В кінці секції</p>');
.//? afterend
const section = document.querySelector('.section-wrap');
section.insertAdjacentHTML('afterend', '<p>Після секції</p>');
*/
//#endregion
//#region //! Події
/* //! element.addEventListener(event, handler, options);
TODO: Використовується для додавання обробників подій до HTML-елементів. Він дозволяє прив’язувати кілька обробників до одного елемента, не перезаписуючи попередні.
 * - event(подія) - назва події ("click", "keydown",)
 * - handler(функція) -  код, який буде виконуватись при настанні події.
 * - options(необов'язковий параметр) - true або false (визначає фазу спрацьовування: false - "спливання", true - "занурення").
 * 
.//? Додавання обробника кліку (click)
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
  alert('Кнопку натиснуто!');
});
.//? Обробка наведення миші (mouseover)
const section = document.querySelector('.section-wrap');

section.addEventListener('mouseover', () => {
  section.style.backgroundColor = 'lightblue';
});
*/
/* //! element.removeEventListener(event, handler, options)
TODO: Використовується для видалення обробників подій, які були додані за допомогою addEventListener()
 * - event(подія) - тип події, яку потрібно видалити ("click", "keydown",)
 * - handler(функція) - посилання на функцію, яка була прив’язана через addEventListener()
 * - options(необов'язковий параметр) - повинно співпадати зі значенням, яке використовувалося в addEventListener()
 * //! ВАЖЛИВО! removeEventListener() не працює, якщо функція була передана у addEventListener() як анонімна!
 * 
.//? Видалення обробника після одного кліку
const button = document.querySelector('.btn');
function handleClick() {
  console.log('Кнопка натиснута!');
  button.removeEventListener('click', handleClick);
}
button.addEventListener('click', handleClick);
Після першого кліку в консоль виведеться "Кнопка натиснута!", але на другий раз подія вже не спрацює, бо обробник було видалено.
*/
/* //! Event (Об'єкт події)
TODO: event містить детальну інформацію про подію.
 * - event.type - тип події ("click", "keydown", "mouseover" тощо).
 * - event.target - елемент, на якому відбулася подія.
 * - event.currentTarget - елемент, до якого доданий обробник події.
 * - event.clientX / event.clientY - координати кліку відносно вікна.
 * - event.pageX / event.pageY - координати кліку відносно документа.
 * - event.key - клавіша, яку натиснули (для подій клавіатури).
 * - event.code - фізічний код клавіші незалежно від мови розкладки.
 * - event.preventDefault() - відміняє стандартну дію браузера (наприклад, перехід по посиланню).
 * - event.stopPropagation() - зупиняє спливання події (подія не передається вище по DOM).
 * - event.stopImmediatePropagation() - зупиняє виконання всіх обробників події на цьому елементі.
 * - event.detail - додаткова інформація про подію (наприклад, кількість кліків для `dblclick`).
 * //! ВАЖЛИВО! Використання event без параметра у функції-обробнику може викликати помилку!

const button = document.querySelector('.btn');
const handleClick = event => {
  console.log('event: ', event);
  console.log('event type: ', event.type);
  console.log('currentTarget: ', event.currentTarget);
};
button.addEventListener('click', handleClick);
*/
/* //! KeyboardEvent (Події клавіатури)
TODO: Об'єкт KeyboardEvent використовується для роботи з подіями клавіатури, такими як натискання (keydown), відпускання (keyup) або введення символів (keypress, але його застаріло).
document.addEventListener('keydown', event => {
  console.log('Ви натиснули:', event.key);
});
*/
//#endregion

//#endregion

/*
dataset
style
*/
