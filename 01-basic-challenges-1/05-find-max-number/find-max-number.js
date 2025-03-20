function findMaxNumber(arr) {
  let count = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > count) {
      count = arr[i];
    }
  }

  return count;
}

// const findMaxNumber = (arr) => {
//   return Math.max(...arr);
// };

module.exports = findMaxNumber;
