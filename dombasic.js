/*
querySelector
getElementById
getElementByClassName
*/

//in dom console getElementById will show tag same as html
const byidins = document.getElementById("byid");

//in dom console getElementByClassName will show details of that tag
const byclassinjs = document.getElementsByClassName("byclass");

//querySelector targets tag and will show tag same as html
const byqueryselctinjs = document.querySelector("p");
//querySelector for id will show tag same as html
const byqueryselctidinjs = document.querySelector("#byid");
//querySelector for class will show tag same as html
const byqueryselctclassinjs = document.querySelector(".byclass");

// to check whether our above declarations are correct or not
console.log(byidins.textContent); // it will show output
console.log(byclassinjs.textContent); // it will not show output because it shows details
console.log(byqueryselctinjs.textContent); // it will show output
console.log(byqueryselctidinjs.textContent); // it will show output
console.log(byqueryselctclassinjs.textContent); // it will show output
