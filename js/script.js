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




// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

//
//const
// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Polwy:222 ,
// };
// let sum=0;
// const array=Object.entries(salaries);
// for (const arrayElement of array) {
//     sum+=arrayElement[1];
//
// }







// const keys= Object.keys(salaries);
// // console.log(keys);
// for (let i=0; i<keys.length; i++){
//
// // console.log(salaries[keys[i]]);
// sum+=salaries[keys[i]]
// }


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