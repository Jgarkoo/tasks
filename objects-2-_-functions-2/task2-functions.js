// Improve your implementation of function `mix`. 
// If any callback throw error - catch it and go to the next callback. 
// Function `mix` has to return always object with two properties `errors` and `value`. 
// Note that `value` contains the result of calls to all callbacks, 
// and ` errors` contains an array with information about all errors and the callback index where it was generated.

const mix = (...funs) =>{
    let result = {value: null, errors : []};
    funs.forEach((fun)=>{
        if(typeof fun !== 'function'){
            throw new Error("parameter is not a function")
        }
       try{
            result.value = fun(result.value);
            
       } catch(err){
            result.errors.push({
                name : err.name,
                message: err.message,
                stack: err.stack,
                level: funs.indexOf(fun)
                
            })
       }
    })
     return result;
}


