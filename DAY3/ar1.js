// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

    // handle the input
    let length = parseInt(userInput[0]);
    let array = userInput[1].split(' ').map(item => parseInt(item));

    // find the frequencies of the array elements
    let frequencyTable = {};
    
    for (let index = 0; index < array.length; index++){
        frequencyTable[array[index]] = 0;
    }

    for (let index = 0; index < array.length; index++){
        frequencyTable[array[index]]++;
    }

    let orderedArray = Object.entries(frequencyTable).sort((a, b) => a[1] - b[1]);
    let result = [];

    for (let item of orderedArray) {
        result.push(item[0]);
    }

    console.log(result.join(' '));

  //end-here
});

/*
    1 1 3 2

    1 - 2
    3 - 1
    2 - 1

    2 3 1
*/