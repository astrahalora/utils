// add all numbers from 0 to n, where n is given
function addUpTo(n) {
    return n * (n + 1) / 2;
}

// always 3 operations, with a Big O of O(1)

function addUpTo2(n) {
    let total = 0;
    for (let index = 0; index < array.length; index++) {
        total += index;
    }
    return total;
}

// scaling by n of operations, with a Big O of O(n)

function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// O(n) operation inside a O(n) operation 
// with a Big O of O(n^2)