function uniqueValues(arr) {
  const sortedArr = arr.sort();
  const uniqueArr = [sortedArr[0]];
  let pointerOne = 0;
  let pointerTwo = sortedArr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    if (
      sortedArr[pointerOne] !== sortedArr[pointerTwo] &&
      uniqueArr.indexOf(sortedArr[pointerTwo]) === -1
    ) {
      uniqueArr.push(sortedArr[pointerTwo]);
      pointerTwo = pointerTwo - 1;
    } else {
      pointerTwo = pointerTwo - 1;
    }
  }
  return uniqueArr;
}

const arr = [1, 2, 2, 5, 5, 3, 4, 6, 7, 8, 8, 2, 1, 9];
const checkArr = [];
const uniqueArr = uniqueValues(arr);
console.log(uniqueArr);
