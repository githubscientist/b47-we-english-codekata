// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

// function firstCharCheck(input) {
//     // take the first character
//     return input[0] == 'a' || input[0] == 'A';
// }

// function lastCharCheck(input) {
//     // take the first character
//     return input[input.length - 1] == 'z' || input[input.length - 1] == 'Z';
// }

// function middleCharCheck(input) {
//     let middleIndex = Math.floor(input.length / 2);
//     return input[middleIndex] == 'm' || input[middleIndex] == 'M';
// }

function charCheck(input, index, char) {
    return input[index] == char.toLowerCase() || input[index] == char.toUpperCase();
}

function isBeautifulString(input) {
    return charCheck(input, 0, 'a') && charCheck(input, Math.floor(input.length / 2), 'm') && charCheck(input, input.length-1, 'z');
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let input = userInput[0];

    // check if the first char is 'a' or 'A' and middle char is 'm' or 'M' and the last char is 'z' or 'Z'
    isBeautifulString(input) ? console.log('1') : console.log('0');
  //end-here
});