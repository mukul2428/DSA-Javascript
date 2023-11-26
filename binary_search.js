function binarySearch(arr, target) {
  let left = 0; //initialize the left pointer to the start of arry
  let right = arr.length - 1; //right pointer to end of array

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // calculate the middle index of current search interval

    if (arr[mid] === target) {
      // if element at the middle index matches the target
      return mid; //return index of target
    }
    if (arr[mid] < target) {
      //if the lement at middle index is less than target
      left = mid + 1; //adjust the left pointer to search in right half
    } else {
      //if the lement at middle index is greater than target
      right = mid - 1; //adjust right pointer to search in left half
    }
  }
  return -1; // no element found
}

const index = binarySearch([1, 3, 5, 7, 9, 11, 13, 15], 9);

if (index !== -1) {
  console.log(`Element found at index ${index}.`);
} else {
  console.log(`Element ${target} not found in the array.`);
}