// Implement a function to filter rows of data matching a specified requirement.

/**
 * @param {Array} data
 * @param {Function} cb - condition
 * @returns {Array} filtered rows
 */

const filterRows = (data, cb) => {
  return data.filter(cb);
};

const value = [
  {
    name: "martine",
    age: 30,
    skills: ["react.js", "vue.js", "next.js"],
  },
  {
    name: "yokin",
    age: 10,
    skills: ["react.js", "vue.js", "next.js"],
  },
  {
    name: "kosuki",
    age: 30,
    skills: ["react.js", "vue.js", "next.js"],
  },
];

const condition = (item) => item.age > 10;

console.log(filterRows(value, condition));
