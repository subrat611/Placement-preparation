// Implement a function that performs insertion sort.

const insertionSort = (data) => {
  for (let i = 0; i < data.length; i++) {
    let j = i;

    while (j > 0 && data[j - 1] > data[j]) {
      let temp = data[j - 1];
      data[j - 1] = data[j];
      data[j] = temp;

      j--;
    }
  }

  return data;
};

const value = [3, 5, 8, 10, 1, 2, 4, 6, 7, 9];

console.log(insertionSort(value));
