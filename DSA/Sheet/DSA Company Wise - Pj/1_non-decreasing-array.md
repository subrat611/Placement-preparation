# Non-decreasing Array

<code style="color: yellow">Medium</code> | <code style="color: green">Done</code>

<code style="color : purple">[Problem Link](https://leetcode.com/problems/non-decreasing-array/description/)</code>

# Description

Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

# Approach

- Declare a variable `isModified` to keep track of the changes (at most 1 one element).
- Traverse the array and check for

  - nums[i] <= nums[i+1] then continue;
  - isModified return flase;

  ```
    if nums[i+1] >= nums[i-1]
        then nums[i] = nums[i+1];
    else nums[i+1] = nums[i];
  ```

  - after the above condition run change the value of isModified to true.

- return true

# Code

```cpp
class Solution {
public:
    bool checkPossibility(vector<int>& nums) {
        bool isModified = false;

        for(int i=0; i<nums.size()-1; i++) {

            if(nums[i]<=nums[i+1]) continue;

            if(isModified) return false;

            if(i==0 || nums[i+1] >= nums[i-1]){
                nums[i] = nums[i+1];
            }
            else {
                nums[i+1] = nums[i];
            }
            isModified = true;
        }

        return true;
    }
};
```
