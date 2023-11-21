## Selection Sort

<code style="color: green">Easy</code> | <code style="color: green">Done</code>

Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list.

> The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion of the list and swaps it with the first element of the unsorted part. This process is repeated for the remaining unsorted portion until the entire list is sorted.

## Selection Sort Algorithm Steps

```

[2, 13, 4, 1, 3, 6]
 ^
 Initial unsorted portion is [2]

1. [2, 13, 4, 1, 3, 6]
    ^   ^
        [2 < 13] move the pointer to next and traverse the array until find element less than 2.
        If found then **swap** else move the pointer from 0th index to 1st index and so on.

2. [2, 13, 4, 1, 3, 6]
    ^         ^
              [2 < 1] Hew 2 is gt 1 so swap(2, 1)

3. Now the sorted and unsorted portion is [2] [13, 4, 2, 3, 6]

Similarly repeat the steps.

```

| Pass | Array                         |
| ---- | ----------------------------- |
| 1    | [2, 13, 4, 1, 3, 6]           |
|      | **Swap:** [1, 13, 4, 2, 3, 6] |
| 2    | [1, 13, 4, 2, 3, 6]           |
|      | **Swap:** [1, 2, 4, 13, 3, 6] |
| 3    | [1, 2, 4, 13, 3, 6]           |
|      | **Swap:** [1, 2, 3, 13, 4, 6] |
| 4    | [1, 2, 3, 13, 4, 6]           |
|      | **Swap:** [1, 2, 3, 4, 13, 6] |
| 5    | [1, 2, 3, 4, 13, 6]           |
|      | **Swap:** [1, 2, 3, 4, 6, 13] |

### Sorted Array:

[1, 2, 3, 4, 6, 13]

## Code

```cpp
void selectionSort(vector<int>&arr) {
    // Write your code here.

    int i, j;

    for(i=0; i<arr.size()-1; i++) {
        int minEle = i;

        for(j=i+1; j<arr.size(); j++) {

            if(arr[j] < arr[minEle]) {
                minEle = j;
            }
        }

        int temp = arr[minEle];
        arr[minEle] = arr[i];
        arr[i] = temp;
    }
}
```
