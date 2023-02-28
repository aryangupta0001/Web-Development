import url from "url";

const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';                              // .pathname sets the path of a url
myURL.search = '?d=e';                                  // .search sets the search parameters
myURL.hash = '#fgh';

console.log(myURL);                                     // the contructed url will show all the component of a url
console.log(myURL.href);                                // .href shows the complete contructed url
