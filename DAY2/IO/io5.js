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

    // Method 1:
    // console.log(userInput.join(' '));

    // Method 2:
    // create an empty string
    // to keep track of the result value
    let result = '';

    for (let index = 0; index < userInput.length; index++){
        result = result + userInput[index] + ' ';
    }

    console.log(result.trim());
    
  //end-here
});

/*
    result = ''

    index = 0; index < 3, true
        result = result + userInput[index] + space
               = result + userInput[0] + space
               = '' + '2' + ' '
               = '2 '
    
    result = '2 '

    index = 1; 1 < 3, true
        result = result + userInput[index] + space
               = result + userInput[1] + space
               = '2' + '4' + ' '
               = '2 4 ' 
    
    result = '2 4 '

    index = 2; 2 < 3, true
        result = result + userInput[index] + space
               = result + userInput[2] + space
               = '2 4 ' + '5' + ' '
               = '2 4 5 '
    
    index++; index = 3; 3 < 3; false
    loop will be terminated
*/