const isHappyNumber = (n) => {
  let slow = n;
  let fast = sumOfDigits(n);

  while (fast !== 1 && slow !== fast) {
    slow = sumOfDigits(slow);
    fast = sumOfDigits(sumOfDigits(fast));
  }

  if (fast === 1) return true;

  return false;
};

const sumOfDigits = (number) => {
  let totalSum = 0;
  while (number > 0) {
    let digit = number % 10;
    number = Math.floor(number / 10);
    totalSum += digit ** 2;
  }

  return totalSum;
};

console.log(isHappyNumber(19));
