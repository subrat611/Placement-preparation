## Problem : Count Frequency in a range

<code style="color: green">Easy</code> | <code style="color: green">Done</code>

<code style="color : purple">[Problem Link](https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/)</code>

<code style="color : purple">[Problem Link](https://www.codingninjas.com/studio/problems/count-frequency-in-a-range_8365446?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf)</code>

### Description

Given an array of length 'n'. Having the integers within the range 1 to x.

**Example 1:**

n = 6, x = 4

arr = [1, 3, 4, 3, 4, 1]

Output: [2, 0, 2, 2, 0, 0]

Explanation:

Frequency table:

| Number | Count |
| ------ | ----- |
| 1      | 2     |
| 2      | 0     |
| 3      | 2     |
| 4      | 2     |
| 5      | 0     |
| 6      | 0     |

**Example 2:**

n = 5, x = 5

arr = [1, 2, 3, 4, 5]

Output: [1, 1, 1, 1, 1]

Frequency table:

| Number | Count |
| ------ | ----- |
| 1      | 1     |
| 2      | 1     |
| 3      | 1     |
| 4      | 1     |
| 5      | 1     |

### Solution 1: Using Hashing method

Mapping value and frequency, in which presented element frequency get update and the element that are not present set as 0.

### Approach

1. Taking a vector array with n size having initial value 0.
2. Loop through the array and map the index with the index value.
3. Return the vector sized array.

### Code

```cpp
vector<int> countFrequency(int n, int x, vector<int> &nums){
    vector<int> ans(n,0);

    for(int i=0; i<nums.size(); i++) {
        ans[nums[i]-1]++;
    }

    return ans;
}
```
