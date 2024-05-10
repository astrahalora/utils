function maxSubarraySum(arr, n) {
    if(arr.length === 0 || n > arr.length) return null;
    
    let max = -Infinity;
    for(let i = 0; i < arr.length - n + 1; i++) {
        temp = 0;
        for(let j = 0; j < n; j++) {
            temp+= arr[i+j];
        }
        if(temp > max) {
            max = temp;
        }
    }
    return max;
}

function refactoredMaxSubarraySum(arr, n) {
    if(arr.length === 0 || n > arr.length) return null;

    let maxSum = 0;
    let tempSum = 0;

    for(let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}