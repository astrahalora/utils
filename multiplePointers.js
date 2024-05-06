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

function isSubsequence(str1, str2) {
    let counter = 0;
    let iStart = 0;
    let iEnd = str1.length-1;
    let jStart = 0;
    let jEnd = str2.length-1;

    while(iStart <= iEnd && jStart <= jEnd) {
        if(str1.charAt(iStart) === str2.charAt(jStart)) {
            counter++;
            iStart++;
            jStart++;
        } else {
            jStart++;
        }
    }

    return counter === str1.length;
  }

isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

// In Big O notation, O(max(n, m)) means that the 
// time complexity of the algorithm grows linearly with 
// the maximum of the lengths of the two input strings, n and m.

// Comparing it to other common complexities:

// It's better than O(n * m), where the time complexity grows 
// proportionally to the product of the lengths of the input strings.
// It's worse than O(n + m), where the time complexity 
// grows proportionally to the sum of the lengths of the input strings.
// It's equivalent to O(n) or O(m) if one of the input 
// strings dominates the other in terms of length.
// So, O(max(n, m)) is relatively efficient, 
// especially when compared to algorithms with 
// quadratic or exponential time complexities. 
// However, it's not as efficient as linear time 
// complexity (O(n)) when considering only one input string.

function refactoredIsSubsequence(str1, str2) {
    // Initialize pointers for both strings
    let i = 0;
    let j = 0;

    // Iterate through both strings
    while (i < str1.length && j < str2.length) {
        // If characters match, move pointer for str1
        if (str1[i] === str2[j]) {
            i++;
        }
        // Move pointer for str2
        j++;
    }

    // If all characters of str1 have been found in str2 in the same order,
    // then i will equal the length of str1
    return i === str1.length;
}

// complexity of O(n + m).


