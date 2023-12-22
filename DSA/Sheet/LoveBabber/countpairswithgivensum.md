# Count pairs with given sum

Given an array of N integers, and an integer K, find the number of pairs of elements in the array whose sum is equal to K.

[Link](https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum5022/1?page=1&difficulty=Easy&sprint=94ade6723438d94ecf0c00c3937dad55&sortBy=submissions)

## Approach

### Brute force:

```
for i to n – 1
    for i+1 to n
        if a[i] + a[i+1] == k
            count++;
return count;
```

- TC: O(N^2)
- SC: O(1)

### Better approach:

```
sort -> 1 1 5 7
Using two pointer approach left = 0, right = n-1 we check if the a[left] + a[right] == k
if true then count++; left++;
if false then right--;
else left++;
```

- TC: O(N log N) + O(N)
- SC: O(1)

### Optimal approach:

using hashing

```
1 5 7 1

1 -> 2
5 -> 1
7 -> 1

k – a[i] = 5 > 0
1 -> 1
count = 0 + 1 = 0

k – a[i] = 1 > 0
5 -> 0
count = 1 + 1 = 2

k – a[i] = -1 > 0 (x)

k – a[i] = 5 > 0
1 -> 0
count = 2 + 0 = 2

```

- TC: O(N)
- SC: O(N)

## Code

```cpp
 int getPairsCount(int arr[], int n, int k) {
        unordered_map<int, int> freq;
        int count = 0;

        for(int i=0; i<n; i++) {
            freq[arr[i]]++;
        }

        for(int i=0; i<n; i++) {

            if(freq[k-arr[i]] > 0) {

                freq[arr[i]]--;
                count += freq[k-arr[i]];
            }
        }

        return count;
    }
```
