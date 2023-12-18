// Implement a function that converts a Javascript value into a JSON string.

const convertToJson = (data) => {
  try {
    const result = JSON.stringify(data);
    return result;
  } catch (err) {
    return null;
  }
};

const value = {
  name: "martine",
  age: 30,
  skills: ["react.js", "vue.js", "next.js"],
  address: {
    street: "12, Sidco Industrial Estate,thirumazhai, Thiruvallur Estate",
    city: "Chennai",
    Zipcode: 600107,
  },
};

console.log(convertToJson(value));
