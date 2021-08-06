// find the two number whose sum is zero.
function sumZero(arr) {
  let pointerOne = 0;
  let pointerTwo = arr.length - 1;
  while (pointerOne < pointerTwo) {
    let sum = arr[pointerOne] + arr[pointerTwo];
    if (sum === 0) {
      return [arr[pointerOne], arr[pointerTwo]];
    } else if (sum > 0) {
      pointerTwo--;
    } else {
      pointerOne++;
    }
  }
}

const arr = [-3, 0, 1, 2, -2, -1, 4];
const res = sumZero(arr);
console.log(res);
