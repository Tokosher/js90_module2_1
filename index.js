const WIDTH = 900;
const HEIGHT = 900;


// const string = ['JS', 'is', 'awesome', '!'].join(' ');
// console.log(string)


// Що таке масив
// const array = ["Hello world", null, true, 15];
// console.log(array)



// Перевірка масиву
// console.log(typeof array); // object
// console.log(Array.isArray(array)); // true
// console.log(Array.isArray("hello")); // false





// Перший та останій елемент масиву
// const firstEl = array[0];
// const lastIdx = array.length - 1;
// const lastEl = array[lastIdx];
// console.log(lastEl)

// Звернення до якогось єлементу массиву
// const array = ["Hello world", null, true, 15];
// console.log(array[1]);

// Перебір масиву
// const array = ["Hello world", null, true, 15];


// Цикл for
// for (let i = 0; i < array.length; i += 1) {
//     console.log(i)
//     const item = array[i]
//     console.log(item);
// }


// Цикл for of
// const numbers = [1, 2, 3];
// for (const number of numbers) {
//     console.log(number);
// }




// Присвоєння за посиланням та за значенням
// Примітивні типи даних - за значенням
// const number = 5;
// const string = 'Hello!';
// console.log(number)
// console.log(string)

// let a = 15;
// let b = a;
// console.log(a);
// console.log(b);
//
// a = 10;
//
// console.log(a);
// console.log(b);

// Складні типи даних - за посиланням
// const numbers = [1, 2, 3, 4];
// const numbersCopy = numbers;
//
// console.log(numbers);
// console.log(numbersCopy);
//
// numbers[0] = 10;
//
// console.log(numbers);
// console.log(numbersCopy);
//
// console.log(numbers === numbersCopy)
// console.log(numbers)







// Методи для роботи з масивом

// push
// const numbers = [1, 2, 3];
// numbers.push(4);
// console.log(numbers);

// pop
// const deletedElement = numbers.pop();
// numbers.pop();
// console.log(deletedElement)
// console.log(numbers)


// unshift shift
// const numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0)
// console.log(numbers);

// const deletedNumber = numbers.shift();
// console.log(deletedNumber)

//slice
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.slice(2, 5);
// console.log(result);
// console.log(numbers)

// splice
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.splice(2, 2);
// console.log(result);
// console.log(numbers);

// const result = numbers.splice(2, 2, true, 'Hello', false);
// console.log(result)
// console.log(numbers)

//includes
// const str = ['a', 'b', 'c', 'd'];
// console.log(str.includes('a'));
// console.log(str.includes('e'));

// const arr1 = [1];
// const array = [arr1, [2], [3]];
// console.log(array.includes(arr1));

// const str = ['a', 'b', 'c', 'd'];
// console.log(str.includes('a', 2));


//indexOf
// const str = ['a', 'b', 'c', 'd', 'a'];
// console.log(str.indexOf('a'));

// concat
// const str = ['a', 'b', 'c', 'd', 'a'];
// const numbers = [1, 2, 3];
// console.log(str.concat(numbers, ['Hello!']));


// reverse
// const array = [1, 2, 3, 4, 5];
// array.reverse();
// console.log(array)





// Task-1
// Напиши скрипт який буде перебирати масив та видаляти з нього (мутувати) всі елементи що не є типом даних Number.

// const arr = [3, 'Hello', null, 42, false];
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] !== 'number') {
//         arr.splice(i, 1);
//         i -= 1;
//     }
// }
// console.log(arr)


// Task-2
// Потрібно створити функцію яка буде приймати 1 параметр
// Функція повина відібрати з масиву тільки ті елементи що дублюються в ньому та повернути їх в вигляді нового масиву як результат виконання функції

// let a = 5;
// debugger
// a = 10;
// debugger

// function getCommonElements(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         debugger
//         if (arr.includes(arr[i], i + 1)) {
//             result.push(arr[i]);
//         }
//     }
//
//     return result;
// }
//
// console.log(getCommonElements([1, 19, 2, 3, 2, 1, 17, 19, 1]));




// Task-3
//Потрібно створити функцію яка буде приймати 2 параметри
//1 параметр це масив всіх юзерів
//2 параметр це масив з чоловічими іменами.
//Функція повина відібрати з масиву всіх юзерів лише жіночі імена та повернути їх в результаті свого виканання.

// const users = ['Artem', 'Anna', 'Larisa', 'Maksim', 'Svetlana', 'David', 'Roman', 'Olga'];
// const men = ['Artem', 'Maksim', 'David', 'Roman'];
//
// function getWomen(users, men) {
//     const women = [];
//
//     for (const user of users) {
//         console.log(user)
//         if (!men.includes(user)) {
//             women.push(user);
//         }
//     }
//
//     return women
// }
//
// console.log(getWomen(users, men));




// Task-4 - Масиви та рядки
// Напиши скрипт, який «розгортає» рядок (зворотний порядок літер) і виводить його в консоль.

// const string = 'Welcome to the future';



// Task-5
// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"


// function createStr(arr) {

// }

// console.log(createStr([]));
// console.log(createStr(["Peter"]));
// console.log(createStr(["Jacob", "Alex"]));
// console.log(createStr(["Max", "John", "Mark"]));
// console.log(createStr(["Mark", "Alex", "Jacob", "Mark"]));

// Питання - відповідь

// const langs = ['zpython', 'bjavascript', 'ac++'];
//
// const firstEl = langs[0];
// console.log(firstEl.charCodeAt(0));
//
// let isRightOrder = false;
//
// while(!isRightOrder) {
//     isRightOrder = true;
//     for (let i = 0; i < langs.length - 1; i++) {
//         const currentElement = langs[i];
//         const nextElement = langs[i + 1];
//
//         const currentElementCharCode = currentElement.charCodeAt(0);
//         const nextElementCharCode = nextElement.charCodeAt(0);
//
//         if (currentElementCharCode > nextElementCharCode) {
//             langs[i] = nextElement;
//             langs[i + 1] = currentElement;
//             isRightOrder = false;
//         }
//     }
// }
// console.log(langs);


