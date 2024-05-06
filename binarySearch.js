//Binary Search, BigO of Log(n)

function search(arr, num) {
    let min = 0;
    let max = arr.length -1;

    while(min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if(currentElement < num) {
            min = middle + 1;
        } else if( currentElement > num) {
            max = middle - 1;
        } else {
            return middle;
        }
    }

    return -1;
}