let candidateNames = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"]

let candidatePix = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"]

let output = document.querySelector('#alsoRan');
for (var i = 0; i < candidateNames.length; i++) {
    output.innerHTML += "<li>" + candidateNames[i] + "<br><img src= pix/" + candidatePix[i] + "></li>";
}

let next = document.querySelector('#next');
let previous = document.querySelector('#previous');
let i = 0;
function canShow(plusMinus) {
    output.innerHTML = "<div class='cand'>" + candidateNames[i]+"<br><img src= pix/" + candidatePix[i]+"></cand>";
    i += plusMinus;
}
next.onclick = function () {
    canShow(1);
}
previous.onclick = function () {
    canShow(-1);
}