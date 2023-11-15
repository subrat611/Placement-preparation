// Leetcode

class Solution {
public:
    void reverseString(vector<char>& s) {
       recursiveFn(s, 0, s.size()-1);
    }

    void recursiveFn(vector<char>& s, int i, int j) {
        if(i>j) return;

        char temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        i++; j--;
        recursiveFn(s, i, j);
    }
};