# Second Largest Number

<code style="color: yellow">Easy</code> | <code style="color: green">Done</code>

<code style="color : purple">[Problem Link](https://www.codingninjas.com/studio/problems/ninja-and-the-second-order-elements_6581960?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf&leftPanelTabValue=PROBLEM)</code>

# Description

Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.

# Brute Force Approach

## Solution 1: (Brute Force) [this approach only works if there are no duplicates]

### Intuition:

What do we do to find the largest or the smallest element present in an array? We ideally sort them and the first element would be the smallest of all while the last element would be the largest. Can we find the second-smallest and second-largest using a similar approach?

### Approach:

- Sort the array in ascending order
- The element present at the second index is the second smallest element
- The element present at the second index from the end is the second largest element

### Code

```cpp
vector<int> getSecondOrderElements(int n, vector<int> a) {
    vector<int>result;

    sort(a.begin(), a.end());

    result.push_back(a[n-2]);
    result.push_back(a[1]);

    return result;
}

```

### TC & SC

O(n log n), O(1)

# Solution 2 (Better Solution) [if there are duplicates] (Best Approach)

### Intuition:

Even though we want to have just the second smallest and largest elements, we are still sorting the entire array for that and thus increasing the time complexity. Can we somehow try to not sort the array and still get our answer?

### Approach:

- Find the smallest and largest element in the array in a single traversal
- After this, we once again traverse the array and find an element that is just greater than the smallest element we just found.
- Similarly, we would find the largest element which is just smaller than the largest element we just found
- Indeed, this is our second smallest and second largest element.

### Code

```cpp
#include<bits/stdc++.h>
using namespace std;
void getElements(int arr[],int n)
{
    if(n==0 || n==1)
        cout<<-1<<" "<<-1<<endl;  // edge case when only one element is present in array

    int small=INT_MAX,second_small=INT_MAX;
    int large=INT_MIN,second_large=INT_MIN;

    int i;
    // find small and large element
    for(i=0;i<n;i++)
    {
        small=min(small,arr[i]);
        large=max(large,arr[i]);
    }

    // find second large and small element
    for(i=0;i<n;i++)
    {
        if(arr[i]<second_small && arr[i]!=small)
            second_small=arr[i];
        if(arr[i]>second_large && arr[i]!=large)
            second_large=arr[i];
    }

    cout<<"Second smallest is "<<second_small<<endl;
    cout<<"Second largest is "<<second_large<<endl;
}

int main()
{
    int arr[]={1,2,4,6,7,5};
    int n=sizeof(arr)/sizeof(arr[0]);
    getElements(arr,n);
    return 0;
}
```

### TC & SC

- O(N) We do two linear traversals in our array
- O(1)

# Solution 3 (Optimal Approach)

### Intuition:

In the previous solution, even though we were able to bring down the time complexity to O(N), we still needed to do two traversals to find our answer. Can we do this in a single traversal by using smart comparisons on the go?

### Approach:

We would require four variables: small,second_small, large, and second_large. Variable small and second_small are initialized to INT_MAX while large and second_large are initialized to INT_MIN.

#### Second Smallest Algo:

- If the current element is smaller than ‘small’, then we update second_small and small variables
- Else if the current element is smaller than ‘second_small’ then we update the variable ‘second_small’
- Once we traverse the entire array, we would find the second smallest element in the variable second_small.
- Here’s a quick demonstration of the same.

#### Second Largest Algo:

- If the current element is larger than ‘large’ then update second_large and large variables
- Else if the current element is larger than ‘second_large’ then we update the variable second_large.
- Once we traverse the entire array, we would find the second largest element in the variable second_large.
- Here’s a quick demonstration of the same.)

### Code

```cpp
int secondLargest(vector<int> &a, int n) {

    int largest_ele = a[0];
    int second_largest_ele = -1;

    for(int i=0; i<a.size(); i++) {

        if(a[i] > largest_ele) {
            second_largest_ele = largest_ele;
            largest_ele = a[i];
        }
        else if(a[i] < largest_ele && a[i] > second_largest_ele) {
            second_largest_ele = a[i];
        }
    }

    return second_largest_ele;
}

int secondSmallest(vector<int> &a, int n) {

    int smallest_ele = a[0];
    int second_smallest_ele = INT_MAX;

    for(int i=0; i<a.size(); i++) {

        if(a[i] < smallest_ele) {
            second_smallest_ele = smallest_ele;
            smallest_ele = a[i];
        }
        else if(a[i] != smallest_ele && a[i] < second_smallest_ele) {
            second_smallest_ele = a[i];
        }
    }

    return second_smallest_ele;
}

vector<int> getSecondOrderElements(int n, vector<int> a) {

    int secondLargestEle = secondLargest(a, n);
    int secondSmallestEle = secondSmallest(a, n);


    return {secondLargestEle, secondSmallestEle};
}

```

### TC & SC

- O(N) Single-pass solution
- O(1)
