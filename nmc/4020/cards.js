
var cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"]
var disposed = [];


function shuffle() {
    data.innerHTML = "";
    deck.innerHTML = "";
    for (var i = 0; i <5; i++) {
        let outcome = Math.floor(Math.random() * cards.length);
        if (cards[outcome] != undefined) {
            deck.innerHTML += "<img src=cards/"+cards[outcome]+">";
        } else {
            data.innerHTML = "You are out of cards!"
        }
        if (cards[outcome] != undefined) {
            disposed.push(cards[outcome]);
        }
        cards.splice(outcome , 1); 
        $(function() {
            $('img').draggable();
            })
        $('img').dblclick(function() {
            $(this).css("display", "none");
            })
    }
}
function shuffle2() {
    deck2.innerHTML = "";
    for (var i = 0; i <5; i++) {
        let outcome = Math.floor(Math.random() * cards.length);
        if (cards[outcome] != undefined) {
            deck2.innerHTML += "<img src=cards/"+cards[outcome]+">";
        } else {
            data2.innerHTML = "You are out of cards!"
        }
        if (cards[outcome] != undefined) {
            disposed.push(cards[outcome]);
        }
        cards.splice(outcome , 1); 
        $(function() {
            $('img').draggable();
            })
        $('img').dblclick(function() {
            $(this).css("display", "none");
            })
    }
}
function show() {
    for (var i = 0; i < cards.length; i++) {
        array.innerHTML += cards[i] + ", ";
    }

}
function resetshow() {
    array.innerHTML = "";
}

function addback() {
    for (var i = 0; i < disposed.length; i++) {
        cards.push(disposed[i]);
    }
}

function discard() {
    deck.innerHTML = "";
}

function reset() {
    cards = ["10C.jpg","10D.jpg","10H.jpg","10S.jpg","2C.jpg","2D.jpg","2H.jpg","2S.jpg","3C.jpg","3D.jpg","3H.jpg","3S.jpg","4C.jpg","4D.jpg","4H.jpg","4S.jpg","5C.jpg","5D.jpg","5H.jpg","5S.jpg","6C.jpg","6D.jpg","6H.jpg","6S.jpg","7C.jpg","7D.jpg","7H.jpg","7S.jpg","8C.jpg","8D.jpg","8H.jpg","8S.jpg","9C.jpg","9D.jpg","9H.jpg","9S.jpg","AC.jpg","AD.jpg","AH.jpg","AS.jpg","JC.jpg","JD.jpg","JH.jpg","JS.jpg","KC.jpg","KD.jpg","KH.jpg","KS.jpg","QC.jpg","QD.jpg","QH.jpg","QS.jpg"];
}