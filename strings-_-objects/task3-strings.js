// Write a `searchWord` function to find a word within a string. Count found word(s).
// `searchWord` takes 2 parameters:

// 1. Word or a sentence - string
// 2. Word or a sentence to find - string

// Also add type checks and throw an error if params are not strings.


function searchWord(str, word){
    if(typeof str !=='string' || typeof word !== 'string'){
        throw new Error("both parameter must be string.");
    }

    let count = 0;
    let nextIndex = 0;

    while(true){
        let index = str.indexOf(word, nextIndex);
        if(index === -1){
            break;
        }
        count ++;
        nextIndex = index + word.length;
    }

    return `'${word}' was found ${count} time(s).`;
}


console.log(searchWord("aa, bb, cc, dd, aa", "aa")); // "'aa' was found 2 times."