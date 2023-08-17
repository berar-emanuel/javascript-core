### MergeSort function detailed explanation

```
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
}
```

##### 1. Base case

```
if (arr.length <= 1) {
    return arr;
}
```

If the length of the array (`arr`) is 1 or 0, it's already sorted. So, it simply returns the array as is. This is our recursive base case.

##### 2. Divide

```
let middle = Math.floor(arr.length / 2);
let left = arr.slice(0, middle);
let right = arr.slice(middle);
```

Here, the array is split into two roughly equal halves, `left` and `right`. The array is divided using the midpoint (`middle`). The purpose of this step is to break the problem down into smaller sub-problems.

##### 3. Recursive calls

```
left = mergeSort(left);
right = mergeSort(right);
```

Now, the function calls itself recursively for both halves. This is the "conquer" step of the divide-and-conquer paradigm. It's seeking to solve two smaller sorting problems.

##### 4. Merge

```
return merge(left, right);
```

Once the two halves are sorted (base case or recursive sorting), they're merged together in a sorted manner using the merge function.

#### Time Complexity Analysis of `mergeSort`:

##### 1. Divide

The process of dividing the array in half has a constant time complexity, `O(1)`, because no matter how large the array is, we're just finding a midpoint and slicing it.

##### 2. Recursive calls

For every division made, the function is recursively called twice (once for the left half, once for the right half). This recursive division occurs `log(n)` times (base 2 logarithm), because with each division, the array size is halved until it gets to 1. This is where the `log(n)` factor in the time complexity comes from.

##### 3. Merge

As explained in the `mergeFn` file, the merge function has a time complexity of `O(n)` for merging two halves of an array.

Given the above, the time complexity for the entire process can be represented as:

- At the first level of recursion, we have 1 array of size n, which we merge in `O(n)` time.
- At the second level of recursion, we have 2 arrays of size `n/2`, and merging them also takes `O(n)` time in total (`O(n/2)` for each).
- At the third level, we have 4 arrays of size `n/4`, merging all of them also takes `O(n)` time in total.

This pattern continues until we have n arrays of size 1. So at every level, the total time taken is `O(n)`, and there are `log(n)` levels.

Thus, the overall time complexity is `O(n)` \* `log(n)` = `O(n log n)`.
