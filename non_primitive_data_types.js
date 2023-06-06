// Non-primitive data typees are objects
// Objects are key-value pairs, which can be used to create dictionaries, mappings, etc...
// These objects are just like dictionary in Python


let Aryan = {   name : "Aryan Gupta",
                age  : 21,
                pincode : 243122
};

console.log(Aryan["name"]);
console.log(Aryan["age"]);
console.log(Aryan["pincode"]);

// We can change the values of existing keys of  a object & even add new key-value pairs to any object.

Aryan["college"] = "Bareilly College";
Aryan["age"] = 20;

console.log(Aryan);


// We can also declare & define a object with [const], but than also we can change the values of existing keys og the object & add new
// key-value pairs to it.

const a = {     name : "Aryan", age : 21, graduation : "BCA"}
console.log(a);

a["age"] = 20
a["post graduation"] = "MCA";

console.log(a);

console.log(a.graduation)       // We can also access the value of any key with the help of DOT OPERATOR "."