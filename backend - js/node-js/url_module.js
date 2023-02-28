import url from "url";

const myURL = new URL('https://example.org:5500');      // new URL() sets he origin of the url, we can also give the port in the origin of url.
myURL.pathname = '/a/b/c';                              // .pathname sets the path of a url
myURL.search = '?d=e';                                  // .search sets the search parameters
myURL.hash = '#fgh';
myURL.port = 80;                                        // the port can also be set with the help of .port.

console.log(myURL);                                     // the contructed url will show all the component of a url
console.log(myURL.href);                                // .href shows the complete contructed url
