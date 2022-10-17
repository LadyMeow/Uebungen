"use strict";
const Url = "http://nowaunoweb.azurewebsites.net/";

const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

const responseMessage = {
   "Player": "Player 1",
   "Cards": [
      { "Color": "Red", "Text": "Three", "Value": 3, "Score": 3 },
      { "Color": "Green", "Text": "Five", "Value": 5, "Score": 5 },
      { "Color": "Red", "Text": "Nine", "Value": 9, "Score": 9 },
      { "Color": "Red", "Text": "Reverse", "Value": 1, "Score": 20 },
      { "Color": "Blue", "Text": "Two", "Value": 2, "Score": 2 },
      { "Color": "Blue", "Text": "Four", "Value": 4, "Score": 4 },
      { "Color": "Yellow", "Text": "Five", "Value": 5, "Score": 5 },
      { "Color": "Blue", "Text": "Seven", "Value": 7, "Score": 7 },
      { "Color": "Blue", "Text": "Eight", "Value": 8, "Score": 8 }
   ],
   "Score": 63
};


const button = document.getElementsByTagName("button");
// const button = document.querySelector("button");
button[0].addEventListener("click", function () {
   // Liest die Eingabewerte aus Farbe und Zahl ein
   const color = document.getElementById("color").value;
   const number = document.getElementById("number").value;

   const ul = document.querySelector("#cards ul");
   const li = document.createElement("li");
   const img = document.createElement("img");
   li.appendChild(img);
   ul.appendChild(li);

   const card = `${color}${number}`;
   img.src = `${baseUrl}${card}.png`;
});

// LÖSCHEN
button[1].addEventListener("click", function () {
   const ul = document.querySelector("#cards ul");
   if (ul.children.length > 0) {
      ul.removeChild(ul.lastElementChild);
   }
});

// FILTER LÖSCHEN
button[2].addEventListener("click", function () {
   const color = document.getElementById("color").value;
   const number = document.getElementById("number").value;
   const card = `${color}${number}`;
   const url = `${baseUrl}${card}.png`;

   const ul = document.querySelector("#cards ul");
   const arr = ul.getElementsByTagName("li");


   for (let index = 0; index < arr.length; index++) {
      const li = arr[index];

      if (li.firstElementChild.src == url) {
         ul.removeChild(li);
         index--;
      }
   }
});

var players = ["Player 1", "Player 2", "Player 3", "Player 4"];
async function load() {
   // hier starten wir gleich den request
   // warten auf das promise (alternativ fetch, then notation)
   let response = await fetch(Url + "api/game/start", {
      method: 'POST',
      data: JSON.stringify(players),
      dataType: 'json',
      contentType: 'application/json',
   });

   // dieser code wird erst ausgeführt wenn fetch fertig ist
   if (response.ok) { // wenn http-status zwischen 200 und 299 liegt
      // wir lesen den response body 
      let result = await response.json();
      console.log(result);
   } else {
      alert("HTTP-Error: " + response.status);
   }
}
