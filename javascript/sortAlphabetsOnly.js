let input = "cd19ya1";

let alphaIndices = [];
let numIndices = [];
for (char in input) {
  if (isNaN(parseInt(input[char]))) {
    alphaIndices.push(parseInt(char));
  } else {
    numIndices.push(parseInt(char));
  }
}

const alphabets = alphaIndices.map((item) => input[item]).sort();
const numbers = numIndices.map((item) => input[item]);

let outputString = "";
for (let i = 0; i < input.length; i++) {
  if (alphaIndices.indexOf(i) >= 0) {
    outputString += alphabets.shift();
  }
  if (numIndices.indexOf(i) >= 0) {
    outputString += numbers.shift();
  }
}

console.log(outputString);
