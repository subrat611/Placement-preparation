# Majority Element

<code style="color: yellow">Medium</code> | <code style="color: green">Done</code>

<code style="color : purple">[Problem Link](https://leetcode.com/problems/majority-element/description/)</code>

# Code

## Brute force

- O(N^2)

## Better (using hashmap)

```cpp
class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unordered_map<int, int> freq;

        for(int i=0; i<nums.size(); i++) {
            freq[nums[i]]++;
        }

        for(auto key: freq) {
            if(key.second > nums.size()/2) {
                return key.first;
            }
        }

        return 0;
    }
};

```

## Optimal (Moore's voting algorithm)

- Two variable element, count=0
- Verify if element(that found) is majority or not by looping through array and checking the freq. (This step is need if interview tell there might be might not be majority element preset)

```cpp
int majorityElement(vector<int> v) {

    //size of the given array:
    int n = v.size();
    int cnt = 0; // count
    int el; // Element

    //applying the algorithm:
    for (int i = 0; i < n; i++) {
        if (cnt == 0) {
            cnt = 1;
            el = v[i];
        }
        else if (el == v[i]) cnt++;
        else cnt--;
    }

    //checking if the stored element
    // is the majority element:
    int cnt1 = 0;
    for (int i = 0; i < n; i++) {
        if (v[i] == el) cnt1++;
    }

    if (cnt1 > (n / 2)) return el;
    return -1;
}
```

## TC & SC

- O(N) + O(N), where N = size of the given array.

- Reason: The first O(N) is to calculate the count and find the expected majority element. The second one is to check if the expected element is the majority one or not.

- If the question states that the array must contain a majority element, in that case, we do not need the second check. Then the time complexity will boil down to O(N).

- O(1)
