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

    let n = parseInt(userInput[0]);
    for (let i = 0; i < n; i++){
        let line = '1';
        // append the spaces
        for (var j = 0; j < i - 1; j++){
            line += ' ';
        }

        if (i != 0) line += j + 2;
        
        if (i == n - 1) {
            line = '';
            for (let j = 1; j <= n; j++){
                line += j;
            }
        }
        console.log(line);
    }
});


/*
    n - number of lines our output goes

    i = 0; 
        spaces loop:
            j = 0, 0<-1 x false
    i = 1
        spaces loop:
            j = 0, 0<0 x false
    i = 2
        spaces loop:
            j = 0, 0<1 true
    i = 3
        spaces loop:
            j = 0, 0<2 true
            j = 1, 1<2 true
    i = 4
        spaces loop:
            j = 0, 0<3 true
            j = 1, 1<3 true
            j = 2, 2<3 true

    line = '1'
*/