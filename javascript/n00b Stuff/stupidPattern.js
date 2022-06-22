function getPattern(str1, str2) {
  output = "";
  counter = 1;
  for (i = 0; i < str1.length; i++) {
    if (i < str1.length / 2) {
      output +=
        str1.slice(counter - 1, i + counter) +
        str2.slice(counter - 1, i + counter);
    }

    counter += i + 1;
  }

  return output;
}

str1 = "abcdefghij";
str2 = "1234567890";
console.log(getPattern(str1, str2));
