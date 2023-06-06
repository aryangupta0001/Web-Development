const prompt = require("prompt-sync")({sigint:true}); 

let arr = [];

while(true){
    // arr.push(Number.parseInt(prompt(" Enter a number : ")));

    let a = Number.parseInt(prompt(" Enter the number : "));

    if (a!=0)
        arr.push(a);
    
    else
        break;

    console.log(arr);

    let ch = prompt(" Add more ? (Y/N)").toUpperCase();
    
    if (ch == "N"){
        break;
    }
}