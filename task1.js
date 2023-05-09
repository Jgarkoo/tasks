// You have array `[2, 5, 9, 15, 0, 4]`. Using loop `for` and operator `if`, show in console, elements which are greater than 3, but lesser than 10.

let arr1 = [2, 5, 9, 15, 0, 4];

for(let i = 0; i < arr1.length; i ++){
    if(arr1[i] > 3 && arr1[i] < 10){
        console.log(arr1[i]);
    }
    
  }