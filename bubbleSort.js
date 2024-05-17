// NAIVE VERSION for completely random array
// sort progressively fewer times -> 
// values towards the end remain in place one by one set

function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([5,1,76,3,67,23,89,2]));

// refactored for case where array is almost sorted making less passes
// IF YOU KNOW YOUR DATA IS VERY NEARLY SORTED 
// THIS BUBBLE SWAP IS A GOOD ALGORITHM TO USE
function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for(let j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}