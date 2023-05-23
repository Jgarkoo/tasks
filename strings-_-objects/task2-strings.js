function reverseCase(sentence) {
    if(typeof sentence !== 'string'){
        throw new Error ('parameter must be string.');
    }

    let result = '';
    for(i = 0; i < sentence.length; i++){
        let char = sentence[i];
        if(char === char.toUpperCase()){
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

