"use strict";

// hier kommen ihre Skripte hin
/*
function Card(color, value) {
    this.Color = color;
    this.Value = value;
    this.matches = function (otherCard) {
        return this.Color == otherCard.Color;
    };
}

let card1 = new Card("Yellow", 1);
let card2 = new Card(null, undefined);
*/

class Card {
    constructor(color, value) {
        this.Color = color;
        this.Value = value;
    }
    matches(otherCard) {
        return this.Color == otherCard.Color;
    }
}

let card3 = new Card("red", 2);