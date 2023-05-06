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
    let n = parseInt(userInput[0]);

    let greyCodes = ['0', '1'];

    if (n == 1) {
        console.log(greyCodes.join(' '));
    } else {
        // do the following for n-1 times
        while (n-1>0) {
            // take the greyCodes array
            // take the copy of greyCodes array and reverse it
            let greyCodesCopy = [...greyCodes];
            greyCodesCopy.reverse();

            // append '0' to all the elements in greyCodes array
            greyCodes = greyCodes.map(item => '0' + item);
            // append '1' to all the elements in greyCodes array
            greyCodesCopy = greyCodesCopy.map(item => '1' + item);
            // merge both the arrays and assign it to the greyCodes array
            greyCodes = greyCodes.concat(greyCodesCopy);
            n--;
        }
        console.log(greyCodes.join(' '));
    }
});