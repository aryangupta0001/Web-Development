// The arrays in Javascript can hold any type of data, it is not necessary that they hold only homogenous data.



let arr1  = [1, 2, 3, 4, "Hello", true, undefined, 3.45];



// printing array elements directly :-
console.log(arr1);

// printing array elements through ordinary for loop :-
for(let i = 0; i<arr1.length; i++){
    console.log(arr1[i]);
}

// printing array elements through for-of loop :-
for(i of arr1){
    console.log(i);
}

// printing array elements through for-in loop :-
for(i in arr1){
    console.log(arr1[i]);
}


// printing array elements through for-each loop :-
arr1.forEach((element) => {
    console.log(element);
})


// More on for-loops :- https://github.com/aryangupta0001/javascript/blob/master/for_for_in_for_of_loops.js





// .length function :-

let Length = arr1.length;
console.log("\nThe length of array [a] is : ", Length);




// Unlike strings, arrays are mutable, i.e their elements can be changed and the arrays can be updated & modified :-


// Adding new elements to the array :-
arr1[8] = "\nNew element";

// Changing/updating the array :-
arr1[0] = 10;

console.log("\nThe updated array [arr1] is : ", arr1);

// Since ARRAY is not a primitive datatype, we define it ourself, so the Array-type is Object :-

console.log("\nThe type of Array is  :- ", typeof arr1);




// tostring function :-

let arr2 = [1, 2, 3, 4]
let arr2_string = arr2.toString();        // It returns a string by joining all the elements of an array with a comma [,]

console.log("\nThe string formed is  : ", arr2_string);




// .join function :-
// It is same as .tostring functions, but in .join() method, we can give a character or a string as an argument, that will be used in between the elements of the array to join them

let arr1_join = arr1.join("");
console.log(arr1_join);

let arr2_join = arr2.join("-");
console.log(arr2_join);




// pop function :-
// It removes the last element of the array & returns it. It is optional to store the popped element which it returns.

console.log(" The old arry [arr2] is  : ", arr2);
let popped = arr2.pop();
arr2.pop();                                                                        // This is also suffecient if we do not want to store the popped element.
console.log(` The array [arr2] after popping the last element ${popped} is : `, arr2);




// push function :-
// It pushes a element into the array & returns the new array length. It is optional to store the new array length which it returns.

arr2.push(5);                                                                  // If we do not want to store the new length of the array, then this is sufficient.
let new_length = arr2.push(5);
console.log (" The new array [arr2] is ", arr2, " & the length is : ", new_length);




// shift function :-
// It pops the first element of the array & returns it. It is optional to store the poppeed element.

console.log(" The array before popping 1st element is :- ", arr2);
arr2.shift();
console.log(" The array after popping the element is :- ", arr2);


// unshift function :-
// It pushes a element at the beginning of the array and returns the new length of the array, It is optional to store this length.

console.log(" The array before unshifting is :- ", arr2);
arr2.unshift(0);
console.log(" The array after unshifting is :- ", arr2);




// delete operator :-
// delete operator is used to delete an element from an array. But it does not changes the length of the array
// i.e the length of the array before & after the deletion of the element remains same

console.log(arr2)
console.log(" The length of array is : ", arr2.length);

delete arr2[1];

console.log(" Array [arr2] after deleting the 2nd element from the array is :- ", arr2);
console.log(" The length of array is : ", arr2.length);




// concat function :-
// concat function concatenates an array with other arrays and returns the concatenated array, it does not changes the orignal arrays

let a1 = [1, 2, 3, 4, 5];
let a2 = ["ARYAN", "RANBEER"];
let a3 = ["ARVIND", "BHASKAR", "TARUN", "VARUN", "AJAY"];

let concat_arr = a1.concat(a2, a3);

console.log(concat_arr);




// sort function :-
// .sort function sorts the array alphabetically, even if it contains integer, then also it will be sorted alphabetically.

let arr_char = ["A", "Z", "RANBEER", "ARYAN"];
console.log(arr_char.sort());

let arr_num = [2, 8, 5, 9, 5, 6, 3, 7, 65];
console.log(arr_num.sort());




// The above .sort function cannot beused for sorting the numerical values, so we use addittional function, which compares the values to soort them.

// to sort integers, [sort] function takes an addittional function [compare] as its arguement
// Then it sorts the array on the basis of this compare function.

// if the compare function returns a (-)ve value, [a] is sorted before [b]
// if the compare function returns a (+)ve value, [b]] is sorted before [a]
// if the compare function returns 0, no sorting is done


let compare = (a, b) => {
    return a - b;
}

console.log(arr_num.sort(compare));

console.log(arr_num);

// To sort in decreasing order, just change [a-b] to [b-a].









// reverse function :-
// reverse function reverses the elements of the array :-

let arr3 = [1, 5, 9, 3, 7, 6848];
console.log(arr3.reverse());




// splice function :-

// splice is a function which is used to delete & insert elements at a specific index position in the array.
// It returns the deleted elements. This is optional to store.

// first parameter :- array index from which insertion & deletion is to be performed
// second parameter :- no. of elements to be deleted
// remaining parameter :- elements to be inserted

let arr4= [1, 3, 5, 8, 9, 10, 23, 56, 7];

let deleted = arr4.splice(3, 5, 45, 56, 78, 12, 11000);
console.log(deleted);

arr4.splice(3, 5, 45, 56, 78, 12, 11000);
console.log(`After splice operation, the new array is : ${arr4}`);





// slice function :-

// slice returns a part of a array based on the parameters given to it. It is same as slicing a string.

// If only one argument [a] is given, then the new array is formed from index [a] to the last.
// If two arguments [a, b] are given, then array is formed from index [a] to [b-1].

let arr5 = [1, 5, 4, 2, 3, 6, 7, 8];

let sliced_arr1 = arr5.slice(2, 6);
console.log(sliced_arr1)

let sliced_arr2 = arr5.slice(2);

console.log(sliced_arr2);





// Array.from() function :-
// Array.from() is a funciton which creates array from a object or a string which is passed to it as a argument and returns it.

let string = "ARYAN";
let arr_string = Array.from(string);

console.log(arr_string);