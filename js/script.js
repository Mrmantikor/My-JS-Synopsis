/* //! time() timeEnd()
console.time('for...of');
console.timeEnd('for...of');
*/
/* //! if else
const lang = prompt('How your love languages?');
if (lang === 'javascript') {
  console.log('Yes of course!!!');
} else {
  console.log('Are you sure?!');
}
*/
/* //! prompt()
TODO: Напишіть програму, яка запитує у користувача поточну погоду (через prompt) і виводить відповідне повідомлення в консоль. Якщо користувач вводить "rainy", програма виводить "take umbrella". Якщо "sunny" — "take glasses". Якщо "cold" — "dress warmer". В інших випадках виводиться "have a nice day".
const weather = prompt('How weather now?');
if (weather === 'rainy') {
  console.log('take umbrella');
} else if (weather === 'sunny') {
  console.log('take glasses');
} else if (weather === 'cold') {
  console.log('dress warmer');
} else {
  console.log('have a nice day');
}
*/

/*
const size = prompt('pizza size').trim().toLowerCase();

if (size === 'small') {
  console.log('Price: $800');
} else if (size === 'medium') {
  console.log('Price: $1200');
} else if (size === 'large') {
  console.log('Price: $1500');
} else { console.log(); }
*/

/*



*/

// #region //?_Об'єкти_Теоргія?//
/* //! dot notation  
human.mood = "happy";

 const human = {
     name: "Mango",
     hobby: "reading",
     age: 20,
     greet(){
         console.log(`Hello ${human.name}`);
     }
};
human.greet()
*/
/* //! brackets notation
human["mood"] = "happy";

 const human = {
     name: "Mango",
     hobby: "reading",
     age: 20,
     greet(){
         console.log(`Hello ${human.name}`);
     }
};
human.greet()
*/
/* //! compound brackets notation
const userMood = "mood";
human[userMood] = "happy";

 const human = {
     name: "Mango",
     hobby: "reading",
     age: 20,
     greet(){
         console.log(`Hello ${human.name}`);
     }
};
human.greet()
 console.log(human);
*/

/* //! for...in
TODO: Порахуйте загальну кількість відгуків.
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

console.log('feedbacks:', feedbacks);

let totalFeedbacks = 0;

for (const key in feedbacks) {
  totalFeedbacks += feedbacks[key];
}

console.log('totalFeedbacks:', totalFeedbacks);
*/
/* //! Object.keys()
TODO: Порахуйте загальну кількість відгуків.
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const feedbacksKeys = Object.keys(feedbacks);

let totalFeedbacks = 0;

for (const key of feedbacksKeys) {
  totalFeedbacks += feedbacks[key];
}

console.log('totalFeedbacks:', totalFeedbacks);
*/
/* //! Object.values()
TODO: Порахуйте загальну кількість відгуків.
const feedbacks = {
  good: 5,
  neutral: 10,
  bad: 3,
};

const feedbacksValues = Object.values(feedbacks);

let totalFeedbacks = 0;

for (const value of feedbacksValues) {
  totalFeedbacks += value;
}

console.log(totalFeedbacks);
*/
// #endregion
// #region //?_Об'єкти_Практика?//
/* //! Task #1 Object.keys()
TODO: Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт. Якщо об'єкт має такий ключ - поверне true
TODO – Var 1
const obj = {
    name: 'Igor',
    car: 'Mercedes',
    carColor: 'black',
  };

 const checkObj = function (obj, key){
     const keys = Object.keys(obj);
     for (const item of keys){
         if (item === key){
             return true;
         }
     }
     return false;
}
 
console.log(checkObj(obj, "car"));
TODO – Var 2
const obj = {
    name: 'Igor',
    car: 'Mercedes',
    carColor: 'black',
  };

 const checkObj = function (obj, key){
     return Object.keys(obj).includes(key);
 }
console.log(checkObj(obj, "car"));
*/
//#endregion

/*
TODO: У нас є об'єкт, у якому зберігатимуться зарплати нашої команди. Напишіть код для сумування всіх зарплат і збережіть його результат у змінній sum. Якщо об'єкт salaries порожній, то результат має бути 0
TODO – Var 1 Object.entries()
const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 222 ,
};
let sum = 0;
const array = Object.entries(salaries);
for (const arrayElement of array) {
    sum+=arrayElement[1];
}
console.log(sum);
TODO – Var 2 Object.keys()
const salaries = {
    Mango: 100,
    Poly: 160,
    Ajax: 222,
};

const keys = Object.keys(salaries);
let sum = 0;
for (let i = 0; i < keys.length; i++) {
    sum += salaries[keys[i]];
}

console.log(sum);
*/

// const values = Object.values(salaries);
// for (let i = 0; i < values.length; i++) {
//   sum += values[i];
// }

// console.log (sum);

// let sum = 0;
// for (const salariesKey in salaries) {
//     sum+=salaries[salariesKey];
// }
// console.log(sum);

// let sum =salaries.Ajax + salaries.Mango + salaries.Poly ;
// console.log(sum|| 0);

// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]
/*
const user = {
  name: 'John',
  surName: 'Stones',
  age: 20,
  hobby: 'tenis',
  haveCar: true,
  merried: false,
};
const getArray = function (obj) {

    const newArray = [];
    const keys = Object.keys(obj);
    

    for (const key of keys) {
        newArray.push({[key]: obj[key] });

    }
    return newArray;
}


console.log(getArray(user));
*/

/*
TODO: Пошук друга по імені
const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
]

console.table(friends)


const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    if (friend.name.toLowerCase() === friendName.toLowerCase()) {
      return friend;
    }
  }
  return `none`
}

console.log(findFriendByName(friends, 'John'));
*/

/* 
TODO: Отримуємо імена всіх друзів
const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
]
const getAllNames = function (allFriends) {
  const allNames = []
  for (const friend of allFriends) {
    allNames.push(friend.name)
  }
  return allNames
}
console.log(getAllNames(friends));
*/
/*
TODO: Отримати імена друзів які онлайн
const friends = [
  { name: 'John', online: true },
  { name: 'Alice', online: false },
  { name: 'Bob', online: true },
  { name: 'Charlie', online: false },
]
const getOnlimeFriends = function (allFriends) {
  const friendsNames = [];

  for (const friend of allFriends) {
    if (friend.online) {
      friendsNames.push(friend.name)
    }
  }
  return friendsNames;
}
console.log(getOnlimeFriends(friends));
*/

/*
TODO: Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив обʼєктів та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з таким імʼям, ціною та кількістю з обʼєкта
const stones = [
  { name: 'Аконіт', price: 100, quantity: 10 },
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
]

const calcTotalPrice = function (allStones, stoneName) {
  stoneName = stoneName.toLowerCase();
  for (const stone of allStones) {
    if (stone.name.toLowerCase() === stoneName) {
      return stone.price * stone.quantity;
    }
  }
}
console. log(calcTotalPrice(stones, 'Діамант'));
console. log(calcTotalPrice(stones, 'СмаРагд'));
console. log(calcTotalPrice(stones, 'аконіт'));
*/

/*
var1
const playlist = {
  name: 'My amazing playlist',
  raiting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
  
  changeName: function (newTitle) {
    if (typeof newTitle === 'string') {
      playlist.name = newTitle;
    }
  }
}
console.log(playlist);
playlist.changeName('New Title')
console.log(playlist);
var2
const playlist = {
  name: 'My amazing playlist',
  raiting: 5,
  tracks: ['track-1', 'track-2', 'track-3'],
}

const changePlayList = function (playlist, newTitle) {
  if (typeof newTitle === 'string') {
    playlist.name = newTitle;
  }
}

changePlayList(playlist, 23)
console.log(playlist);
*/

// console.log(typeof playlist.name);
// console.log(Array.isArray(playlist.name));

/*
TODO: Створіть обєкт з властивостями "довжина" та "ширина", напишіть метод "CalculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини
const rectangle = {
  width: 27,
  height: 23,
  calculateArea() {
    return this.width * this.height;
  }
}
console.log(rectangle.calculateArea());
*/

/*
Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance".
 Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок,
 та метод "withdraw", який дозволяє знімати гроші з рахунку.
 Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок”
та отримати ‘готівку’ відповідно.Після проведення операції виводити повідомлення про залишок на рахунку.
const bankAccount = {
  ownerName: 'John Doe',
  accountNumber: '21',
  balance: 23098,
  deposit(sum) {
    this.balance += sum;
  },
  withdraw(sum) {
    this.balance -= sum;
  },
};

bankAccount.deposit(234);
console.log(bankAccount);

bankAccount.withdraw(234);
console.log(bankAccount);
*/
