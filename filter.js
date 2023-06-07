// filter function :-
// filter function is used to filter the element of a array through a function provided as agument to the filter method.
// filter is same as map method, but it returns the same element as it is present in the original array, it doe not modifies its value,
// only it filters the elements based on the another function.



let arr = [1 ,2, 3, 4, 5 ,6];

let arr1 = arr.filter((a) =>{
    if (a%2 == 0)
        return 1;       // If we return [true] in any form (1, true, -1, -2, .....) then it will add that element into the new array.
    
    else
        return undefined;   // If we return [false] in any form (0, false, undefined) then it will not add that element into the new array.
})

console.log(arr1);


let func1 = (a) => {
    return a%2 == 1;
}

let arr3 = arr.filter(func1);
console.log(arr3);