let myObject = {"AlexW": "I am the oldest of two boys, two girls; two redheads, two blondes; two left-handers, two right-handers. ",
"AlexC": " My beard is thicker than this photo shows. I need new pictures :-(",
"Allison": "I write about peanuts. ",
"Amy": " I like mint tea and taking pictures!",
"Andrea": "Let me think about it"}

let nameArray = ["AlexW","AlexC","Allison","Amy","Andrea"];

for (i = 0; i < 5; i++) {
    document.querySelector('#buttons').innerHTML += "<button onclick=showOpinion('"+i+"')>Click me for "+(i+1)+"</button>";
}

function showOpinion(num) {
    let choice = nameArray[num];
    document.querySelector('#aboutme').innerHTML = myObject[choice];
}