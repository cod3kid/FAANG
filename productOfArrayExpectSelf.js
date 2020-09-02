/*
You can always use brute force to solve this problem but its time complexity will be O(n^2)
We can do this in linear time O(n) by using 2 loops. first find the product of an element from element 0 to that specific element i
then use another loop to find product from last element ie, (array.length-1) to i
and finally combine the two arrays

Inorder to improve space complexity i've used below method. For better understand i recommend to refer commented code in the bottom
*/

a = [1, 2, 3, 4]
len = a.length
op_arr = []

op_arr[0] = 1

for (i = 1; i < a.length; i++) {
  pushNum = op_arr[i - 1] * a[i - 1]
  op_arr.push(pushNum)
}

r=1

for (i = len - 1; i >= 0; i--) {
  op_arr[i] =  op_arr[i] * r
  r*=a[i]
}

console.log(op_arr)



// a = [1, 2, 3, 4]
// len = a.length
// left_arr = []
// right_arr = []

// left_arr[0] = 1
// right_arr[len - 1] = 1
// op_arr = []
// for (i = 1; i < a.length; i++) {
//   pushNum = left_arr[i - 1] * a[i - 1]
//   left_arr.push(pushNum)
// }

// for (i = len - 2; i >= 0; i--) {
//   pushNum = a[i + 1] * right_arr[i + 1]
//   right_arr[i] = pushNum
// }

// for (i = 0; i < len; i++) {
//   op_arr[i] = left_arr[i] * right_arr[i]
// }

// console.log(op_arr)