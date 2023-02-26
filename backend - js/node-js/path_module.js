const path = require("path");           // path is a module which is used to perform file & dirctory path related functions.

let bname = path.basename("E:\\RANBEER\\CODE\\WEB DEV\\JAVASCRIPT\\node js\\index.js");                 // basename() returns the filename from a filepath.
console.log(bname);


let dname = path.dirname("E:\\RANBEER\\CODE\\WEB DEV\\JAVASCRIPT\\node js\\index.js");                  // dirname() returns the directory part from a file path.
console.log(dname);

let ext1 = path.extname("E:\\RANBEER\\CODE\\WEB DEV\\JAVASCRIPT\\node js\\index.js");                   // extname() returns the extension of the file.
console.log(ext1);

let ext2 = path.extname("index.");
console.log(ext2);

let ext3 = path.extname(".html");
console.log(ext3);

let ext4 = path.extname("hello");
console.log(ext4);

let ext5 = path.extname(__filename);                    // __filename is a keyword which represents the current file itself.
console.log(__filename + " : " + ext5);
