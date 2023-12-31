# Sort Colors

<code style="color: yellow">Medium</code> | <code style="color: green">Done</code>

<code style="color : purple">[Problem Link](https://leetcode.com/problems/sort-colors/description/)</code>

# Code

## Brute force (Better)

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
        int zeros=0, ones=0, twos=0, ptr=0;

        for(int i=0; i<nums.size(); i++) {
            if(nums[i] == 0) {
                zeros++;
            }else if(nums[i] == 1) {
                ones++;
            }else {
                twos++;
            }
        }

        while(zeros--) {
            nums[ptr] = 0;
            ptr++;
        }

        while(ones--) {
            nums[ptr] = 1;
            ptr++;
        }

        while(twos--) {
            nums[ptr] = 2;
            ptr++;
        }
    }
};
```

## Optimal using DNF Algo

```cpp
class Solution {
public:
    void sortColors(vector<int>& nums) {
       int low=0, mid=0, high = nums.size()-1;

       while(mid<=high) {

           if(nums[mid] == 0) {
               swap(nums[low], nums[mid]);
               low++;
               mid++;
           }else if(nums[mid] == 1) {
               mid++;
           }else if(nums[mid] == 2) {
               swap(nums[high], nums[mid]);
               high--;
           }
       }
    }
};
```
