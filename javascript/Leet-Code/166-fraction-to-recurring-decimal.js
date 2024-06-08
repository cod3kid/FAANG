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
