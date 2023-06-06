// var, let & const :-

// Here the variables declared using [var] keyword are globaly available in the function, i.e any block or any scope inside the function
// can use the [var] variable, they can be re-assigned a new value & can be even redeclared also.
// And the variables declared using [let] keyword are block scoped, i.e there scope is only the block in which they have been defined,
// they can be re-assigned new values but they can only be declared once in their scope


/*
var a = 10
console.log(a)

a = 15          // Here the variable [a] has been reassigned with a new value.
console.log(a)

var a = 20      // Here the variable [a] has been redeclared with [var] keyword.
console.log(a)


var b = 30      
console.log(b)

// let b = 40       // Here the variable [b] cannot be redeclared with [let] keyword as [let] variables can only have single declartion in
                    // a scope & variable [b] has been already declared above.
console.log(b)


let c = 50
console.log(c)

// var c = 60       // Here the variable [c] cannot be redeclared with [var] keyword as [let] variables can only have single declartion in
                    // a scope & variable [c] has been already declared above.
console.log(c)


let d = 70
console.log(d)

// let d = 80       // Here the variable [d] cannot be redeclared with [var] keyword as [let] variables can only have single declartion in
                    // a scope & variable [d] has been already declared above.
console.log(d)


{   console.log(c);     // Here 50 will be printed, as it will use the global value of c [let c] which is declared above.
    
    // console.log(d)       // This line will produce an error, as the value of [d] has been used before its declaration, although there's
                            // a global declaration of d [let d]
                            // is available above, but since it is declared once in the same scope also, it will not use the oouter value
                            // & thus it will produce a error.
                            // While if we declare it with [var] keyword, it will print "undefined"

    let d  = 1000;
    console.log(d);

    let a = "ARYAN";
    console.log(a);     // This will print "ARYAN" as a [let] declaration of variable [a] is present in the existing block, so it will not
                        // use the above declared [var a]
}

{   console.log(a);     // This will print 20 as it does not contain any declaration for the variable [a], so it will use the [var a]
                        // variable which is globally available
}

*/




// const a = "ARYAN";       // It will declare a constant [a].

// {
//     const b = "GUPTA";
//     console.log(a);      // Here the constant declared outside the scope will used, as there is no declaration of [a] exists in the
                            // current block.
    
//     const a = 20;
// }   

// console.log(b)      // This will produce an error as no declaration of [b] exists globally.


// const a = 20;

// {   const a = 30;
//     console.log(a);
// }

let a;
console.log(a);     // This will print "undefined" as it is the default value of [let] variable

var b;
console.log(a);     // This will print "undefined" as it is the default value of [var] variable

// const d;         // This will produce an Error because constants must be initializeed at the time of declaration