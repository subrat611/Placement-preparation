## Problem : Frequency of the Most Frequent Element

<code style="color: yellow">Medium</code> | <code style="color: red">Revisit</code>

<code style="color : purple">[Problem Link](https://leetcode.com/problems/frequency-of-the-most-frequent-element/description/)</code>

### Solution 1: Sorting & Sliding window

### Code

```cpp
class Solution {
public:
    int maxFrequency(vector<int>& nums, int k) {

        // sort
        sort(nums.begin(), nums.end());

        long left = 0, right = 0;
        long ans = 0, total = 0;

        while(right < nums.size()) {

            total += nums[right];

            // sliding window
            while((nums[right] * (right - left + 1)) > total + k) {
                total -= nums[left];
                left++;
            }

            ans = max(ans, right - left +1);

            right++;
        }

        return ans;
    }
};
```
