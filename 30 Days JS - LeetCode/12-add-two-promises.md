## Add Two Promises

[Problem Link](https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript)

<code style="color: yellow">Easy</code>

## Intuition

Given two promises `promise1` and `promise2`. you have to return a new promise which resolve with the reuslt of sum of these two promise `promise1` and `promise2`.

## Code

```javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [resultP1, resultP2] = await Promise.all([promise1, promise2]);

    return Promise.resolve(resultP1 + resultP2)
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
```