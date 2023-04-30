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

    let length = parseInt(userInput[0]);
    let passports = userInput[1].split(' ');

    // uniquePassports array
    let uniquePassports = [];

    // traverse / iterate through the passports array
    for (let passport of passports) {
        // check if the passport is already present in the uniquePassports array
        // do nothing
        // else, if the passport is not present in the uniquePassports array,
        // push the passport to the uniquePassports array
        if (!uniquePassports.includes(passport)) {
            uniquePassports.push(passport);
        }
    }

    console.log(uniquePassports.join(' '));

  //end-here
});

/*
    uniquePassports = ['A23', 'B56', 'C79', 'D16']

    passport = 'D16'

*/