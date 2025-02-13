/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let masks = new Array(words.length).fill(0);
  let lengths = new Array(words.length).fill(0);
  let maxLen = 0;

  for (let i = 0; i < words.length; i++) {
    let bitmask = 0;
    for (let char of words[i]) {
      bitmask = bitmask | (1 << (char.charCodeAt(0) - "a".charCodeAt(0)));
    }
    masks[i] = bitmask;
    lengths[i] = words[i].length;
  }

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if ((masks[i] & masks[j]) === 0) {
        maxLen = Math.max(maxLen, lengths[i] * lengths[j]);
      }
    }
  }

  return maxLen;
};
