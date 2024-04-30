function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) return [arr[i], arr[j]]
        }
    }
}

// time complexity O(n^2), space complexity O(1)
// console.log(sumZero([-3,-2,-1,0,1,2,3]))

function refactoredSumZero(arr) {
    let left = 0;
    let right = arr.length-1;

    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// time complexity O(n), space complexity O(1)

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    
    let i = 0;

    for(let j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }

    }

    return i + 1;
}

countUniqueValues([1,1,2,3,3,4,5,6,6,7]);