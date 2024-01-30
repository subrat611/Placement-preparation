# Binary Search

- It is an algorithm that can be apply only if elements are arranged in sorted order. It not limited to array.

## Iterative

### Algorithm:

Now, we will apply the binary search algorithm in the given array:

- Step 1:

  - Divide the search space into 2 halves:
  - In order to divide the search space, we need to find the middle point of it. So, we will take a ‘mid’ pointer and do the following:
  - mid = (low+high) // 2 ( ‘//’ refers to integer division)

- Step 2:

  - Compare the middle element with the target:
  - In this step, we can observe 3 different cases:
    - If arr[mid] == target: We have found the target. From this step, we can return the index of the target possibly.
    - If target > arr[mid]: This case signifies our target is located on the right half of the array. So, the next search space will be the right half.
    - If target < arr[mid]: This case signifies our target is located on the left half of the array. So, the next search space will be the left half.

- Step 3:

  - Trim down the search space:
  - Based on the probable location of the target we will trim down the search space.
    - If the target occurs on the left, we should set the high pointer to mid-1. Thus the left half will be the next search space.
    - Similarly, if the target occurs on the right, we should set the low pointer to mid+1. Thus the right half will be the next search space.

## Recursive

### Algorithm

- Step 1:

  - Divide the search space into 2 halves:
  - In order to divide the search space, we need to find the middle point of it. So, we will take a ‘mid’ pointer and do the following:
  - mid = (low+high) // 2 ( ‘//’ refers to integer division)

- Step 2:

  - Compare the middle element with the target and trim down the search space:
  - In this step, we can observe 3 different cases:
    - If arr[mid] == target: We have found the target. From this step, we can return the index of the target, and the recursion will end.
    - If target > arr[mid]: This case signifies our target is located on the right half of the array. So, the next recursion call will be binarySearch(nums, mid+1, high).
    - If target < arr[mid]: This case signifies our target is located on the left half of the array. So, the next recursion call will be binarySearch(nums, low, mid-1).

- Base case:
  - The base case of the recursion will be low > high. If (low > high), the search space becomes invalid which means the target is not present in the array.

## TC

O(logn) - (base is 2)

## Overflow

0 .......... INT_MAX

mid = low + high / 2

let suppose low is INT_MAX

    = INT_MAX + INT_MAX / 2 (it overflow the int value)

to handle this we can use long long

or

mid = low + (high - low) / 2

    = INT_MAX + (INT_MAX - INT_MAX) / 2
    = INT_MAX + 0/2
