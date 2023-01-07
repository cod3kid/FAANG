function longestSubstringWithoutRepeatingCharacters(string) {
  start = 0;
  lookUp = {};
  maxLen = 0;

  for (i = 0; i < string.length; i++) {
    char = string[i];

    if (lookUp[char]) {
      lookUp[char] += 1;
    } else {
      lookUp[char] = 1;
    }

    while (lookUp[char] > 1) {
      startChar = string[start];
      lookUp[startChar] -= 1;
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

string = "aabccbb";
console.log(longestSubstringWithoutRepeatingCharacters(string));
