function merge(arr1, arr2) {
    const results = [];
    let i = 0;
    let j = 0;

    while( i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++;
        } else if (arr1[i] > arr2[j]) {
            results.push(arr2[j])
            j++;
        } else {
            results.push(arr1[i]);
            results.push(arr2[j]);
            i++;
            j++;
        }
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

console.log(merge([2,3,4,5,11,77], [11, 15, 18, 22, 77]));

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

console.log(mergeSort([88,33,2,55,1,3,7,3,9,2,14,5,6,33,65,78,23]))