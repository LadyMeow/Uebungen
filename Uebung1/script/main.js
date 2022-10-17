"use strict";

// hier kommen ihre Skripte hin

let num1 = Math.random();
let num2 = Math.random();

let operator = prompt("Gib einen mathematischen Operator an! + - * /");
let operation = num1 + " " + operator + " " + num2 + " = ";

executeOperation();

function executeOperation() {
    if (operator == "+") {
        console.log(operation + add(num1, num2));
        console.log(typeof operation);
    } else if (operator == "-") {
        console.log(operation + sub(num1, num2));
    } else if (operator == "*") {
        console.log(operation + mult(num1, num2));
    } else if (operator == "/") {
        console.log(operation + div(num1, num2));
    } else {
        console.log("Kein gültiger Operator");
    }
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
