let buildList = document.querySelector('#userInput');
for(var i = 0; i < 100; i++) {
    buildList.innerHTML += "<option value=" + i + ">" + i + "</option>";
}

function compare() {
    let answer = document.querySelector('#userInput');
    answer = answer.value;
    answer = Number(answer);
    let reaction = document.querySelector('#response');

    /** 
    if (answer===24) {
        reaction.innerHTML = answer + " is correct";
    } else if (answer < 20) {
        reaction.innerHTML = answer + " is way too low";
    } else if (answer > 28) {
        reaction.innerHTML = answer + " is way too high";
    } else if (answer < 24 && answer > 20) {
        reaction.innerHTML = answer + " is too low but close";
    } else if (answer > 24 && answer < 28) {
        reaction.innerHTML = answer + " is too high but close";
    }
    */ 

    switch(true) {
        case (answer===24): 
        reaction.innerHTML = answer + " is correct";
            break;
        case (answer < 20):
            reaction.innerHTML = answer + " is way too low";
            break;
        case (answer > 28): 
            reaction.innerHTML = answer + " is way too high";
            break;
        case (answer < 24 && answer > 20): 
            reaction.innerHTML = answer + " is too low but close";
            break;  
        case (answer > 24 && answer < 28): 
            reaction.innerHTML = answer + " is too high but close";
            break;
    }
}
