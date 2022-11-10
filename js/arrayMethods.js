export const arrayLength = (arr) => {
    let i = 0;
    while (arr[i]) {
        i++;
    }
    return i;
};

export const arrayPush = (arr, value) => {
    arr[arrayLength(arr)] = value;
    return arrayLength(arr);
};

export const arrayPop = (arr) => {
    let element = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return element;
};
