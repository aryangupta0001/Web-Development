function hello(){
    console.log("Hello, this is exported to another file");
}

function hi(){
    console.log("Hi, this is exported to another file");
}

module.exports = hi;                                                    // module.exports is used to exports the functions, objects of a Common JS module
// module.exports = hello;
// module.exports = hi;
