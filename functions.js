const prompt=require("prompt-sync")({sigint:true}); 


// There are 2 ways of defining the function in Javascript

// The traditional method is :-

function hello(){
    console.log("Hello old");
}

hello();


// The new metod is :-
// Function defined using the new way is also called ARROW FUNCTION

let Hello = ()=>{
    console.log("Hello new");
}

Hello();



/*
function averageold(n1, n2, n3){
    return (n1 + n2 + n3)/3;
}
let n1 = prompt("Enter the three no. : ");
let n2 = prompt("Enter the three no. : ");
let n3 = prompt("Enter the three no. : ");

n1 = Number.parseInt(n1);
n2 = Number.parseInt(n2);
n3 = Number.parseInt(n3);


console.log("The average is : ", averageold(n1, n2, n3));
*/


const averagenew = (n1, n2, n3)=>{
    return (n1 + n2 + n3)/3;
}

let n1 = prompt("Enter the three no. : ");
let n2 = prompt("Enter the three no. : ");
let n3 = prompt("Enter the three no. : ");

n1 = Number.parseInt(n1);
n2 = Number.parseInt(n2);
n3 = Number.parseInt(n3);


console.log("The average is : ", averagenew(n1, n2, n3));   