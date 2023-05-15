// Create function `reverse`, that gets array as parameter and returns array in opposite order.

// Function should contain next checks:

// - Parameter required and has to be only array
// - Throw error if passed empty array
// - Creating new array is not allowed
// - Using Array.reverse is not allowed 

function reverse(arr) {
    if(!Array.isArray(arr)){
        throw new Error("Parameter required and has to be only array");
    }

    if(arr.length === 0) {
        throw new Error(" array must not be empty");
    }

    for(i = 0; i < arr.length / 2; i++){
        let luka = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length -1 - i] = luka;    
    }

    return arr;
}

let arr2 = [1, 2, 3, 4];

console.log(reverse(arr2));
