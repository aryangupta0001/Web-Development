// There are varioous methods for searching the elements in the DOM :-



/* 1 -->
    .getElementsByClassName() method :-
    It returns the list of all elements in which the specific class is added.
*/

let card_text = document.getElementsByClassName("card-text")[0];          // It searches all the elements with "card-text" class and navigates to the first one.

// Changing Card-text's color
card_text.style.color = "red";




/* 2 -->
    .getElementById() method :-
    It returns the element whose id is provided.
*/

let card_title = document.getElementById("card-title-2");                  // It searches the element with "card-title-2" id and returns it.

// Changing Card-title's color
card_title.style.color = "purple";



/* 3 -->
    .querySelectorAll() method :-
    This method searches thhe elements with the help of CSS Query selectors and returns a list of all elements.
*/

let button1 = document.querySelectorAll(".btn")[2];                 // It searches the elements with the CSS query ".btn" and returns it, we have used [2] to goto the third element.

// Changing Card button's color
button1.style.backgroundColor = "black";



/* 4 -->
    .querySelector() method :-
    This method searches the elements with the help of CSS Query selectors and returns the first element.

    It is same like --> document.querySelectorAll(CSS Selector)[0];
*/

let button = document.querySelector(".btn");                             // It searches the elements with the CSS query ".btn" and returns the first one.

// Changing Card button's color
button.style.backgroundColor = "orange";


/* 5 -->
    .getElementsByTagName() method :-
    This method searches the element with the tag name & returns all the eleement.
*/

let tags = document.getElementsByTagName("div");
console.log(tags);



/* 6 -->
    
*/

let name = document.getElementsByName("name")[0];
name.value = "Aryan";

let phone = document.getElementsByName("phone")[0];
phone.value = "XXXXXXXXXX";

let address = document.getElementsByName("address")[0];
address.value = "BAERILLY";










// We can use multiple searching methods with each other for more specified searches.

let para = document.querySelectorAll(".card-body")[1].getElementsByTagName("p")[0];
para.innerHTML = "Hello";













// We've used all these functions on "document", but they can we used on any element, like Body, or any other element further.