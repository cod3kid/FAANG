
prices=[7,1,5,3,6,4]
profit=0
buyPrice=Number.POSITIVE_INFINITY

for(i in prices)
{
  if(buyPrice>prices[i])
  {
    buyPrice=prices[i]
  }
  else{
    profit=Math.max(prices[i]-buyPrice,profit)
  }
}


console.log(profit)