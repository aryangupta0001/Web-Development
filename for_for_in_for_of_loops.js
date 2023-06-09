// for loop in Javascript is same as for loop in C++

// There are 3 types of for loops in Javascript :-

// 1) for loop -->                  It is a normal for loop, just like C++

for(let i=0; i<=100; i++)               
{   console.log(i);
}




// 2) for-in loop -->               It is used to access keys of any key-values pairs (like objects) or of any iterables (like Strings)

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



// 3) for-of loop -->           It is used to access the value of the iterables

let b = ["A", "R", "Y", "A", "N"];
for(let i of b)
{   console.log(i);
}

for (let i of "ARYAN")
{
    console.log(i);
}