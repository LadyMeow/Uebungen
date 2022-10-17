"use strict";

// hier kommen ihre Skripte hin

class Player {
    constructor(name) {
        this.Name = name;
        this.HandCards = [];
        this.Points = 0;
    }
}

let numberOfPlayer = prompt("Wie viele Spieler willst du?");

function promptInputName(nr) {
    return prompt("Wie ist der Name vom Spieler " + nr);
}

function createPlayers(playerCount, inputName) {
    const playerList = [];

    for (let index = 1; index <= playerCount; index++) {
        let n = inputName(index);

        playerList.push(new Player(n));
        // console.log(`Spieler ${index}: ${n}`)
    }
    return playerList;
}

let allPlayers = createPlayers(numberOfPlayer, promptInputName);

// Spieler ausgeben

function printPlayerNames(allPlayer) {
    for (let i = 0; i < allPlayer.length; i++) {
        console.log(`Spieler ${i + 1}: ${allPlayer[i].Name}`);
    }
}

printPlayerNames(allPlayers);

//*** CARD ***

class Card {
    constructor(color, number) {
        this.Color = color;
        this.Number = number;
        this.Points = number;
    }
}


function createCards() {
    let cardDeck = colors.forEach(getEveryCard(colors.color));
}

function getEveryCard(color) {
    let cardDeck = [];
    for (let index = 0; index < 2; index++) {
        for (let index = 1; index <= 9; index++) {
            let c = new Card(color, index);
            cardDeck.push(c);
        }
    }
    let ca = new Card(color, 0);
    cardDeck.push(ca);

    return cardDeck;
}


//*** ENUMS ***

const colors = {
    RED: "Red",
    BLUE: "Blue",
    YELLOW: "Yellow",
    GREEN: "Green"
}


console.log(createCards());
// myPlayers[0].handkarten.push(cards.pop());
