function longestSubstringWithKDistinctChars(string, k) {
  if (string == null || string.length == 0 || k == 0) return 0;

  start = 0;
  lookUp = {};
  maxLen = 0;

  for (i = 0; i < string.length; i++) {
    if (lookUp[string[i]]) {
      lookUp[string[i]] += 1;
    } else {
      lookUp[string[i]] = 1;
    }

    while (Object.keys(lookUp).length > k) {
      lookUp[string[start]] -= 1;
      if (lookUp[string[start]] == 0) {
        delete lookUp[string[start]];
      }
      start++;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

string = "cbbebi";
k = 3;
console.log(longestSubstringWithKDistinctChars(string, k));
