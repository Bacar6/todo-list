"use strict";

const form = document.querySelector("form");

const btnSupprimer = document.getElementById("btn");

form.addEventListener("submit", (e) =>{
  e.preventDefault()

  const li = document.createElement("li")

  ol.appendChild(li);

  li.textContent = champ.value;

  champ.value = "";


btnSupprimer.addEventListener("click", () =>{

  li.remove();

});




});











/*

const btnSupprimer = document.getElementById("btn");

const monText2= document.getElementById("t4");

btnSupprimer.addEventListener("click", () =>{

  monText2.remove();

});
*/










































































