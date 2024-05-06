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

function averagePair(arr, targetAverage){
    if(arr.length === 0) return false;

    let left = 0;
    let right = arr.length-1;

    while(left < right) {
        let avg = (arr[left] + arr[right]) / 2;

        if(avg === targetAverage) {
            return true;
        } else if (avg > targetAverage) {
            right--
        } else {
            left++
        }
    }

    return false;
  }

  averagePair([1,2,3],2.5) // true
  averagePair([1,3,3,5,6,7,10,12,19],8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([],4) // false

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