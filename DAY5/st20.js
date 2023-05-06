// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function mirror(pair) {
    return pair.split(' ').reverse().join(' ');
}

function isMirrorPair(pair1, pair2) {
    return mirror(pair1) == pair2 || mirror(pair2) == pair1;
}

function pairExists(pairs) {
    for (let i = 0; i < pairs.length-1; i++) {
        for (let j = i + 1; j < pairs.length; j++){
            if (isMirrorPair(pairs[i], pairs[j])) {
                return true;
            }
        }
    }
    return false;
}

inp.on("close", () => {
    let numberOfWords = parseInt(userInput[0]);

    let pairs = userInput.slice(1,);
    if (pairExists(pairs)) {
        console.log('YES');
    } else {
        console.log('NO');
    }
});