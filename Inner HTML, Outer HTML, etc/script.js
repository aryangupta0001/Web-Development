console.log(document.body.firstElementChild);                   // console.log(element) prints the element's inner & outer HTML.
console.dir(document.body.firstElementChild);                   //  console.dir(element) prints the element as a javascript object.

let p = document.body.getElementsByTagName("p")[0];

console.log(p.innerHTML);                                       // .innerHTML returns the whole code written inide the tag
console.log(p.outerHTML);                                       // .outerHTML returns the tag along with its innerHTML.


console.log(document.body.firstElementChild.nodeName);          // .nodeName gives node name
console.log(document.body.firstElementChild.tagName);           // .tagName gives the tag name


console.log(document.body.firstChild.nodeName);
console.log(document.body.firstChild.tagName);


console.log(document.body.children[1].nodeName);
console.log(document.body.children[1].tagName);

// document.element
// .nodeName & .tagName gives same results for HTML elements, but .tagName is defined only for HTML elements while .nodeName is defined for all type of Nodes, i.e element, Text, Comment, etc...