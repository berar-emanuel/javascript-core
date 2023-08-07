### Summary

Bubble sort is a straightforward and intuitive sorting algorithm but it's not particularly efficient for large data sets. The underlying idea is quite simple.

### Walkthrough

1. Iterate through the entire list.
2. Compare the adjacent elements.
3. Swap them if they're in the wrong order.
4. Repeat the above steps until no more swaps are needed.

#### Complexity

Bubble sort's average case time complexity is `O(n^2)`, where `n` is the number of items being sorted.
The best case scenario is complexity `O(n)` when input is already sorted, thanks to our optimization using `swapped` flag.
However, despite its simplicity, it's not the most efficient sort for large data compared to more advanced algorithms like `QuickSort` and `MergeSort`
