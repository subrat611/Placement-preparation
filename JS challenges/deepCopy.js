// Implement a function that performs a deep copy of a value, but also handles circular references

/**
 * Circular references occur when an object references itself directly or indirectly.
 * JSON.stringify() cannot handle circular references, and attempting to stringify an object with circular references will result in an error.
 */

/**
 * NOTE:
 *
 * Shallow Copy:
 *
 * Definition:
 * A shallow copy creates a new object, but it does not create copies of nested objects. Instead, it copies references to the original nested objects.
 *
 * Copy Depth:
 * Only the top-level structure of the object is duplicated; nested objects and arrays are still references to the same objects in memory.
 *
 * Method:
 * Common methods for creating a shallow copy include Object.assign(), the spread operator (...), and Array.slice().
 *
 * Performance:
 * Shallow copies are generally faster and more memory-efficient than deep copies since they don't duplicate the entire object structure.
 *
 *
 * Deep Copy:
 *
 * Definition:
 * A deep copy creates a new object and recursively copies all nested objects and arrays, resulting in entirely new instances of all objects in the structure.
 *
 * Copy Depth:
 * It duplicates not only the top-level structure but also all nested objects and arrays, ensuring a fully independent copy.
 *
 * Method:
 * Creating a deep copy often requires a custom implementation or using external libraries like lodash.cloneDeep or JSON.parse(JSON.stringify()).
 *
 * Performance:
 * Deep copies are generally slower and may consume more memory, especially for large and complex data structures, due to the need to duplicate all nested objects.
 *
 * Caution:
 * when using deep copy with objects containing functions, prototypes, or non-JSON-safe data, as JSON.stringify may not handle them correctly.
 */

/**
 * Approach:
 * Track each object that have already been copied.
 * By using Map prevents infinite recursion when encounter circular references.
 */
const deepCopyWithCircularRef = (data, copies = new Map()) => {
  // check if the data is a primitive type, return data
  if (data === null || data !== "object") return data;

  // if object has already been copied, return existing copy
  if (copies.has(data)) {
    return copies.get(data);
  }

  // create a new copy of object or array
  let newCopy = Array.isArray(data) ? [] : {};

  // add newCopy to copies map to handle circular references
  copies.set(data, newCopy);

  // recursively copies
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      newCopy[key] = deepCopyWithCircularRef(data[key], copies);
    }
  }

  return newCopy;
};

const value = {
  name: "martine",
  age: 30,
  skills: ["react.js", "vue.js", "next.js"],
  address: {
    street: "12, Sidco Industrial Estate,thirumazhai, Thiruvallur Estate",
    city: "Chennai",
    Zipcode: 600107,
    circularRef: null,
  },
};

value.address.circularRef = value;

console.log(deepCopyWithCircularRef(value));
