/*
querySelector
getElementById
getElementByClassName
*/
const maincontainer = document.querySelector(".container");
const mainheading = document.querySelector("#h1main");
const p_paragraphbody = document.querySelector(".p_body");
const body = document.querySelector("body");
const inputField = document.querySelector("input");
const userBtn = document.querySelector(".user_btn");
const backgroundBtn = document.querySelector(".bg_change_button");
const user = {
  name: "John",
  age: 20,
  gender: "Male",
};

backgroundBtn.addEventListener("click", function () {
  mainheading.style.color = "red";
  mainheading.style.margin = "50px";
  body.style.backgroundColor = "indigo";
});

inputField.addEventListener("input", function (e) {
  console.log(e.target.value);
});
userBtn.addEventListener("click", function () {
  console.log(user[inputField.value]);
});

maincontainer.innerHTML = "<h1>this is from js</h1> <p>this also from js</p>";

const pE1 = document.createElement("p");
pE1.textContent = "This is from js append in body";
pE1.className = "pe1_classname";
console.log(pE1);
body.appendChild(pE1);
