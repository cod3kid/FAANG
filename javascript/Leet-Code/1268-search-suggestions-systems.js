/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  let result = [];
  products.sort();
  let i = 0;
  while (i < searchWord.length) {
    let current = [];
    for (let product of products) {
      if (product.startsWith(searchWord.slice(0, i + 1))) {
        current.push(product);
      }
    }
    result.push(current.slice(0, 3));
    i++;
  }

  return result;
};

/**
 Better approach as we no longer has startsWith which is of O(n) 
 */
var suggestedProducts = function (products, searchWord) {
  let results = [];
  products.sort();

  let left = 0;
  let right = products.length - 1;
  for (let i = 0; i < searchWord.length; i++) {
    let currentChar = searchWord[i];

    while (
      left <= right &&
      (products[left].length <= i || products[left][i] != currentChar)
    ) {
      left += 1;
    }

    while (
      left <= right &&
      (products[right].length <= i || products[right][i] != currentChar)
    ) {
      right -= 1;
    }

    let remainder = right - left + 1;
    let currentResult = [];
    for (let j = 0; j < Math.min(remainder, 3); j++) {
      currentResult.push(products[left + j]);
    }
    results.push(currentResult);
  }

  return results;
};
