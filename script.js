"use strict";

const form = document.querySelector('form');

//const btnEntrer = document.getElementById('btn');


form.addEventListener("submit", (e) =>{

  e.preventDefault();
  
  const li = document.createElement("li");
  
  li.textContent = champ.value;
  
  ol.appendChild(li);

  champ.value = ""


  

});


















































