// Extra space taken
// function removeDuplicates(arr) {
//   set = new Set(arr);
//   return [...set].length;
// }

// 0(1) Space
function removeDuplicates(arr) {
  nextNonDuplicate = 1;

  for (i = 0; i < arr.length; i++) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate++;
    }
  }

  return nextNonDuplicate;
}
// https://www.designgurus.io/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fdownload%2Fstorage%2Fv1%2Fb%2Fdesigngurus-prod.appspot.com%2Fo%2FdocImages%252F63dda4ad488110f74a93371d%252Fimg%3A878234-062-085-604-288d74261a.jpg%3Fgeneration%3D1675635749553036%26alt%3Dmedia&w=3840&q=75

arr = [2, 3, 3, 3, 6, 9, 9];
console.log(removeDuplicates(arr));
// The array will be sorted
