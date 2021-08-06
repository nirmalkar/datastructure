const selSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[j], arr[lowest]);
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
            const temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            console.log(arr);
        }
    }
};

selSort([2, 3, 1, 6, 8, 4, 23, 12, 67]);
