// const selectionSort = (arr) => {
//   //loop for going through each element of array so that we can compare it with others
//   for (let i = 0; i < arr.length; i++) {
//     //setting the first element of the array as current index for minimum value
//     let currMinimum = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       // if next element in array is less than the current minimum value then setting index of it to current minimum
//       if (arr[j] < arr[currMinimum]) {
//         currMinimum = j;
//       }
//     }
//     // storing value of current index in temp variable
//     if (i !== currMinimum) {
//       console.log(i, currMinimum);
//       let temp = arr[i];
//       // assigning current minimum value to the current index
//       arr[i] = arr[currMinimum];
//       // assigning value of currMinimum index the temp (which is was the current value)
//       arr[currMinimum] = temp;
//     }
//     console.log("*************");
//   }
//   return arr;
// };

const selectionSort = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  //loop for going through each element of array so that we can compare it with others
  for (let i = 0; i < arr.length; i++) {
    //setting the first element of the array as current index for minimum value
    let currMinimum = i;
    for (let j = i + 1; j < arr.length; j++) {
      // if next element in array is less than the current minimum value then setting index of it to current minimum
      if (arr[j] < arr[currMinimum]) {
        currMinimum = j;
      }
    }
    // storing value of current index in temp variable
    if (i !== currMinimum) {
      console.log(i, currMinimum);
      swap(arr, i, currMinimum);
    }
    console.log("*************");
  }
  return arr;
};

const sortedValue = selectionSort([0, 1, 2, 3, 2, 4, 1, 5]);
console.log(sortedValue);
