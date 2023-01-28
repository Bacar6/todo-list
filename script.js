"use strict";

// CODE SUR LES AJOUTS TODO LIST
/*
const form = document.querySelector("form");

form.addEventListener("submit", (e) =>{
  e.preventDefault()

  const li = document.createElement("li");

  li.textContent = champ.value;

  ol.appendChild(li)

  champ.value = "";

  //return false;

});
*/

/*****************************FIXME   ***********************/

const form = document.querySelector("form");
let button = document.querySelector("button");

form.addEventListener("submit", (e) =>{
  e.preventDefault()

  const li = document.createElement("li");

  li.textContent = champ.value;

  ol.appendChild(li)

  champ.value = "";

  //return false;

});

button.addEventListener("click", () =>{
  ol.removeChild(ol.firstElementChild)
});



function myFunction() {
  const list = document.getElementById("myList");
  list.removeChild(list.firstElementChild);
}




















