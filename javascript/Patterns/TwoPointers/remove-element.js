function removeElement(arr, key) {
  nextElement = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== key) {
      arr[nextElement] = arr[i];
      nextElement++;
    }
  }

  return nextElement;
}

arr = [3, 2, 3, 6, 3, 10, 9, 3];
key = 3;
console.log(removeElement(arr, key));
