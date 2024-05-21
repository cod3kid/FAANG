//Leetcode 202
//Hash Map

function isHappyNumber(n) {
  seen = {};

  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n);
  }

  return n === 1 ? true : false;
}

function sumOfSquares(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, num) => sum + Math.pow(num, 2), 0);
}

console.log(isHappyNumber(19));

// Fast and Slow Pointers

const isHappyNumber2 = (n) => {
  const sumOfDigits = (number) => {
    let totalSum = 0;
    while (number > 0) {
      let digit = number % 10;
      number = Math.floor(number / 10);
      totalSum += digit ** 2;
    }

    return totalSum;
  };
  let slow = n;
  let fast = sumOfDigits(n);

  while (fast !== 1 && slow !== fast) {
    slow = sumOfDigits(slow);
    fast = sumOfDigits(sumOfDigits(fast));
  }

  if (fast === 1) return true;

  return false;
};
