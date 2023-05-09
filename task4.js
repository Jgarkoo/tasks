// Create function `getDivisors` that takes a number as a parameter and returns an array of its divisors (the numbers that divide the given number from 1 to the this number). This function has to validate the input parameter, because function can accept only a number greater than 0. (To add a new element in existing array, use array.push(element) method.) 

function getDivisors(a) {
    const arr1 = [];
    if(a !== Number && a <= 0) {
        return 'Pharameter can not be 0 or less than 0';
    }
    for(i = 1; i <= a; i++) {
        if(a % i === 0) {
            arr1.push(i);
        }
        
    }
    
    console.log(arr1);
}

console.log(getDivisors(10));
