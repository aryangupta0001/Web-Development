console.log("This is a custom module");

function sum(arr){
    let sum = 0;

    arr.forEach(element => {
        sum+=element;
    });

    return sum;
}

// module.exports = sum;                                // exporting only one function.

module.exports = {                                      // exporting multiple things, so we need to make a object here.
    "sum" : sum,
    "name" : "Sum",
    "editor" : "Aryan",
    "Type" : "Function"
};

module.exports.repo = "Github";                         // We can export any key-value pairs seperately also. This is will be imported along with the object
