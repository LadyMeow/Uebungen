"use strict";
const baseUrl = "http://nowaunoweb.azurewebsites.net/";

async function createCards() {
    const players = ["Player 1", "Player 2", "Player 3", "Player 4"];

    let response = await fetch((baseUrl + "api/game/start"), {
        method: 'POST',
        body: JSON.stringify(players),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    let result;

    if (response.ok) {
        result = await response.json();
        console.log(result);
    } else {
        alert("HTTP-Error: " + response.status);
    }

    result.Players[0].Cards.map(e => {
        const ul = document.querySelector("#cards ul");
        const li = document.createElement("li");
        const img = document.createElement("img");
        li.appendChild(img);
        ul.appendChild(li);

        // black, wild, wd4, Color+d2, Color+r, Color+s
        switch (e.Value) {
            case 10:
                e.Value = "d2";
                break;
            case 11:
                e.Value = "s";
                break;
            case 12:
                e.Value = "r";
                break;
            default:
                break;
        }

        const card = `${e.Color.charAt(0)}${e.Value}`;
        img.src = `${(baseUrl + "Content/Cards/")}${card}.png`;
    });
};

createCards();

