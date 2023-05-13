// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

// function findLastOneIndex(binaryString) {
//     for (let index = binaryString.length - 1, position = 1; index >= 0; index--, position++){
//         if (binaryString[index] == '1') {
//             return position;
//         }
//     }
// }

function findLastOneIndex(number) {
    let position = 1;

    while (number) {
        if (number & 1) return position;
        position++;
        number >>= 1;
    }
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

    let binaryString = parseInt(userInput[0]).toString(2);
    let number = parseInt(userInput[0]);
    
    console.log(findLastOneIndex(number));

  //end-here
});