const prompt=require("prompt-sync")({sigint:true}); 

let a = prompt("Enter the no. : ");

a = Number.parseInt(a);

if (a>10)
{   console.log(a + " is greater than 10");
}

else if (a==10)
{   console.log(a + " is equal to 10");
}

else
{   console.log(a + " is not greater than 10");
}