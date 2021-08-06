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

//test 6th Aug 2021
function collectOdd(arr) {
  const oddNumsArr = []
  function helperFunc(arr, times) {
    console.log(times)
    if (times === 0) {
      return;
    }
if(arr[times] % 2 !== 0){
  oddNumsArr.push(arr[times])
}
    return helperFunc(arr, times - 1);
  }
  helperFunc(arr, arr.length - 1)
  console.log(oddNumsArr)
}

const oddValues = collectOdd([1, 3, 4, 2, 5, 6, 7, 9]);
