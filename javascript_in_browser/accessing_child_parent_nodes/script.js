console.log(document.body.firstChild);      // To access the first child element of the body
console.log(document.body.lastChild);       // To access the last child of the body
console.log(document.body.childNodes);      // To access all the children of the body, it returns an object of all the children of the body


// [.childNodes] returns the object of all the children of that element, it is used to acces all the children of the element by its index

// First child of the element -->
document.body.firstChild = document.body.childNodes[0]

// Last child of the element -->
document.body.lastChild = document.body.childNodes[document.body.childNodes.length - 1]

console.log(document.body.childNodes[0] == document.body.firstChild);       //  This will print True, because both are same.
console.log(document.body.lastChild == document.body.childNodes[document.body.childNodes.length - 1])       //  This will print True, because both are same thing.

console.log(document.body.childNodes[0]);


/*
Element & Node have a minor difference :-

Element refers to a valid HTML Element, i.e <HTML>, <HEAD>, <BODY>, etc....

whereas node can be anything, the whole HTML document is also a node, the Elements are also nodes, any  element, which has no child element is a Leaf Node.

The elements present inside a container Tag is called its Child.
The elements which have the the same Parent Tag are called Siblings.

For Ex :-

Head & Body are siblings because they have same parent, i.e HTML.

Body is Head's next or Right sibling & Head is Body's previous or left sibling.

                          HTML
            _______________|______________
           |                              |
          HEAD                           BODY

$0 references the selected tag
$1 references the previously selected tag
$2 references the tag selected before the $1, And this goes so on.....
*/

// .nextSibling is used to find the next Sibling of any node or element.
// .previousSibling is used to find the next Sibling of any node or element.

console.log(document.body.childNodes[1].nextSibling);           // This will print the next sibling of 2nd child of body, i.e the 3rd child of body.
console.log(document.body.childNodes[1].previousSibling);       // This will print the previous sibling of 2nd child of body, i.e the 1st child of body.



/* Parent Nodes & Parent Elements :-

element.parentNode returns the Parent node.
element.parentElement returns the Parent Element.

*/

let a = document.documentElement.childNodes[2];

console.log(a[1]);
console.log(" The parent node of <body> tag is : ",a[1].parentNode)
console.log(" The parent element of <body> tag is : ", a[1].parentElement)

// Here both of the above statements will print the <html>  tag, because it is the parent node & parent element of <body>, here the parent element was present

console.log(" Parent node of <html> is : ", document.documentElement.parentNode);
console.log(" Parent element of <html> is : ", document.documentElement.parentElement);

// Here the first statement will print [document], because <html> has whole document as the parent node
// But the second staetment will print null, because <html> has no parent element.



/*  The above methods for accessing childs were returning all the nodes, like text, comment, elements, etc...
But to access or search only the element nodes, we need to use :- .firstElementchild or .lastElementchild, etc...
*/

console.log(" First element child of <body> is :-", a.firstElementChild);
console.log(" Last element child of <body> is :-", a.lastElementChild);

let b = a.childNodes;
console.log(b);

console.log(" Next element sibling of <div> is :-", b[1].nextElementSibling);
console.log(" Previous element sibling of <p> is :-", b[3].previousElementSibling);









/* Changing style properties of HTML documents using Javascript :-*/

const changebg = ()=>{
    document.body.firstElementChild.style.background = "red";
}

changebg();
// This function will now change the background color of the first element child of the Bdoy, i.e <div>