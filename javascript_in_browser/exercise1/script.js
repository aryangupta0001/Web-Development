/* Driving Age verification :-

while (true) {
    let age = Number.parseInt(prompt(" Enter the age : "));
    
    if (age>18){
        alert(" Congratulations you can drive");
    }
    else if (age<0){
        console.error(" Age entered is negative");
    }
    else {
        alert(" No.... You can't drive !!!");
    }

    let ch = confirm(" Return to prompt again ? ");

    if(ch){
        continue;
    }
    else{
        break;
    }

}
*/


/* Google redirection :-

let numb = Number.parseInt(prompt(" Enter the number : "));

if (numb > 4){
    location.href = "https://www.google.com";
}

*/


/* Change Background Color :-
*/

let colour = prompt(" Enter the backgroud color : ");

document.body.style.background = colour.toUpperCase();  