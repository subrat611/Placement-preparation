## Memoize

[Problem Link](https://leetcode.com/problems/memoize/?envType=study-plan-v2&envId=30-days-of-javascript)

<code style="color: yellow">Medium</code>

## Intuition

Create a **memoized** version of that function that takes a function `fn`.

> A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

1. sum accepts two integers a and b and returns a + b.
2. fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
3. factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) \* n otherwise.

## Approach

1. Define a function called `memoize` that takes a function `fn` as its parameter.
2. Create an empty object called `cache` to store previously computed results.
3. Return a new function that takes in any number of arguments using the spread syntax.
4. Use `JSON.stringify()` to convert the arguments into a string to use as a key for the cache object.
5. Check if the key already exists in the cache object. If it does, return the cached value.
6. If the key doesn't exist in the cache, call the original function fn using apply() to pass the arguments and store the result in the cache object using the key as the property name.
7. Finally, return the computed result.

### Caching

- Caching refers to the process of storing and reusing previously fetched or computed data to improve performance and reduce the need for redundant requests.

### Memoized function

- A memoized function is a function that caches its results based on the input parameters. The idea behind memoization is to store the results of expensive function calls and return the cached result when the same inputs occur again. This can significantly improve the performance of a function by avoiding redundant computations.

## TC & SC

- Memoized function depends on the original function being memoized, and can range from O(1) to O(n) to O(2^n).

## SC

- O(n), where n is the number of unique inputs to the function.

## Code

**NOTE: HERE I AM USING MAP INSTEAD OF OBJECT**

```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    let result;

    if (!cache.size) {
      result = fn(...args);
      cache.set(JSON.stringify(args), result);
      return result;
    }

    if (cache.has(JSON.stringify(args))) {
      return cache.get(JSON.stringify(args));
    }

    result = fn(...args);
    cache.set(JSON.stringify(args), result);

    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
```
