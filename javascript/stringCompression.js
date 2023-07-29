function encodeString(string) {
  result = string[0];
  currCount = 1;

  for (i = 1; i < string.length; i++) {
    if (string[i - 1] === string[i]) {
      currCount++;
    } else {
      result += currCount + string[i];
      currCount = 1;
    }
  }

  return result;
}

console.log(encodeString("kkkxzvggsejyyeetyu"));
