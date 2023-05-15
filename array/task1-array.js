// Create function `f`. This function gets one parameter: one dimensional or multidimensional array. 
// This function returns the sum of all elements from all dimensions.

// Note that the function should return the 0, if during the calculation of all levels (dimensions) no number was found.

// Function should contain next checks:

// - Parameter is required and has to be only array.
// - Throw error if on any dimension (level) you found not a number or not a array.

// - using flat, flatMap is not allowed.

function f(arr) {
    if(!Array.isArray(arr)){
        throw new Error ('parameter must be array'); 
    }

    let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    if (Array.isArray(element)) {
      
        sum += f(element);
      
    } else if (typeof element === 'number') {
      
        sum += element;
      
    } else {

      throw new Error ('Array must contain only numbers and arrays');
    
    }
  }
  
  return sum;
}

let arr1 = [[2, 4, 5], [1, 2, 3]];

console.log(f(arr1));
  