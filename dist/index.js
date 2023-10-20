"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMITED!");
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function(){
//     alert(input.value);
//     input.value = "";
// });
