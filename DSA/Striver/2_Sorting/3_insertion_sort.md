## Insertion Sort

<code style="color: green">Easy</code> | <code style="color: green">Done</code>

## Approach

1. Select an element in each iteration from the unsorted array(using a loop).
2. Place it in its corresponding position in the sorted part and shift the remaining elements accordingly (using an inner loop and swapping).
3. The “inner while loop” basically shifts the elements using swapping.

```cpp
void insertionSort(int arr[], int n)
{
    //write your code here
    for(int i=0; i<n; i++) {

        int j=i;

        while(j>0 && arr[j-1] > arr[j]) {

            int temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}
```
