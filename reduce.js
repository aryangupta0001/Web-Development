// reduce function :-


/* Hover over reduce function to read its definition & for more clear understandting.

It calls a function (provided as argument to it) for each array element, and uses the value returned by this function as argument
in calling of funciton for the next argument.

*/

// let arr = [1, 2, 3, 4, 5, 6];

// let func = (a, b, c, d, e) =>{
//     console.log(a, b, c, d, e, a*b);
//     return a*b;
// }

// let val = arr.reduce(func, 10);

// console.log(val);

/*
The function provided to it as the argument is called by the reduce function & provided with 4 arguments, the current element,
the previous element, the current index & the array itself.

if an addittional argument is also provided to the function, then it uses it as the first argument to pass into the function.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let fact = (a,b) => {
    return a*b;
}
console.log(arr.reduce(fact));