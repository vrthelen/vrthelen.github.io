let myObject = {"Coffee" : "I drink it out of necessity",
"Tea" : "The best drink",
"Milk" : "Put it in things or put things in it",
"Water" : "My favorite drink",
"Soda" : "Not fit for human consumption honestly"}

for (i = 0; i < myObject.length; i++) {
    document.querySelector('#buttons').innerHTML += "<button onclick=showOpinion(i)>Click me</button>";
}

function showOpinion(num) {
    let chosenOption = document.querySelector('#options').value;
    document.querySelector('#aboutme').innerHTML = myObject[num];
}