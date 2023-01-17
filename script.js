"use strict";

const form = document.querySelector("form");

//const monBoutton = document.getElementById("boutton");

form.addEventListener("submit", (e) =>{
  e.preventDefault()

  const li = document.createElement("li");

  li.textContent = champ.value;

  ol.appendChild(li)

  champ.value = "";

  noTache.style.display = "none"

  //return false;

});






























