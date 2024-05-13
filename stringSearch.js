function naiveSearch(long, short) {
    let matches = 0;

    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]) break;
            if(j === short.length-1) matches++;
        }
    }
    return matches;
}

console.log(naiveSearch("lorie loled", "lol"));