/* //! this (Контекст об’єкта) - Основи
TODO: this — це ключове слово, яке посилається на об’єкт, у якому викликається метод або властивість.
 * - `this` дозволяє методу звертатися до властивостей та інших методів цього ж об’єкта.
 * - Значення `this` залежить від контексту виклику: у методах об’єкта воно посилається на сам об’єкт.
 * - У глобальному контексті (`window` в браузері або `global` в Node.js) значення `this` різне.
 * - У строгому режимі (`"use strict"`) значення `this` у глобальному контексті буде `undefined`.
 * - У стрілкових функціях `this` не створює власний контекст, а наслідує його від батьківської області.
 * - Корисно для роботи з даними об’єкта, наприклад, коли потрібно отримати чи змінити його властивості всередині методу.

TODO: Синтаксис:
const object = {
  property: "значення",
  method() {
    console.log(this.property); // this посилається на object
  }
};
object.method(); // Виклик методу, де this = object

TODO: Приклад 1. Управління запасами товару
const product = {
  name: "📌 Ноутбук",
  stock: 10,
  sell() {
    this.stock -= 1; // Зменшуємо запас на 1
    console.log(`✅ Продано: ${this.name}. Залишилось: ${this.stock}`);
  }
};
product.sell(); // Продаємо один ноутбук
    Виводить: ✅ Продано: 📌 Ноутбук. Залишилось: 9

TODO: Приклад 2. Оновлення профілю користувача
const user = {
  username: "anna123",
  email: "anna@example.com",
  updateEmail(newEmail) {
    this.email = newEmail; // Оновлюємо email користувача
    console.log(`📩 Новий email: ${this.email}`);
  }
};
user.updateEmail("anna.new@example.com"); // Змінюємо email
    Виводить: 📩 Новий email: anna.new@example.com

TODO: Приклад 3. Розрахунок вартості замовлення
const order = {
  item: "📖 Книга",
  price: 150,
  quantity: 2,
  getTotal() {
    const total = this.price * this.quantity; // Обчислюємо загальну суму
    console.log(`🛒 Замовлення: ${this.item}. Сума: ${total} грн`);
  }
};
order.getTotal(); // Розраховуємо вартість
    Виводить: 🛒 Замовлення: 📖 Книга. Сума: 300 грн

TODO: Приклад 4. Проблема втрати контексту `this`
const person = {
  name: "Олег",
  greet() {
    console.log(`Привіт, я ${this.name}`);
  }
};

const sayHello = person.greet; // Передаємо метод у змінну
sayHello(); // `this` втрачається, name буде undefined у строгому режимі
    Виводить: Привіт, я undefined (або помилка в strict mode)

TODO: Приклад 5. Використання стрілкових функцій (this наслідується)
const team = {
  lead: "Марія",
  showLead: function () {
    const arrowFunction = () => console.log(`Керівник: ${this.lead}`);
    arrowFunction(); // `this` наслідується від showLead, тому працює правильно
  }
};
team.showLead();
    Виводить: Керівник: Марія
*/
