const longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const currentChar = strs[0][i];

    for (let j = 0; j < strs.length; j++) {
      if (currentChar != strs[j][i]) {
        return commonPrefix;
      }
    }
    commonPrefix += currentChar;
  }

  return commonPrefix;
};

strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
