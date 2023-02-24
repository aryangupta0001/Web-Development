// Synchronous / Blocking :- Line By Line Execution is Guranteed

// Asynchronous / Non-Blocking :- Line By Line Execution Not Guranteed. Callbacks will be fired.


const fs = require("fs");

let txt = fs.readFileSync("Hello.txt", "utf-8");
console.log(txt);

console.log("\nThis line will be printed after the execution of above readFileSync function\n")

// readFileSync is a synchronous function, it will block the execution of rest of the program until it is fully executed.


fs.readFile("Hell.txt", "utf-8", (err, data)=>{
    console.log(err, data);
})

console.log("\nThis line will be printed independently, it will not depend on the execution of above readFile function\n")

// readFile is a asynchronous function, it will not block the execution of the rest of the program, it will run in background & will fire a callback function (provided to it as a argument) when it gets fully executed.

// readFile function a callback fuunction as a argument, this callback-function takes two arguments :- Arg1, Arg2.
// If any Error is thrown by the readFile function, it is stored in Arg1 & the Data which it reads is stored in Arg2.