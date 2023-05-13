// Write your own implementation of function `mix`. 
// This function is waiting for unlimited number of parameters. 
// Each parameter has to be function, else throw error. 
// Function `mix` invokes callbacks one by one. 
// Each callback as a parameter get result of previous callback invoking. 
// First callback doesn't get any parameter.


const mix = ((...funs) => {
    if(!funs.every(func => typeof func  === 'function')){
        throw new Error('each parameter has to be function');
    }

    let result;
    for(func in funs){
        result = func(result);
    }
    
    return result;
})

 