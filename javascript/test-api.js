"use strict";
//alert("bonjour")

let infos = document.querySelector("section");
let button = document.querySelector("button");


let capitalDiv = document.createElement('div');
let flagDiv = document.createElement('div');
let countryDiv = document.createElement('div');
let continentDiv = document.createElement('div');

button.addEventListener("click", () =>{
  let textCountry = document.querySelector(".text").value
  countryDiv.innerHTML = `<span>pays</span><br><p>${textCountry}</p>`

  let url = "https://restcountries.com/v3.1/name/" + textCountry;
  
  fetch(url)
  .then(response =>
  response.json()
  .then(data => {

    const country = data[0];
    const capital = country.capital;
    const continent = country.continents;
    const flag = country.flags.svg;

    capitalDiv.innerHTML = `<span>capital</span><br><p>${capital}</p>`;
    continentDiv.innerHTML = `<span>continent</span><br><p>${continent}</p>`;
    flagDiv.innerHTML = `<span>drapeau</span><br><img src = "${flag}" >`;

    infos.appendChild(countryDiv)
    infos.appendChild(continentDiv)
    infos.appendChild(capitalDiv)
    infos.appendChild(flagDiv)
    
  }))


});











/*
function search() {
    alert('Bonjour')
}
*/

























































