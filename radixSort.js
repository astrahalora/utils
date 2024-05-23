// no direct comparisons
function getDigit(num, position) {
    return Math.floor(Math.abs(num) / Math.pow(10, position)) % 10;
}

function digitCount(num) {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function RadixSort(arr) {
    let maxDigitCount = mostDigits(arr);
    for(let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

console.log(RadixSort([2451,34,2,67,234,1784,4234,12,43,894,7612,423,4,9,32,7932]));
// Time Complexity of O(nk)
// n - length of array
// k - number of digits
// Space complexity O(n + k)
// great algorithm for long arrays of decent sized numbers