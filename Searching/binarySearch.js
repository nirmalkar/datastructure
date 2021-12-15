const numArr = [1, 2, 3, 4, 5, 6];

function isNumExists(numArr, Num) {
    let start = 0;
    let end = numArr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (numArr[middle] !== Num) {
        if (Num < numArr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
        console.log(start, end, middle);
    }
    if (numArr[middle] !== Num) {
        return middle;
    }
    return -1;
}

const NumFoundStatus = isNumExists(numArr, 6);
console.log(NumFoundStatus);
