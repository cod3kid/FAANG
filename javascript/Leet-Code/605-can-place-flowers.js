/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    let leftClear = i == 0 || flowerbed[i - 1] === 0;
    let rightClear = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
    if (leftClear && rightClear && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
};
