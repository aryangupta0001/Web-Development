let name = "Aryan";
console.log(name);

console.log(" The length of the name is : " + name.length);

let surname = 'Gupta';
console.log(name + " " + surname);

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

// In javascript we can use Backtick [`] to declare strings :-

let first_name = `Aryan`;
let last_name = 'Gupta';


// [`] are used to create strings, which use other variables in them, the INSERTION of variables in between the strings is called [INTERPOLATION]
sentence1 = `His full name is ${first_name} ${last_name}`;
console.log(sentence1);

// Escape Sequences :-

let single_quote = 'Single quote = \'';
let double_quote = "Double quote =  \"";
let new_line = "New \nLine";

console.log(single_quote);
console.log(double_quote);
console.log(new_line);

// ["\r"] is a special type of Escape Sequence, that is replaces the starting character of a string with the characters followed by it.
console.log("Carriage Return\ris");

console.log(first_name.toUpperCase());
console.log(first_name.toLowerCase());

console.log(last_name.slice(2, 4));
console.log(last_name.slice(2));

let job = "Computer Engineer";
let new_job = job.replace("Computer", "Mechanical");

console.log(new_job);

console.log(first_name.concat(last_name," is POWERFULL"));

last_name.replace("G", "g"); // Doesn't works, because in Javascript strings are immutabe, just as in python
console.log(last_name); // Will print the old [last_name], as the above replace functions will do not change the [last_name]

last_name[0] = "G";     // This will also not work because strings are immutable
console.log(last_name); // This will print the old [last_name]

// So, the [replace()] function is used to replace a substring in the string with new substring and store the new one in any other variable.

let new_last_name = last_name.replace("G", "g");
console.log(new_last_name);


// Include, ends with & starts with functions of a string :-

let friends = "My friends are Arvind, Bhaskar, Tarun, etc...";
console.log(` Tarun ${friends.includes("Tarun") ? "is" : "is not"} my friend.`);

let my_name = first_name + " " + last_name

console.log(` My name ${my_name.startsWith("A") ? "starts" : "does not starts"} with letter A`);
console.log(` My name ${my_name.startsWith("B") ? "starts" : "does not starts"} with letter B`);



console.log(` My name ${my_name.endsWith("a") ? "ends" : "doew not ends"} with the lett
er "b"`);


let string = "Give my ₹1000 back";

console.log ("The amount is : " + string.slice(9, 13));