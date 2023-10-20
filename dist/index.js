"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
function handleSubmit(e) {
    e.preventDefault();
    const newToDoText = input.value;
    const newLI = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newLI.append(newToDoText);
    list.append(newLI);
    newLI.append(checkbox);
    input.value = "";
}
form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function(){
//     alert(input.value);
//     input.value = "";
// });
