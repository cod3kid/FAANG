/**
 * @param {string} digits
 * @return {string[]}
 */

var digitsMapping = {
  1: [""],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};

var permute = (index, currComb, digits, combinations) => {
  if (currComb.length === digits.length) {
    combinations.push(currComb.join(""));
    return;
  }

  let possibleCombs = digitsMapping[digits[index]];

  if (possibleCombs) {
    for (let i = 0; i < possibleCombs.length; i++) {
      let letter = possibleCombs[i];
      currComb.push(letter);
      permute(index + 1, currComb, digits, combinations);
      currComb.pop();
    }
  }
};

var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  let combinations = [];

  permute(0, [], digits, combinations);
  return combinations;
};
