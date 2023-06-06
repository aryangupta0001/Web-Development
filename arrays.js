// The arrays in Javascript can hold any type of data, it is not necessary that they hold only homogenous data.




let a  = [1, 2, 3, 4, "Hello", true, undefined, 3.45];


/*
// printing array elements directly :-
console.log(a);

// printing array elements through ordinary for loop :-
for(let i = 0; i<a.length; i++){
    console.log(a[i]);
}

// printing array elements through for-of loop :-
for(i of a){
    console.log(i);
}

// printing array elements through for-in loop :-
for(i in a){
    console.log(a[i]);
}


// printing array elements through for-each loop :-
a.forEach((element) => {
    console.log(element);
})
*/



/*
// .length function :-

let Length = a.length;
console.log("\nThe length of array [a] is : ", Length);
*/


/*
// Unlike strings, arrays are mutable, i.e their elements can be changed and the arrays can be updated & modified :-


// Adding new elements to the array :-
a[8] = "\nNew element";

// Changing/updating the array :-
a[0] = 10;

console.log("\nThe updated array [a] is : ", a);

// Since ARRAY is not a primitive datatype, we define it ourself, so the Array-type is Object :-

console.log("\nThe type of Array is  :- ", typeof a);
*/


/*
// tostring function :-

let b = [1, 2, 3, 4]
// let b_string = b.toString();        // It returns a string by joining all the elements of an array with a comma [,]

// console.log("\nThe string formed is  : ", b_string);
*/


/*
// .join function :-
// It is same as .tostring functions, but in .join() method, we can give a character or a string as an argument, that will be used in
// between the elements of the array to join them

// let b_join = b.join("");
// console.log(b_join);
*/

/*
// pop function :-
// It removes the last element of the array & returns it. It is optional to store the popped element which it returns.

// console.log(" The old arry [b] is  : ", b);
// let popped = b.pop();
// b.pop();            // This is also suffecient if we do not want to store the popped element.
// console.log(` The array [b] after popping the last element ${popped} is : `, b);
*/


/*
// push function :-
// It pushes a element into the array & returns the new array length. It is optional to store the new array length which it returns.

// let new_length = b.push(5);
// b.push(5);       // If we do not want to store the new length of the array, then this is sufficient.
// console.log (" The new array [b] is ", b, " & the length is : ", new_length);
*/


/*
// shift function :-
// It pops the first element of the array & returns it. It is optional to store the poppeed element.

// console.log(" The array before popping 1st element is :- ", b);
// b.shift();
// console.log(" The array after popping the element is :- ", b);


// unshift function :-
// It pushes a element at the beginning of the array and returns the new length of the array, It is optional to store this length.

// console.log(" The array before unshifting is :- ", b);
// b.unshift(0);
// console.log(" The array after unshifting is :- ", b);
*/


/*
// delete operator :-
// delete operator is used to delete an element from an array. But it does not changes the length of the array
// i.e the length of the array before & after the deletio of the element remains same

// console.log(b)
// console.log(" The length of array is : ", b.length);

// delete b[1];

// console.log(" Array [b] after deleting the 2nd element from the array is :- ", b);
// console.log(" The length of array is : ", b.length);
*/


/*
// concat function :-
// concat function concatenates an array with other arrays and returns the concatenated array, it does not changes the orignal arrays

// let a1 = [1, 2, 3, 4, 5];
// let a2 = ["ARYAN", "RANBEER"];
// let a3 = ["ARVIND", "BHASKAR", "TARUN", "VARUN", "AJAY"];

// let concat_a = a1.concat(a2, a3);

// console.log(concat_a);
*/


/*
// sort function :-
// sort function sorts the array alphabetically, even if it contains integer, then also it will be sorted alphabetically.

let arr_ch = ["A", "Z", "RANBEER", "ARYAN"];
console.log(arr_ch.sort());

let arr_num = [2, 8, 5, 9, 5, 6, 3, 7, 65];
console.log(arr_num.sort());

// to sort integers, [sort] function takes an addittional function [compare] as its arguement
// Then it sorts the array on the basis of this compare function.

let compare = (a, b) => {
    return a - b;
}

console.log(arr_num.sort(compare));
*/


/*
// reverse function :-
// reverse function reverses the elements of the array :-

let a = [1, 5, 9, 3, 7, 6848];
console.log(a.reverse());
*/


/*
// splice function :-

// splice is a function which is used to delete & insert elements at a specific index position in the array.
// It returns the deleted elements. This is optional to store.

let arr = [1, 3, 5, 8, 9, 10, 23, 56, 7];

// let deleted = arr.splice(3, 5, 45, 56, 78, 12, 11000);
// console.log(deleted);

arr.splice(3, 5, 45, 56, 78, 12, 11000);
console.log(arr);

// first parameter :- array index from which insertion & deletion is to be performed
// second parameter :- no. of elements to be deleted
// remaining parameter :- elements to be inserted
*/


/*
// slice function :-

// slice returns a part of a array based on the parameters given to it. It is same as slicing a string.

let a = [1, 5, 4, 2, 3, 6, 7, 8];
// let b = a.slice(2, 6);
let b = a.slice(2);

console.log(b);

// If only one argument [a] is given, then the new array is formed from index [a] to the last.
// If two arguments [a, b] are given, then array is formed from index [a] to [b-1].
*/



// Array.from() function :-
// Array.from() is a funciton which creates array from a object or a string which is passed to it as a argument and returns it.

let String = "ARYAN";
let arr_string = Array.from(String);

`console.log(arr_string);