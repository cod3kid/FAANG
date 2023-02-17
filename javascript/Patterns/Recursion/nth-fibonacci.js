// O(2^n) time |  O(n) space
// function getNthFib(n) {
//   if (n === 1 || n === 2) return n - 1;

//   return getNthFib(n - 1) + getNthFib(n - 2);
// }

// O(n) time | O(n) space
function getNthFib(n, memoize = { 1: 0, 2: 1 }) {
  // Check whether the key exist
  if (n in memoize) {
    return memoize[n];
  }
  memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
  return memoize[n];
}
console.log(getNthFib(7));
// 0 1 1 2 3 5 8
