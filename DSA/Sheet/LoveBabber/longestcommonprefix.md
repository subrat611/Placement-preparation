# Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

[Link](https://leetcode.com/problems/longest-common-prefix/submissions/)

## Approach

### Brute force:

- In array consist of array of string. If we sort the array the strings are placed at correct position. Which help us to find the common prefix.
- Take the first and last string of the array.
- Loop over the minimum string.
- Check each character of the string
  - if they match append them to a variable.
  - If they dont match return or break the loop and print result.

## Code

```cpp
class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string prefixStr = "";

        sort(strs.begin(),strs.end());

        string firstStr = strs[0], lastStr = strs[strs.size()-1];

        for(int i=0; i<min(firstStr.size(), lastStr.size()); i++){
            if(firstStr[i] != lastStr[i]) return prefixStr;
            prefixStr += firstStr[i];
        }

        return prefixStr;
    }
};
```
