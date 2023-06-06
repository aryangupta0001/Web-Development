/*
// for loop in Javascript is same as for loop in C++

// for(let i=0; i<=100; i++)
// {   console.log(i);
// }
*/



/*
// for-in loop is used to access keys of any key-values pairs (like objects) or of any iterables (like Strings)

let a = {   name : "Aryan",
            grad : "bca",
            clg : "bareilly college"
        };

for (let i in a)
{   console.log(i + " = " + a[i]);
}


for (let i in "ARYAN")
{   console.log(i);             // This will print the value of i, i.e the index of every character of string "ARYAN"
}
*/


// /*
// for-of loop is used to access the iterables

let a = ["A", "R", "Y", "A", "N"];
for(let i of a)
{   console.log(i);
}

// */