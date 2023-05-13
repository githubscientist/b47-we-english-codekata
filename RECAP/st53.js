// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function hasValidLength(panString) {
    return panString.length == 10;
    // if (panString.length == 10) {
    //     return true;
    // } else {
    //     return false;
    // }
    // return panString.length == 10 ? true : false;
}

// function hasValidLetters(panString, start, end) {
//     for (; start <= end; start++) {
//         if (!(panString.charCodeAt(start) >= 65 && panString.charCodeAt(start) <= 90)) {
//             return false;
//         }
//     }
//     return true;
// }

function hasValidLetters(panString, start, end) {
    for (; start <= end; start++) {
        if (!(panString[start] >= 'A' && panString[start] <= 'Z')) {
            return false;
        }
    }
    return true;
}

// function hasValidLastChar(panString) {
//     return (panString.charCodeAt(panString.length - 1) >= 65 && panString.charCodeAt(panString.length - 1) <= 90);
// }

function hasValidLastChar(panString) {
    return (panString[panString.length - 1] >= 'A' && panString[panString.length - 1] <= 'Z');
}

function hasValidCaseAlphabets(panString) {
    // Pan must have uppercase letters only
    // From index 1 to 5 all must be letters(A-Z),last index must be letter
    return hasValidLetters(panString, 0, 4) && hasValidLastChar(panString);
}

// function hasValidNumbers(panString, start, end) {
//     for (; start <= end; start++) {
//         if (!(panString.charCodeAt(start) >= 48 && panString.charCodeAt(start) <= 57)) {
//             return false;
//         }
//     }
//     return true;
// }

function hasValidNumbers(panString, start, end) {
    for (; start <= end; start++) {
        if (!(panString[start] >= '0' && panString[start] <= '9')) {
            return false;
        }
    }
    return true;
}

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

    let panString = userInput[0];

    if (hasValidLength(panString) && hasValidCaseAlphabets(panString) && hasValidNumbers(panString, 5, 8)) {
        console.log('pan');
    } else {
        console.log('not pan');
    }
  //end-here
});