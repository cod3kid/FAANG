const maxProfit = (prices) => {
  let buyPtr = 0,
    sellPtr = 1;
  let maxProfit = 0;

  while (sellPtr < prices.length) {
    if (prices[buyPtr] > prices[sellPtr]) {
      buyPtr = sellPtr;
    }

    maxProfit = Math.max(maxProfit, prices[sellPtr] - prices[buyPtr]);
    sellPtr++;
  }

  return maxProfit;
};

prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
