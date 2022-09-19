let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');

let additionButton = document.querySelector('#addButton');
let subtractionButton = document.querySelector('#subButton');
let multiplicationButton = document.querySelector('#multButton');
let divisionButton = document.querySelector('#divButton');

let outputField = document.querySelector('#output');

function add() {
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);
    let answer = value1 + value2;
    outputField.value = "$"+answer;
}

additionButton.onclick = function() {
    add();
}

function sub() {
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);
    let answer = value1 - value2;
    outputField.value = "$"+answer;
}

subtractionButton.onclick = function() {
    sub();
}

function mult() {
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);
    let answer = value1 * value2;
    outputField.value = "$"+answer;
}

multiplicationButton.onclick = function() {
    mult();
}

function div() {
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);
    let answer = value1 / value2;
    outputField.value = "$"+answer;
}

divisionButton.onclick = function() {
    div();
}