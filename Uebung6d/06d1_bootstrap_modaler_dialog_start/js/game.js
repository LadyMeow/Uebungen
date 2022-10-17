"use strict";

// Modalen Dialog öffnen um Namen einzugeben
let myModal = new bootstrap.Modal(document.getElementById('playerNames'));
myModal.show();

let players;

// nach jeder tasteneingabe im formular überprüfen ob
// 4 eindeutige spielerInnennamen vorhanden sind
document.getElementById('playerNamesForm').addEventListener('keyup', function (evt) {
    console.log(evt);
})

// formular submit abfangen
document.getElementById('playerNamesForm').addEventListener('submit', function (evt) {
    console.log("submit");
    // Formular absenden verhindern
    evt.preventDefault();
    myModal.hide();

    players = [document.getElementById("playerName1").value, document.getElementById("playerName2").value, document.getElementById("playerName3").value, document.getElementById("playerName4").value];
    const ul = document.getElementById("playerList");

    players.forEach(element => {
        console.log(element);
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = element;

        li.appendChild(span);
        ul.appendChild(li);
    });
})

