"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/Content/Cards/";

// hier kommen ihre Skripte hin

// Erweitern Sie die Webseite aus 4/1 um folgende Funktionen:
// Registrieren Sie am Button „Erstellen“ ein Klick-Event
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

    /*
    for (let i = arr.length - 1; i >= 0; i--) {
        const img = arr[i].firstElementChild;

        if (img.src === url) {
            console.log("card found and deleted!");
            arr[i].remove();
        }
    }
    */

    // oder:
    for (let index = 0; index < arr.length; index++) {
        const li = arr[index];
        
        if(li.firstElementChild.src == url) {
            ul.removeChild(li);
            index--;
        }
    }
});