// Create function `f` that takes array as parameter and then displays elements of this array on the screen using for loop. This function has to validate an input parameter.
// validations are the following:

// - Passed parameter has to be array.
// - Passed array can not be empty.
// - Passed array can only contain numbers.


function f(b) {
    if(!Array.isArray(b)) {
        console.log('parameter has to be array');
        return;
    }

    if(b.length === 0) {
        console.log('parameter can not be empty');
        return;
    }

    for(i = 0; i < b.length; i++) {
        if(typeof b[i] !== 'Number') {
            console.log('parameter can only contain numbers');
            return;
        }
    }

    for(i = 0; i < b.length; i++) {
        console.log(b[i]);
    }
}
