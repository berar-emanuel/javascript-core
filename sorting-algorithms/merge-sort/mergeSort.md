### Summary

In order to understand Merge sort algorithm, first you have to understand the divide and conquer paradigm, which is about breaking a problem into subproblems that are similar to the original problem, recursively solving these subproblems, and finally combining the solutions to the subproblems to solve the original problem.

### Walkthrough

1. The original problem is sorting an array.
2. The subproblem is sorting two halves of this array.
3. The solution to the subproblems is a sorted array, and the way to combine these solutions is to merge the two sorted arrays.

Looking at the code, there are two functions, `mergeSort` and `merge` which implement the Merge sort algorithm.

##### `mergeSort` function:

1. The function takes an array as an argument. If the array has zero or one element, it is already sorted and is returned as is. This is the base case for the recursion.

2. If the array has more than one element, it is divided into two halves (`left` and `right`), at the `middle` index of the array.

3. The function then recursively sorts the `left` and `right` halves by calling `mergeSort` on them.

4. After sorting both halves, they are merged using the `merge` function.

For more details click [here](mergeSortFn.md).

##### `merge` function:

1. This function takes two sorted arrays as arguments. The goal is to merge these two arrays into a single sorted array.

2. It begins by initializing an empty result array and two indexes, `leftIndex` and `rightIndex`, to point to the current elements being compared in the `left` and `right` arrays, respectively.

3. It then enters a loop, which continues as long as there are unprocessed elements in both `left` and `right` arrays.

4. In each iteration of the loop, it compares the current elements of `left` and `right`. The smaller of the two is pushed onto `result` and the index for that array is incremented. If the current elements are equal, it chooses the one in the `right` array, but it doesn't really matter which one is chosen.

5. If all elements in `right` have been processed (i.e., `rightIndex` is equal to `right.length`), but there are still unprocessed elements in `left` (or vice versa), then all remaining elements from `left` (or `right`) are appended to `result`.

6. Finally, the function returns the `result` array, which contains the elements from `left` and `right` in sorted order.

For more details click [here](mergeFn.md).

### Complexity

The time complexity of Merge Sort is O(n log n) in all three cases (worst, average, and best), where n is the number of items being sorted.

##### 1. Division step

The Merge Sort algorithm divides the array into halves. It keeps dividing the array until each sub-array contains only one element (a base case of a sorted array). If you start with an array of n elements, after the first division you have 2 arrays of size `n/2`. After the second division, you have 4 arrays of size `n/4`. This process continues until you have n arrays of size `1`.

If you count the number of divisions, it equals `log2(n)`. This is because you're repeatedly dividing by 2 until you get to 1 (which is `2^0`). This is where the log n part of the time complexity comes from.

##### 2. Merge step

Now, you start combining these sub-arrays of size 1 to produce sorted arrays of size `2`, then combine arrays of size `2` to produce sorted arrays of size `4`, and so on, until you combine two arrays of size `n/2` to produce a sorted array of size `n`.

At each level of this process, you're doing a total of n operations, because each element will eventually be looked at once and placed in its correct position in the new sorted array. Therefore, at each level of merging, the time complexity is `O(n)`.

##### 3. Overall complexity

The key insight here is that you're doing these `n` operations at each level of the merge process, and there are `log(n)` levels.

So, if you combine these two facts, you get `n` (for the merge step) \* `log(n)` (for the division step), leading to an overall time complexity of `O(n log n)`.

And because this applies to every case, even in the worst case scenario where the input array is in reverse order, it's still going to take `O(n log n)` time.
