/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  if (words.length == 1) {
    return true;
  }

  let orderMap = {};

  for (let i = 0; i < order.length; i++) {
    let val = order[i];
    orderMap[val] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j >= words[i + 1].length) {
        return false;
      }

      if (words[i][j] != words[i + 1][j]) {
        if (orderMap[words[i][j]] > orderMap[words[i + 1][j]]) {
          return false;
        }
        break;
      }
    }
  }

  return true;
};
