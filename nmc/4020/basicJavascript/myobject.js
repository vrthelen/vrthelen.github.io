let myObject = {"Coffee" : "I drink it out of necessity",
"Tea" : "The best drink",
"Milk" : "Put it in things or put things in it",
"Water" : "My favorite drink",
"Soda" : "Not fit for human consumption honestly"}

function showOpinion() {
    
    if (myObject.hasOwnProperty(sName) == true) {
        document.querySelector('#image').innerHTML += "<img src=pix/" + nameArray[i] + ".jpg></img>";
        document.querySelector('#aboutme').innerHTML = classObject[sName];
    } else document.querySelector('#aboutme').innerHTML = sName + " is not in the class";
}