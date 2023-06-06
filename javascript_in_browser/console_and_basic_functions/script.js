/*console.log(1+2+3+4+5);
console.log(" Logged through console.log");     // Simply prints or logs something on the console.
console.error(" This is an error");             // Shows an error message.

console.assert(3>10);              // Does nothing if the condition evaluates to True, but shows error : "Assertion Failed", if condition evaluates to be False.

let a = {a:1, b:2, c:3, d:4};
console.table(a);                  // Displays the object's data in Tabular form. If an array is provided as argument, then its index & value will be displayed in table.

console.clear();                    // Clears the console.  

console.warn(" Hey don't drink Alcohol");           // Gives a warning on the console.

console.info(" Hey this is important");             // Displays some info on the console.

console.log("console");
console.info("info");

console.time(" console.log() time ")                  // Starts the time & counts time until its End function.

console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");
console.log(" Counting time");

console.timeEnd(" console.log() time ");            // This stops the time started by console.time() function.

// The strings/labels provided inside the console.time() & console.timeEnd() must be same.

console.time("while")
let i = 0;
while(i<10){
    console.log("i = ", i);
    i++;
}
console.timeEnd("while");


console.time("for")
for(i = 0; i<10; i++){
    console.log("i = ", i);
}
console.timeEnd("for");

*/

alert(" Hey its working");          // alert function shows an alert on the browser window

let a = prompt(" Enter the no. : ", 10);            // prompt function is used to take user input in string format, we can also give a default value as second argument.

alert(a + "\n   Type of a : " + typeof a);

a = Number.parseInt(a);
alert("a is converted to " + typeof a);

// document.write("The value of a : ", a);          // document.write() function is used to write something in the webpage.

let cnf = confirm(" Display the value of {a} on the page ??")           // Confirm functions seeks for confirmation, if OK is pressed, its [true], else its [false]

if (cnf)
    document.write("The value of a : ", a);
else
    document.write(" Not allowed to display [a]");