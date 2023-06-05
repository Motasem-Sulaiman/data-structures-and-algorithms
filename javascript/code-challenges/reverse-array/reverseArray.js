function reversedArray(arr) {
  let temp;
  let right = arr.length - 1;
  let left = 0;

  while (left <= right) {
    temp = arr[right];
    arr[right] = arr[left];
    arr[left] = temp;
    right--;
    left++;
  }

  return arr;
}
module.exports = reversedArray;

//comment