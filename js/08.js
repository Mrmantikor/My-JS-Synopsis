/* //! Об’єкти (Object) - Основи
TODO: Об’єкти — це структури даних, які дозволяють зберігати інформацію у вигляді пар ключ-значення.
 * - Ключ/key — це назва властивості об'єкта, яка повинна бути унікальною в межах цього об'єкта.
 * - Значення/value — це інформація, яка зберігається у властивості. Це може бути число, рядок, масив, інший об'єкт тощо.
 * - Об’єкт створюється за допомогою фігурних дужок {}; кожна пара ключ: значення розділяється комою, а ключ і значення — двокрапкою.
 * - Корисно для організації даних, наприклад, опису користувача, продукту чи налаштувань, де кожен ключ пояснює, що означає значення.

TODO: Синтаксис:
const object = {}; // Створення порожнього об’єкта
const object = { key1: value1, key2: value2 }; // Створення об’єкта з властивостями
object.key = value; // Додавання чи зміна властивості після створення

TODO: Приклад 1. Створення порожнього об’єкта та додавання властивостей
const user = {};
user.name = "Alice"; // Додавання властивості
user.age = 25;
console.log(user); // Виводить: {name: "Alice", age: 25}

TODO: Приклад 2. Об’єкт із різними типами значень
const product = {
  name: "Laptop",
  price: 999.99,
  inStock: true,
  tags: ["electronics", "tech"],
  details: { brand: "TechCorp", year: 2023 }
};
console.log(product.tags[0]); // Доступ до елемента масиву
console.log(product.details.brand); // Доступ до вкладеного об’єкта
  Виводить: electronics, TechCorp

TODO: Приклад 3. Доступ до властивостей через крапку
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios"
  }
};
  Доступ через крапку
console.log(user.location.country);  Виводить: Jamaica
console.log(user.location.city);  Виводить: Ocho Rios

TODO: Приклад 4. Доступ через квадратні дужки
const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};
  Доступ через квадратні дужки
console.log(user["stats"]["views"]);  Виводить: 4827
console.log(user["stats"]["followers"]);  Виводить: 5603
*/
/* //! Вкладені властивості (Nested Properties) - Основи
TODO: Значенням властивості об’єкта може бути інший об’єкт, що дозволяє зберігати вкладені дані.
 * - Вкладені властивості — це об’єкти, які є значеннями інших властивостей, для групування пов’язаних даних.
 * - Створюються як звичайні властивості, де значенням указується об’єкт у фігурних дужках {}; доступ через крапку чи квадратні дужки.
 * - Дозволяють створювати ієрархію даних; можуть бути вкладені на кілька рівнів.
 * - Корисно для зберігання складних структур, наприклад, інформації про користувача чи продукт із деталями.

TODO: Синтаксис:
const object = { key: { nestedKey: value } }; // Створення об’єкта з вкладеною властивістю
console.log(object.key.nestedKey); // Доступ через крапку
console.log(object["key"]["nestedKey"]); // Доступ через квадратні дужки

TODO: Приклад 1. Створення об’єкта з вкладеними властивостями
const user = {
  name: "Jacques Gluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios"
  },
  stats: {
    followers: 5603,
    likes: 1308
  }
};
  Доступ через крапку
console.log(user.location.city);  Виводить: Ocho Rios
console.log(user.stats.followers);  Виводить: 5603

TODO: Приклад 2. Доступ до вкладених властивостей через крапку
const product = {
  name: "Smartphone",
  details: {
    manufacturer: "TechCorp",
    specs: {
      ram: "8GB",
      storage: "128GB"
    }
  }
};
  Доступ через крапку
console.log(product.details.manufacturer);  Виводить: TechCorp
console.log(product.details.specs.ram);  Виводить: 8GB

TODO: Приклад 3. Доступ через квадратні дужки
const book = {
  title: "JavaScript Basics",
  author: {
    name: "John Doe",
    contacts: {
      email: "johndoe@example.com",
      social: "Twitter"
    }
  }
};
  Доступ через квадратні дужки
console.log(book["author"]["contacts"]["email"]);  Виводить: johndoe@example.com
console.log(book["author"]["contacts"]["social"]);  Виводить: Twitter
*/
/* //! Методи об'єкта (Object Methods) - Основи
TODO: Об'єкт може містити методи — функції, які є значеннями його властивостей.
 * - Метод — це функція, що зберігається у властивості об'єкта та може взаємодіяти з його даними.
 * - Методи дозволяють об'єкту виконувати дії, наприклад, змінювати або обробляти свої дані.
 * - Виклик методу здійснюється через крапку або квадратні дужки, так само як доступ до звичайних властивостей.
 * - Корисно для створення логіки об'єкта, наприклад, зміни стану, отримання форматованих даних або взаємодії з іншими об'єктами.

TODO: Синтаксис:
const object = {
  methodName() {
      Тіло методу
  }
};
object.methodName(); // Виклик методу

TODO: Приклад 1. Простий метод для виведення повідомлення
const person = {
  sayHello() {
    console.log("Привіт усім!");
  }
};
person.sayHello(); // Викликає метод
  Виводить: "Привіт усім!"

TODO: Приклад 2. Метод для зміни властивості об'єкта
const counter = {
  value: 0,
  increment() {
    this.value += 1;
  }
};
counter.increment();
console.log(counter.value);
  Виводить: 1

TODO: Приклад 3. Метод із параметрами
const calculator = {
  add(a, b) {
    return a + b;
  }
};
console.log(calculator.add(5, 3));
  Виводить: 8
*/
/* //! this (Контекст об’єкта) - Основи
TODO: this — це ключове слово, яке посилається на об’єкт, у якому викликається метод або властивість.
 * - this — це спосіб для методу об’єкта звертатися до його власних властивостей чи інших методів.
 * - Значення this залежить від того, як викликається метод: всередині об’єкта воно вказує на цей об’єкт.
 * - Без this метод не знатиме, до якого об’єкта звертатися, якщо властивості динамічні.
 * - Корисно для роботи з даними об’єкта, наприклад, коли потрібно отримати чи змінити його властивості всередині методу.

TODO: Синтаксис:
const object = {
  property: "значення",
  method() {
    console.log(this.property); // this посилається на об’єкт
  }
};
object.method(); // Виклик методу, де this = object

TODO: Приклад 1. Управління запасами товару
const product = {
  name: "Ноутбук",
  stock: 10,
  sell() {
    this.stock = this.stock - 1; // Зменшуємо запас на 1
    console.log(`Продано ${this.name}. Залишилось: ${this.stock}`);
  }
};
product.sell(); // Продаємо один ноутбук
  Виводить: "Продано Ноутбук. Залишилось: 9"

TODO: Приклад 2. Оновлення профілю користувача
const user = {
  username: "anna123",
  email: "anna@example.com",
  updateEmail(newEmail) {
    this.email = newEmail; // Оновлюємо email користувача
    console.log("Новий email: " + this.email);
  }
};
user.updateEmail("anna.new@example.com"); // Змінюємо email
  Виводить: "Новий email: anna.new@example.com"

TODO: Приклад 3. Розрахунок вартості замовлення
const order = {
  item: "Книга",
  price: 150,
  quantity: 2,
  getTotal() {
    const total = this.price * this.quantity; // Обчислюємо загальну суму
    console.log("Замовлення: " + this.item + ". Сума: " + total + " грн");
  }
};
order.getTotal(); // Розраховуємо вартість
  Виводить: "Замовлення: Книга. Сума: 300 грн"
*/
/* //! for...in (Перебір властивостей об’єкта)
TODO: Конструкція, яка дозволяє перебрати всі перелічувані властивості об’єкта, включаючи успадковані.
 * - Що це таке: for...in — цикл, який ітерується по ключах перелічуваних властивостей об’єкта.
 * - Як працює: Проходить по всіх власних і успадкованих перелічуваних ключах у довільному порядку.
 * - Основні особливості: Перебирає лише перелічувані властивості; не включає ключі-символи.
 * - Корисно для: Аналізу структури об’єкта, роботи з ключами чи значеннями, але з обережністю через успадкування.

TODO: Синтаксис:
  Базовий синтаксис циклу
for (const key in obj) {
    console.log(key); // Виводить ключ
    console.log(obj[key]); // Виводить значення за ключем
}
  obj — об’єкт, чиї властивості перебираються

TODO: Приклад 1. Базовий об’єкт
const user = { name: "Alice", age: 25, city: "Kyiv" };
  Перебираємо ключі об’єкта
for (const key in user) {
    console.log(key); // Виводить: "name", "age", "city"
    console.log(user[key]); // Виводить: "Alice", 25, "Kyiv"
}

TODO: Приклад 2. Успадковані властивості
const parent = { country: "Ukraine" };
const child = Object.create(parent);
child.name = "Bob";
  Перебираємо ключі, включаючи успадковані
for (const key in child) {
    console.log(key); // Виводить: "name", "country"
    console.log(child[key]); // Виводить: "Bob", "Ukraine"
}

TODO: Приклад 3. Об’єкт із неперелічуваною властивістю
const obj = { a: 1 };
Object.defineProperty(obj, "b", { value: 2, enumerable: false });
  Перебираємо лише перелічувані властивості
for (const key in obj) {
    console.log(key); // Виводить: "a"
    console.log(obj[key]); // Виводить: 1
}
*/
/* //! Object.keys() (Отримання ключів об’єкта)
TODO: Метод, який повертає масив ключів перелічуваних властивостей об’єкта; повертає порожній масив [], якщо об’єкт не має властивостей.
 * - Що це таке: Object.keys() створює масив із ключами власних перелічуваних властивостей об’єкта.
 * - Як працює: Приймає об’єкт і повертає масив рядків, що представляють ключі, у порядку їх додавання (для числових — за зростанням).
 * - Основні особливості: Включає лише власні перелічувані властивості; ігнорує успадковані чи неперелічувані.
 * - Корисно для: Отримання списку ключів для ітерації, аналізу структури об’єкта чи доступу до значень.

TODO: Синтаксис:
  Базовий виклик методу
const keys = Object.keys(obj); // Повертає масив ключів перелічуваних властивостей
  obj — об’єкт, з якого витягуються ключі

TODO: Приклад 1. Базовий об’єкт
const user = { name: "Alice", age: 25, city: "Kyiv" };
  Отримуємо масив ключів
console.log(Object.keys(user)); // Виводить: ["name", "age", "city"] — ключі об’єкта

TODO: Приклад 2. Об’єкт із числовими ключами
const data = { 1: "one", 2: "two", 0: "zero" };
  Повертає ключі в порядку зростання для числових значень
console.log(Object.keys(data)); // Виводить: ["0", "1", "2"]

TODO: Приклад 3. Порожній об’єкт
const empty = {};
  Повертає порожній масив, якщо немає перелічуваних властивостей
console.log(Object.keys(empty)); // Виводить: []
*/
/* //! Object.values() (Отримання значень об’єкта)
TODO: Метод, який повертає масив значень перелічуваних властивостей об’єкта; повертає порожній масив [], якщо об’єкт не має властивостей.
 * - Що це таке: Object.values() створює масив із значеннями властивостей об’єкта; повертає порожній масив [], якщо об’єкт не має властивостей.
 * - Як працює: Приймає об’єкт і повертає масив значень у порядку додавання ключів (для рядкових ключів — порядок перелічення).
 * - Основні особливості: Перебирає лише власні перелічувані властивості; не включає успадковані чи неперелічувані властивості.
 * - Корисно для: Роботи з об’єктами, коли потрібен список значень без ключів, наприклад, для аналізу вмісту чи ітерації.

TODO: Синтаксис:
  Базовий виклик методу
const values = Object.values(obj); // Повертає масив значень перелічуваних властивостей
  obj — об’єкт, з якого витягуються значення

TODO: Приклад 1. Базовий об’єкт
const user = { name: "Alice", age: 25, city: "Kyiv" };
  Отримуємо масив значень
console.log(Object.values(user)); // Виводить: ["Alice", 25, "Kyiv"] — значення властивостей

TODO: Приклад 2. Об’єкт із числовими ключами
const data = { 1: "one", 2: "two", 0: "zero" };
  Повертає значення в порядку числових ключів (0, 1, 2)
console.log(Object.values(data)); // Виводить: ["zero", "one", "two"]

TODO: Приклад 3. Порожній об’єкт
const empty = {};
  Повертає порожній масив, якщо немає перелічуваних властивостей
console.log(Object.values(empty)); // Виводить: []
*/
/* //! structuredClone (Структуроване клонування)
TODO: structuredClone — це метод, який створює глибоку копію об’єкта чи значення, незалежну від оригіналу.
 * - Метод копіює об’єкт зі всіма вкладеними властивостями, масивами чи об’єктами, а не просто посилання на них.
 * - Працює так: приймає значення (об’єкт, масив тощо) і повертає його повну копію; зміни в копії не впливають на оригінал.
 * - Підтримує складні структури (об’єкти, масиви, Map, Set), але не копіює функції чи DOM-елементи.
 * - Корисно для безпечного дублювання даних, наприклад, при редагуванні об’єкта без зміни початкового.

TODO: Синтаксис:
const copy = structuredClone(original); // Створює глибоку копію original

TODO: Приклад 1. Копіювання списку автомобілів із перевіркою
const allCars = [
  { make: 'Honda', model: 'CR-V', amount: 14, price: 24045 },
  { make: 'Honda', model: 'Accord', amount: 2, price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', amount: 8, price: 24195 },
  { make: 'Mazda', model: 'CX-9', amount: 7, price: 31520 }
];

const cloneCars = () => structuredClone(allCars); // Функція для створення копії

const copiedCars = cloneCars(); // Отримуємо копію масиву
copiedCars[0].amount = 10; // Змінюємо кількість першого автомобіля в копії

console.log("Оригінал: " + allCars[0].amount); // Перевіряємо оригінал
console.log("Копія: " + copiedCars[0].amount); // Перевіряємо копію
console.log("Чи однакові об’єкти? " + (allCars[0] === copiedCars[0])); // Перевіряємо, чи це різні об’єкти
  Виводить: "Оригінал: 14", "Копія: 10", "Чи однакові об’єкти? false"
*/
