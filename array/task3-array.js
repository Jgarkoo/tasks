// Create function `rotate`, which will rotate array based on given parameters.

// params:
// array - required - target
// number - required - count(how many times) to rotate array
// string - optional - rotate direction: left or right. defualt is right

// - function should contain checks:
// - first parameter required and has to be only array
// - second parameter required and has to be number
// - third parameter optional and has to be only string

// - creating new array is not allowed

function rotate(arr, num, str = 'right') {
    
    if(!Array.isArray(arr)){
        throw new Error ("first parameter has to be only array")
    }

    if(typeof num !== 'Number'){
        throw new Error('second parameter has to be number')
    }

    if(typeof str !== 'String'){
        throw new Error ('Third parameter has to be String')
    }

    if(str === 'left'){
        for(i = 1; i <= num; i++){
            let first = arr[0];
            arr.shift(arr[0])
            arr.push(first);
        }
    } else {
        for(i = 1; i <= num; i++){
        let last = arr[arr.length -1];
        arr.pop(arr[arr.length -1])
        arr.unshift(last);
        }
    }

    return arr;
}
