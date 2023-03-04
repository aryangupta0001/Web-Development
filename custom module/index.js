const custom_module = require("./module");            // to import a Coomon JS module

console.log(custom_module);                           // this will print all the objects imported.

console.log(custom_module([2, 3, 4]));                // if only one function is exported from the module, then it will be imported as the importing variable-name itself.
