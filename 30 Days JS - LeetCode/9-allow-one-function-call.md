## Problem: Allow One Function Call

[Problem Link](https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript)

## Intuition

Given a function `fn` and return a new identical function which ensure that it calls the `fn` at most once.

1. It call the `fn` only once (i.e at first run) and return the result of the first call.
2. Every subsequent call it return `undefined`.

## Approach

We can use the concept called `closures`. By defining a variable `isFnCalled` which track if the function called or not. If the function called at first time then we can set the variable `isFnCalled` as `true/1`.

If the function called first time then set the `isFnCalled` as true and return the result of `fn`. For the next subsequent calls return `undefined`.

## Code

```js
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let isFnCalled = 0;

  return function (...args) {
    if (!isFnCalled) {
      isFnCalled = 1;
      return fn(...args);
    }

    return undefined;
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
```
