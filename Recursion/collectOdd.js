function collectOdd(arr) {
  const oddValuesArr = [];

  function helper(newArr) {
    if (!newArr.length) return;
    console.log(newArr[0]);
    const currentNumber = newArr[0];
    if (currentNumber % 2 !== 0) {
      oddValuesArr.push(currentNumber);
    }
    helper(newArr.slice(1));
  }

  helper(arr);
  return oddValuesArr;
}

const oddValuesArr = collectOdd([1, 3, 4, 2, 5, 6, 7, 9]);

console.log(oddValuesArr);
