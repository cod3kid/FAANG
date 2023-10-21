const reverseWordsInString = (string) => {
  const result = [];
  let currentWord = "";
  let finalString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      result.push(currentWord);
      currentWord = "";
    } else {
      currentWord += string[i];
    }
  }

  if (currentWord != "") {
    result.push(currentWord);
  }

  for (let j = result.length - 1; j >= 0; j--) {
    finalString += " ";
    finalString += result[j];
  }

  return finalString.slice(1);
};

// Fails few test cases I guess
console.log(reverseWordsInString("AlgoExpert is the best!"));
