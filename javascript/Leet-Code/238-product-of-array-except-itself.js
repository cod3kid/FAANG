// const productExceptSelf = function (nums) {
//   let products = [];
//   for (let i = 0; i < nums.length; i++) {
//     let currentProduct = 1;
//     for (j = 0; j < nums.length; j++) {
//       if (j !== i) {
//         currentProduct *= nums[j];
//       }
//     }
//     products.push(currentProduct);
//   }

//   return products;
// };

// Prefix and Suffix Approach | Time O(n)

// const productExceptSelf = function (nums) {
//   let products = Array(nums.length).fill(1);

//   let prefix = 1;
//   for (let i = 0; i < nums.length; i++) {
//     products[i] = prefix;
//     prefix *= nums[i];
//   }

//   let suffix = 1;
//   for (let i = nums.length - 1; i >= 0; i--) {
//     products[i] *= suffix;
//     suffix *= nums[i];
//   }

//   return products;
// };

// Division method

const productExceptSelf = function (nums) {
  let totalProduct = 1;
  let products = [];

  for (let num of nums) {
    totalProduct *= num;
  }

  for (let num of nums) {
    products.push(totalProduct / num);
  }

  return products;
};

let arr = [5, 1, 4, 2];
console.log(productExceptSelf(arr));
