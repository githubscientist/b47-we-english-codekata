// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function findSmallestFrequency(frequencies) {
    let max = 1000000000000; 
    for (let key in frequencies) {
        max = frequencies[key] < max ? frequencies[key] : max;
    }
    return max;
}

function filterSmallestFreqencies(frequencies, smallestFrequency) {
    // initialize a result array - empty array
    let result = [];
    // traverse through the object
    for (let key in frequencies) {
        // push all the values into the result array which matches smallestFrequency value
        if (frequencies[key] == smallestFrequency) {
            result.push(key);
        }
    }
    return result;
}

inp.on("close", () => {
    let [length, numbers] = [parseInt(userInput[0]), userInput[1].split(' ').map(item => parseInt(item))];
    
    // find all the frequencies
    let frequencies = {};

    for (let number of numbers) {
        frequencies[number] = 0;
    }

    for (let number of numbers) {
        frequencies[number]++;
    }

    // find the smallest frequency
    let smallestFrequency = findSmallestFrequency(frequencies);

    // filter all the values that has the smallest frequency
    let result = filterSmallestFreqencies(frequencies, smallestFrequency);

    // print all the values in descending order of their values
    result = result.map(item => parseInt(item));
    result.sort((a, b) => b - a);

    console.log(result.join(' '));
});