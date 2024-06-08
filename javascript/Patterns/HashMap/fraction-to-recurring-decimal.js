/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  let remainders = {};
  let result = "";

  if (numerator == 0) {
    return "0";
  }

  if ((numerator < 0) ^ (denominator < 0)) {
    result += "-";

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
  }

  let quotient = numerator / denominator;
  let remainder = (numerator % denominator) * 10;

  result += toInteger(quotient).toString();

  if (remainder === 0) return result;

  result += ".";

  while (remainder !== 0) {
    if (remainders[remainder]) {
      let beginning = remainders[remainder];
      let left = result.substring(0, beginning);
      let right = result.substring(beginning, result.length);
      result = left + "(" + right + ")";
      return result;
    }
    remainders[remainder] = result.length;
    quotient = remainder / denominator;
    result += toInteger(quotient).toString();
    remainder = (remainder % denominator) * 10;
  }

  return result;
};

const toInteger = (x) => {
  let num = Number(x);
  return num < 0 ? Math.ceil(x) : Math.floor(x);
};

/*
If the numerator is zero, simply return 0.

If either of the numerator or denominator is negative, append the minus character (-) to the result string, and make the numerator and denominator positive.

Calculate the quotient and the remainder. Append the quotient part to the result.

Check if the remainder is 0 , then return the result.

If the remainder is not 0 , append the dot ('.') character to the result.

Start a loop until the remainder is 0 , and every time check the remainder in the hash map.
If the remainder already exists in the hash map, then make the recurring decimal from the fraction.
If the remainder does not exist in the hash map, put it in the hash map.
*/
