import benchmark from '../benchmark.js';
import { largeDataSet, mediumDataSet, smallDataSet } from '../data.js';

export default function bubbleSort(arr) {
  let n = arr.length;
  let swapped; // to optimize and break out early if the array becomes sorted before all passes

  // traverse through all elements in the array
  for (let i = 0; i < n - 1; i++) {
    swapped = false; // assume that no swaps are needed initially

    for (let j = 0; j < n - i - 1; j++) {
      //compare the adjacent elements
      if (arr[j] > arr[j + 1]) {
        // swap using destructuring if they're in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], [arr[j]]];
      }
    }
    // if no swaps were made in the inner loop, the array is already sorted
    if (!swapped) break;
  }
  return arr;
}

console.log(
  `Bubble sort on small data: ${benchmark(bubbleSort, smallDataSet)}ms`
);
console.log(
  `Bubble sort on medium data: ${benchmark(bubbleSort, mediumDataSet)}ms`
);
console.log(
  `Bubble sort on large data: ${benchmark(bubbleSort, largeDataSet)}ms`
);
