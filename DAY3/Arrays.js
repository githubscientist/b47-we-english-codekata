// create an array

// let array = [];
// let numbers = new Array();


// console.log(numbers);

// let array = [];

// // push method - inserts the element to the end of the array
// array.push(1);
// array.push(3);
// array.push(5);

// // pop method - removes the element from the end of the array
// array.pop();
// array.pop();

// // unshift method - inserts the element to the beginning of the array
// array.unshift(7);
// array.unshift(10);
// array.unshift(15, 12);

// // shift method - removes the element from the beginning of the array
// array.shift();
// array.shift();

// // splice method - insert/remove an element from a specific index of the array
// // insert 6 in the second index - 1
// array.splice(1, 0, 6);

// // delete 7 from the index - 2
// array.splice(2, 1);


// console.log(array);

// forEach method
// let array = [1, 2, 3, 4, 5, 6];

// // function print(value) {
// //     console.log(value**2);
// // }

// // array.forEach(print);

// // let print = function(value) {
// //     console.log(value**2);
// // }

// // let print = (value) => {
// //     console.log(value**2);
// // }

// // array.forEach((value) => {
// //     console.log(value**2);
// // });

// array.forEach(value => console.log(value**2));

// let array = [1, 2, 3, 4, 5, 6];

// array.forEach((value, index, array) => {
//     console.log(index, value, array, array[index]);
// });

// sort method
// let array = [4, 2, 1, 5, 6, 8, 7, 3];

// function ascComparator(a, b) {
//     return a - b;
// }

// function descComparator(a, b) {
//     console.log(a, b);
//     return b - a;
// }

// function comparator(a, b) {
//     console.log(a, b);
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// // in-place method -> make changes to the original array
// // array.sort((a, b) => a - b); // arranged in ascending order
// array.sort(comparator);

// console.log(array);

// let array = [1, 2, 3, 4, 5];

// array.forEach((value, index, array) => {
//     if (index % 2 != 0) {
//         console.log(array[index]);
//     }
// });

let array = [1, 2, 3, 4, 5];

console.log(array.map((item) => {
    return item**2;
}));