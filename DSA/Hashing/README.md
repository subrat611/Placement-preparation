- [What is Hashmap](#what-is-hashmap)

## What is Hashmap?

- Hashmap is a data structure.
- In hashmap data are stored in key-value pair.

## Why Hashmap?

Let's take an array
[1, 2, 3, 4, 4, 5]
I want to find out the frequecy of each number then what I do traverse the entire array for each items.

![image](https://github.com/subrat611/DSA/assets/77252075/a38a1224-114e-4524-853d-e618c0db6cb6)

So if I am traverse the entire array for each item then my time complexity would be. O(n x n).

For 10^8 ~ 1 sec then fro 10^10 ~ 100 sec

How

1 operation -> 1/10^8

10^10 = 1/10^8 x 10^10 (10^10 == 10^2)

then it 100 sec

![image](https://github.com/subrat611/DSA/assets/77252075/16405ffc-94cf-4867-ae9c-17573818e297)

## In-built methods in C++

- map
  - Storing & fetching -> O(log n) [best, worst, average]
- unordered_map
  - Storing & fetching -> O(1) [average, best] O(n) [worst - it occur rare because of collision]

## Hashing methods

- Division method
- Folding method
- Mid square method

### Division method

![image](https://github.com/subrat611/DSA/assets/77252075/0504fcf4-1721-4620-b48f-46237f6bc0b5)
