const prompt=require("prompt-sync")({sigint:true});             // we need to import "prompt-sync" to use prompts in our program, this is not needed while using Browser's console.

let a = prompt("Enter the no. : ");

a = Number.parseInt(a);


/* Syntaxx -->

if (condition)
{
    // block of code to be executed if the condition is true
}

else{
    // block of code to be executed if the condition is false
}

*/

if (a>10)
{   console.log(a + " is greater than 10");
}

else if (a==10)
{   console.log(a + " is equal to 10");
}

else
{   console.log(a + " is not greater than 10");
}


// if, if - else & if - else if - else is same as in C++ & Java.