"use strict";

// function num(a) {
//   try {

//     if (a < 10) {
//       console.log("ok");
//     } else {
//       throw new Error("This is wrong");
//     }

//   } catch (error) {
//     console.error("Error: " + error);
//   } finally {
//     console.log("finally");
//   }
// }

// num(15);

// let a = 500;
// window.a = a;

// document.body.style.background = "red";

// setTimeout(() => (document.body.style.background = ""), 2000);

// const html = document.documentElement;
// const body = document.body;

// console.log(body.parentNode);

// console.log(Array.from(body.childNodes));
// console.log(html);
// console.log(html.firstChild);
// console.log(html.lastChild);
// console.log(html.childNodes);

// for (let node of html.childNodes) {
//   console.log(node);
// }

// const date = new Date();
// console.log(date, "date");

// console.log(document.body.children);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.body.previousElementSibling);
// console.log(document.body.nextElementSibling);
// console.log(document.body.parentElement);

// const h1 = document.getElementById("header");

// let header = 5;
// console.log(h1);
// const h1 = document.querySelectorAll(".header")[2];
// const queryS = document.querySelector(".headers");

// console.log(h1);
// console.log(queryS);

// const elem = document.getElementsByClassName("header");
// const elem = document.getElementsByTagName("h1");
// const elem = document.getElementsByName("h1");

// console.log(elem);

// let div = document.createElement("div");
// div.className = "div";
// div.innerHTML = " <strong> Hello </strong>, I'm created Element";

// // document.body.append(div);
// // document.body.prepend(div);
// console.log();
// document.getElementById("header").firstElementChild.before(div);
// document.getElementById("header").firstElementChild.after(div);

// let h1 = document.getElementById("header1");
// let h2 = document.getElementById("header2");

// document.body.replaceWith(h2, h1);
