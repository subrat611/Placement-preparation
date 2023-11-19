```
function isArraySorted(arr, idx) // 0 is passed in idx

    // base case
    if idx equals arr.length - 1
        return true
    // getting answer of the smaller problem
        recursionResult = isArraySorted(arr, idx+1)

    // self work
    ans = recursionResult & arr[idx] <= arr[idx+1]

    return ans

```
