let myObject = {"Coffee" : "I drink it out of necessity",
"Tea" : "The best drink",
"Milk" : "Put it in things or put things in it",
"Water" : "My favorite drink",
"Soda" : "Not fit for human consumption honestly"}

function showOpinion() {
    let chosenOption = document.querySelector('#options').value;
    document.querySelector('#aboutme').innerHTML = myObject[chosenOption];
}