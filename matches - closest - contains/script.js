console.log(slide1);                    // if we print id of any element, it prints the element itself. Buut its not a good practice, because only modern browsers support this.


/*  .matches() method -->
    This method takes a CSS Selector as an argument & returns true if the element containes that selector & false if it does not.
*/


slide1 = document.getElementById("slide1");
console.log(slide1.matches(".active"));         // This will check whether the element [slide1] contains [.active], i.e [active] class or not.



let slide2 = document.getElementById("slide2");
console.log(slide2.matches("#slide1"));         // This will check whether the element [slide2] contains [#slide1], i.e [slide1] id or not.



/*  .closest() method -->
    This method takes a CSS selector as an argument, and looks for the nearest ancestor of the element which contains that CSS Selector. The element itself is also checked.
    If any element is found, it is returned, else [null] is returned.
*/

let img = document.getElementById("slide3").getElementsByTagName("img")[0];
console.log(img.closest(".carousel"));
console.log(img.closest(".flex"));


/*
    .contains() method -->
    a.containes(b);

    This method is used to check whether the element contains another element (provided to the method as argument) or not.

    if( a contains b ){
        true;
    }
    else if ( a == b ){
        true;
    }
    else{
        false;
    }


 */


let div = document.getElementById("carouselExample");
console.log(div.contains(img));
console.log(img.contains(img));
console.log(img.contains(div));