// map - return an array of length of the array
let numbers = [1, 2, 3, 4, 5];

// [1/2, 2/2, 3/2, 4/2, 5/2]
// [0.5, 1, 1.5, 2, 2.5]
console.log(numbers.map((value, index, array) => {
    return value / 2;
}));