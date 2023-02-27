// const Hello = require("./module_export.js");                     // We can import common JS module using require()

// import Hello from "./module_export.mjs";                         // To import ES6  module, we have to use import keyword.
// Hello();

// import { Hello as h1 } from "./module_export.mjs";               // a module can be imported under a different name also.
// h1();
// Hello();

import HI from "./module_export.mjs";                               // We can import modules without using {}, the modules exported using"default" are imported here. In this case, anyname can be used to import modules.
HI();


import {Hello, hi} from "./module_export.mjs";                      // multiple modules can also be imported at once.

Hello();
hi();
