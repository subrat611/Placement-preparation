# Find the number that appears once, and the other numbers twice

<code style="color: yellow">Easy</code> | <code style="color: green">Done</code>

<code style="color : purple">[Problem Link](https://leetcode.com/problems/single-number/)</code>

- [Brute Force Approach](#brute-force-approach)
- [Better Approach 1 (Using Hashing)](#better-approach-1-using-hashing)
- [Better Approach 2 (Hashing using the map data structure)](#better-approach-2-hashing-using-the-map-data-structure)
- [Optimal Approach (Using XOR)](#optimal-approach-using-xor)

# Description

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

# Brute Force Approach

## Intuition:

For every element present in the array, we will do a linear search and count the occurrence. If for any element, the occurrence is 1, we will return it.

## Approach:

The steps are as follows:

- First, we will run a loop(say i) to select the elements of the array one by one.
- For every element arr[i], we will perform a linear search using another loop and count its occurrence.
- If for any element the occurrence is 1, we will return it.

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int getSingleElement(vector<int> &arr) {
    // Size of the array:
    int n = arr.size();

    //Run a loop for selecting elements:
    for (int i = 0; i < n; i++) {
        int num = arr[i]; // selected element
        int cnt = 0;

        //find the occurrence using linear search:
        for (int j = 0; j < n; j++) {
            if (arr[j] == num)
                cnt++;
        }

        // if the occurrence is 1 return ans:
        if (cnt == 1) return num;
    }

    //This line will never execute
    //if the array contains a single element.
    return -1;
}

int main()
{
    vector<int> arr = {4, 1, 2, 1, 2};
    int ans = getSingleElement(arr);
    cout << "The single element is: " << ans << endl;
    return 0;
}
```

## TC & SC

O(n^2), O(1)

# Better Approach 1 (Using Hashing)

## Intuition:

In the previous approach, we were finding the occurrence of an element using linear search. We can optimize this using hashing technique. We can simply hash the elements along with their occurrences in the form of (key, value) pair. Thus, we can reduce the cost of finding the occurrence and hence the time complexity.

Now, hashing can be done in two different ways and they are the following:

- Array hashing(not applicable if the array contains negatives or very large numbers)
- Hashing using the map data structure

## Array hashing:

In order to hash using an array, we need to first find the maximum element(say maxElement) to get the range of the hash array. The index of the hash array will represent the elements of the given array and the value stored in that index will be the number of occurrences. Now, the size of the array must be maxElement+1 as we need to hash the maxElement itself.

### Approach:

The steps are as follows:

- First, we will find the maximum element(say maxElement) to know the size of the hash array.
- Then we will declare a hash array of size maxElement+1.
- Now, using another loop we will store the elements of the array along with their frequency in the hash array. (i.e. hash[arr[i]]++)
- After that, using another loop we will iterate over the hash array, and try to find the element for which the frequency is 1, and finally, we will return that particular element.

Note: While searching for the answer finally, we can either use a loop from 0 to n(i.e. Size of the array) or use a loop from 0 to maxElement. So, the time complexity will change accordingly.

Now, using array hashing it is difficult to hash the elements of the array if it contains negative numbers or a very large number. So to avoid these problems, we will be using the map data structure to hash the array elements.

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int getSingleElement(vector<int> &arr) {

    //size of the array:
    int n = arr.size();

    // Find the maximum element:
    int maxi = arr[0];
    for (int i = 0; i < n; i++) {
        maxi = max(maxi, arr[i]);
    }

    // Declare hash array of size maxi+1
    // And hash the given array:
    vector<int> hash(maxi + 1, 0);
    for (int i = 0; i < n; i++) {
        hash[arr[i]]++;
    }

    //Find the single element and return the answer:
    for (int i = 0; i < n; i++) {
        if (hash[arr[i]] == 1)
            return arr[i];
    }

    //This line will never execute
    //if the array contains a single element.
    return -1;
}

int main()
{
    vector<int> arr = {4, 1, 2, 1, 2};
    int ans = getSingleElement(arr);
    cout << "The single element is: " << ans << endl;
    return 0;
}
```

## TC & SC

O(N)+O(N)+O(N), O(maxElement+1) where maxElement = the maximum element of the array.

# Better Approach 2 (Hashing using the map data structure):

## Intuition:

The intuition will be the same as the array hashing. The only difference here is we will use the map data structure for hashing instead of using another array for hashing.

## Approach:

The steps are as follows:

- First, we will declare a map.
- Now, using a loop we will store the elements of the array along with their frequency in the map data structure.
- Using another loop we will iterate over the map, and try to find the element for which the frequency is 1, and finally, we will return that particular element.

```cpp
#include <bits/stdc++.h>
using namespace std;

int getSingleElement(vector<int> &arr) {

    //size of the array:
    int n = arr.size();

    // Declare the hashmap.
    // And hash the given array:
    map<int, int> mpp;
    for (int i = 0; i < n; i++) {
        mpp[arr[i]]++;
    }

    //Find the single element and return the answer:
    for (auto it : mpp) {
        if (it.second == 1)
            return it.first;
    }

    //This line will never execute
    //if the array contains a single element.
    return -1;
}

int main()
{
    vector<int> arr = {4, 1, 2, 1, 2};
    int ans = getSingleElement(arr);
    cout << "The single element is: " << ans << endl;
    return 0;
}
```

## TC & SC

- O(N\*logM) + O(M), where M = size of the map i.e. M = (N/2)+1. N = size of the array.
- O(M) as we are using a map data structure. Here M = size of the map i.e. M = (N/2)+1

# Optimal Approach (Using XOR)

## Intuition:

Two important properties of XOR are the following:

XOR of two same numbers is always 0 i.e. a ^ a = 0. ←Property 1.
XOR of a number with 0 will result in the number itself i.e. 0 ^ a = a. ←Property 2

Here all the numbers except the single number appear twice and so will form a pair. Now, if we perform XOR of all elements of the array, the XOR of each pair will result in 0 according to the XOR property 1. The result will be = 0 ^ (single number) = single number (according to property 2).

So, if we perform the XOR of all the numbers of the array elements, we will be left with a single number.

## Approach:

We will just perform the XOR of all elements of the array using a loop and the final XOR will be the answer.

## Code

```cpp
#include <bits/stdc++.h>
using namespace std;

int getSingleElement(vector<int> &arr) {
    //size of the array:
    int n = arr.size();

    // XOR all the elements:
    int xorr = 0;
    for (int i = 0; i < n; i++) {
        xorr = xorr ^ arr[i];
    }
    return xorr;
}

int main()
{
    vector<int> arr = {4, 1, 2, 1, 2};
    int ans = getSingleElement(arr);
    cout << "The single element is: " << ans << endl;
    return 0;
}
```

## TC & SC

O(N), O(1)
