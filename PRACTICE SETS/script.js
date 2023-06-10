// Solution 1:-

let first = document.body.firstElementChild.firstElementChild;

first.style.color = "red";


// Solution 2:-

let third = document.getElementsByClassName("nav")[0].children[2];

first.style.color = "green";
third.style.color = "green";



// Solution 3:-

let li_tags = document.getElementsByTagName("li");

for(let i of li_tags){
    i.style.backgroundColor = "cyan";
}