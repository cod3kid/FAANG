/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

//  Naive Implementation, TLE for few test cases of Leetcode
var minEatingSpeed = function (piles, h) {
  let k = 1;
  let remainingHours = h;
  while (true) {
    for (let i = 0; i < piles.length; i++) {
      remainingHours -= Math.ceil(piles[i] / k);
    }

    if (remainingHours < 0) {
      remainingHours = h;
      k++;
    } else {
      return k;
    }
  }
};

/*
  Binary Search Solution
   */
var minEatingSpeed = function (piles, h) {
  const check = (num) => {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / num);
    }

    return hours <= h;
  };

  let low = 0;
  let high = Math.max(...piles);

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (check(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
};
