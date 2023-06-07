let t = document.body.firstElementChild;      // It navigates to the Table Element

console.log(t);

console.log(t.rows);                          // Prints all the rows of the Table
console.log(t.caption);                       // Prints the Caption Element
console.log(t.caption.innerHTML);             // Prints the Caption of the Table
console.log(t.tHead);                         // Prints the Header element of the Table.
console.log(t.tHead.firstElementChild);       // Prints the first element inside Table Header, i.e First Row.

console.log(t.tBodies);                       // Prints the Body element(s) of the Table.
console.log(t.tBodies.rows);                  // Prints the Body element(s) of the Table.

console.log(t.rows[1].rowIndex);              // .rowInedx prints the index of the row
console.log(t.rows[0].cells);                 // .cells prints the Cell Data of the row
console.log(t.rows[1].sectionRowIndex);       // .sectionRowIndex prints the index of the current row in the Enclosing Tag, i.e if the current row is inside <TBody> element, then its index in the <TBody> Element.

