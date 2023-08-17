function mergeSort(arr) {
  // Base case: A list of zero or one elements is sorted, by definition.
  if (arr.length <= 1) {
    return arr;
  }

  // Split the list into two halves
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  // Recursively sort both halves
  left = mergeSort(left);
  right = mergeSort(right);

  // Then merge the now-sorted halves
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // While there are elements in either the left or the right arrays
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++; // move to the next element in the left array
    } else {
      result.push(right[rightIndex]);
      rightIndex++; // move to the next element in the right array
    }
  }

  // If left array still has elements, add them to result
  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  // If right array still has elements, add them to result
  while (rightIndex < right.length) {
    result.push(right[rightIndex]);
    rightIndex++;
  }

  return result;
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // [3, 9, 10, 27, 38, 43, 82]
