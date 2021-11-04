//sort array using quick sort
const sort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    } else {
        //if array is greater than 1
        let pivot = arr[0];
        let left = []; //left side of pivot
        let right = []; //right side of pivot
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return sort(left).concat(pivot, sort(right));
    }
};

console.log(sort([8, 3, 2, 4, 6, 5]));
