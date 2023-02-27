const productExceptSelf = function (nums) {
  let products = [];
  for (let i = 0; i < nums.length; i++) {
    let currentProduct = 1;
    for (j = 0; j < nums.length; j++) {
      if (j !== i) {
        currentProduct *= nums[j];
      }
    }
    products.push(currentProduct);
  }

  return products;
};

let arr = [1, 2, 3, 4];
console.log(productExceptSelf(arr));
