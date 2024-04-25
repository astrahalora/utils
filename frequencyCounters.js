const initial = [1, 2, 3, 4, 5, 6, 7];
const squared = [1, 4, 9, 16, 25, 36, 49];
const mixo = [4, 1, 49, 9, 25, 16, 36];
const rando = [3, 5, 7, 8, 9, 18, 5];

function same(arr1, arr2) {
    const results = [];
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] ** 2 === arr2[i]) {
            results.push(true);
        } else {
            results.push(false);
        }
    }
    return results.every(item => item === true);
}

// console.log(same(initial, squared));
// console.log(same(initial, rando));

function mixedSame(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    for(let i =0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) return false;
        arr2.splice(correctIndex, 1);
    }
    return true;
}

// console.log(mixedSame(initial, squared));
// console.log(mixedSame(initial, mixo))
// console.log(mixedSame(initial, rando));

// this implementation has a O(n^2) because it uses an indexOf inside a for loop
// refactoring below to O(n)

function refactoredSame(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1) {
        frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
    }

    for(let val of arr2) {
        frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
    }

    for(let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) return false;
        if(frequencyCounter2[key**2] !== frequencyCounter1[key]) return false;
    }

    return true;
}

// example use of same principle

function anagrams(str1, str2) {
    if(str1.length !== str2.length) return false;

    let frequencyCounter = {};

    for(let char of str1) {
        frequencyCounter[char] = ++frequencyCounter[char] || 1;
    }

    for(let char of str2) {
        if(!frequencyCounter[char]) {
            return false;
        } else {
            frequencyCounter[char]--
        }
    }

    return true;
}

console.log(anagrams("sugar", "rsuga"))
console.log(anagrams("mith", "mibt"))

