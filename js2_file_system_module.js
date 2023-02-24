const fs = require('fs');                           // require() function is used to import a module, "fs" is FileSystem module

let txt = fs.readFileSync('Hello.txt', 'utf-8');    // .readFileSync is a function of "fs" which reads contents from the file.
console.log(txt);

txt = txt.replace("Aryan", "Ranbeer");

fs.writeFileSync("Newtxt.txt", txt);                // /writeFileSync is a function of "fs" which writes content into a file