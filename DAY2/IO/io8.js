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
    //   console.log(userInput[0].split(' ').join('\n'));
    
    // Method 2:
    let array = userInput[0].split(' ');
    
    // traverse/iterate through the array
    // for (let index = 0; index < array.length; index++){
    //     // for every element, print the element
    //     console.log(array[index]);
    // }
    
    array.forEach((item) => {
        console.log(item);
    });

  //end-here
});