// let person = {
//     name: 'sathish',
//     phone: 9080706050
// };

// Object.keys
// console.log(Object.keys(person));

// console.log(person['name']);

// let keys = Object.keys(person);

// for (let key of keys) {
//     // console.log(key);
//     console.log(person[key]);
// }

// for (let key of Object.keys(person)) {
//     console.log(person[key]);
// }

// for (let key in person) {
//     console.log(key, person[key]);
// }

// for (let index in keys) {
//     console.log(person[keys[index]]);
// }

// for...of loop
// for...in loop

// let array = [1, 2, 3, 4, 5];
// let fruits = ['apple', 'orange', 'banana', 'watermelon', 'grapes'];

// for (let value of array) {
//     // what we want to do with every value of the array
//     console.log(value); // value = 3 at execution 3
// }

// for (let index in fruits) {
//     console.log(index);
// }

// for (let index in fruits) {
//     console.log(fruits[index]);
// }

// for (let fruit of fruits) {
//     console.log(fruit);
// }


let array = [1, 2, 4, 5, 6, 4, 3, 4, 5, 6, 7, 8];

let frequencies = {};

for (let value of array) {
    frequencies[value] = 0;
}

for (let value of array) {
    frequencies[value]++;
}

console.log(Object.entries(frequencies).sort((a, b) => a[0]-b[0]));

/*
    value = 2

    frequencies = {
        '1': 1,
        '2': 1,
        '3': 1,
        '4': 3,
        '5': 2,
        '6': 2,
        '7': 1,
        '8': 1
    };
*/

