// ASC sort
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function pivot(arr, start=0, end=arr.length+1) {
    let pivot = arr[start];
    let swapIndex = start;

    for(let i = start+1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

console.log(pivot([4,11,6,34,22,89,2,1,6]));

function quickSort(arr, left=0, right=arr.length-1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

console.log(quickSort([4,11,6,34,22,89,2,1,6]))

//Time complexity O(n^2) if array is already sorted, O(n log n) if unsorted