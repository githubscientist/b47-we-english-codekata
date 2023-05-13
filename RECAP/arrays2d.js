// 4-d array -> array of 3-d arrays -> arrays of 2-d arrays -> array of 1-d arrays -> array of elements
// 3-d array -> array of 2-d arrays -> array of 1-d arrays -> array of elements
// 2-d array -> array of 1-d arrays -> array of elements
// 1-d array -> array of elements

// let array1d = [1, 2, 3, 4, 5];

// console.log(array1d);

let array2d = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

// console.log(array2d);

// console.log(array2d[1][1]); // 1-d array

let array3d = [
    [
        [1, 2],
        [3, 4],
        [5, 6]
    ],
    [
        [7, 8],
        [9, 10],
        [11, 12]
    ],
    [
        [13, 14],
        [15, 16],
        [17, 18]
    ]
];

// console.log(array3d);

// console.log(array3d[2][0][1]);

// let person13ab = [
//     ['firstName', 'sathish'],
//     ['lastName', 'g'],
//     ['isGuviEnrolled', true],
//     [
//         'codekataStatus',
//         [
//             'geekPoints',
//             [100, 35, 65, 155]
//         ]
//     ]
// ];


// console.log(person13ab[3][1][1][3]);
