// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

function findNextSmallest(numbers, currentNumber, index) {
    // traverse the numbers array <- from index to numbers.length
    for (; index < numbers.length; index++) {
        // for every element
        // compare whether the array[index] < currentNumber
        if (numbers[index] < currentNumber) {
            // if true => return array[index]
            return numbers[index];
        }
    }

    // we have not returned any smallest element
    // return -1
    return -1;
}

inp.on("close", () => {
    let [length, numbers] = [userInput[0], userInput[1].split(' ').map(number => parseInt(number))];

    // intialize a result array
    let result = [];

    // traverse through the numbers array <- index
    for (let index = 0; index < numbers.length; index++){
        // for every number in the array
        // find the next smallest element in the range -> (index+1,array.length)
        let nextSmallest = findNextSmallest(numbers, numbers[index], index + 1);

        // if there is a smallest element => push it to the result array
        // else => push -1 to the result array
        result.push(nextSmallest);
    }

    // print the result array
    console.log(result.join(' '));
});