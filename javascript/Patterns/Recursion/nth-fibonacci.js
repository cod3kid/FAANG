// O(2^n) time |  O(n) space
function getNthFib(n) {
  if (n === 1 || n === 2) return n - 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
}

console.log(getNthFib(7));
// 0 1 1 2 3 5 8
