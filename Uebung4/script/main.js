"use strict";
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

// hier kommen ihre Skripte hin

/* Registrieren Sie am Button „Erstellen“ ein Klick-Event
Liest die Eingabewerte aus Farbe und Zahl ein
Gibt das Ergebnis als alert aus
*/

const button = document.getElementsByTagName("button");
// const button = document.querySelector("button");


function getInputs() {
    let color = document.getElementById("color").value;
    let number = document.getElementById("number").value;
    return `${color}${number}`;
}


// TEIL 3
button[0].addEventListener("click", () => {getCard(getInputs())});
/*
function getCard() {
    let card = getInputs();

    const parentUl = document.querySelector("#cards ul");
    const li = document.createElement("li");
    let img = document.createElement("img");

    parentUl.appendChild(li);
    const parentLi = parentUl.firstElementChild;

    parentLi.appendChild(img);

    img.src = `${baseUrl}${card}.png`;
}
*/


// Bonus
button[1].addEventListener("click", getCards);

let cardArr = responseMessage.Cards.map((card) => `${card.Color.charAt(0).toLowerCase()}${card.Value}`);

function getCards() {
    cardArr.forEach(card => {getCard(card)});
}

function getCard(card) {
    const parentUl = document.querySelector("#cards ul");
    const li = document.createElement("li");
    const img = document.createElement("img");

    parentUl.appendChild(li);
    li.appendChild(img);

    img.src = `${baseUrl}${card}.png`;
}

// TEIL 4