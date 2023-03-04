const custom_module = require("./module");            // to import a Coomon JS module

console.log(custom_module);                           // this will print all the objects imported.

// console.log(custom_module([2, 3, 4]));             // if only one function is exported from the module, then it will be imported as the importing variable-name itself.

console.log(custom_module.sum([2, 3, 4]));            // if multiplle things are exported from the moduule, then they are exported as a object, and the object s  imported as the importing variable-name itself. So we have to use the "dot(.)" operator to use the specific function from the object.
