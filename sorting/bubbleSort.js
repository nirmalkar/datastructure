// //Bubble sort normal
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log("one sort completed");
//   }
//   return arr;
// };
// console.log(bubbleSort([1, -3, 2, 3, 4]));

// //Bubble sort optimized

// const bubbleSortOpt = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//     console.log("one sort completed");
//   }
//   return arr;
// };
// console.log(bubbleSortOpt([1, -3, 2, 3, 4]));

//Bubble sort optimized with no swaps

const bubbleSortNoSwap = (arr) => {
  let isSwapBreak;
  for (let i = arr.length; i > 0; i--) {
    isSwapBreak = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapBreak = false;
      }
    }
    if (isSwapBreak) break;
  }
  return arr;
};

console.log(bubbleSortNoSwap([6, 1, 2, 3, 4, 5]));
