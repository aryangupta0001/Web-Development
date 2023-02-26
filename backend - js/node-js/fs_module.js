const fs = require("fs");

fs.writeFile("Hello.txt", "Hello World", () =>{                                     // writeFile writes a file asynchronously, i.e non-blocking method
    console.log("Data written to the file");
});

console.log("Data is being written asynchronously");


fs.writeFileSync("Hello.txt", "Hello World");                                       // writeFile writes a file synchronously, i.e blocking method
console.log("Data written synchronously");

fs.readFile("hello.txt", "utf8", (err,  data) => {                                  // readFile reads a file asynchronously, i.e non-blocking method
    console.log(err, data, "File read asycnhronously");
});

let txt2 = fs.readFileSync("hello.txt", "utf8");                                    // readFileSync reads a file synchronously, i.e blocking method
console.log(txt2, "\nFile read synchronously");
