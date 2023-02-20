function stringOneContainsTwo(string, substring) {
  const windowSize = substring.length;

  for (let i = 0; i <= string.length - windowSize; i++) {
    if (string.slice(i, i + windowSize) === substring) {
      return true;
    }
  }

  return false;
}

let string = "aefoaefcdaefcdaed";
let substring = "aefcdaed";
console.log(stringOneContainsTwo(string, substring));
