// map function :-
// map function is used to create a array based on another array by performing some modifications to the eelements of the original array.

// map function actually calls a function for every element of the original array, the function is provided to it as argument
// map function works like a for-each loop, It iterates through every element of the original array & calls the provided function every
// /time & returns the modified element, which is stored in a new array.

let arr = [1, 2, 3, 4 ,5];

let arr1 = arr.map((value) => {         // Here the function provided as arguement is defined in the map function.
    return 2*value;
});

console.log(arr1);

let func1 = (a) => {
    return a+1;
};
let arr2 = arr.map(func1);          // Here the function provided as argument is defined outside

console.log(arr2);


// We can also give the index & the array itself as argument in the function provided as argument to the map function.  
let func2 = (a, b, c) => {
    console.log(a, b, c);   
    return a*b;
}

let arr3 = arr.map(func2);

console.log(arr3);