let candidateNames = ["Jeb Bush","Ben Carson","Lincoln Chafee","Chris Christie","Ted Cruz","Carly Fiorina","Jim Gilmore","Lindsey Graham","Bobby Jindal","John Kasich","Lawrence Lessig","Martin O'Malley","George Pataki","Rand Paul","Rick Perry","Marco Rubio","Bernie Sanders","Rick Santorum","Donald Trump","Scott Walker","Jim Webb"];

let candidatePix = ["bush.jpg","carson.jpg","chafee.jpg","christie.jpg","cruz.jpg","fiorina.jpg","gilmore.jpg","graham.jpg","jindal.jpg","kasich.jpg","lessig.jpg","omalley.jpg","pataki.jpg","paul.jpg","perry.jpg","rubio.jpg","sanders.jpg","santorum.jpg","trump.jpg","walker.jpg","webb.jpg"];


let output1 = document.querySelector('#candidate1');
let output2 = document.querySelector('#candidate2');
let output3 = document.querySelector('#candidate3');
let x = 0; // 0-6
let y = 0; // 7-13
let z = 0; // 14-20

output1.innerHTML = candidateNames[0] + "<br><img src= ../candidates/pix/" + candidatePix[0] + ">"; 
output2.innerHTML = candidateNames[7] + "<br><img src= ../candidates/pix/" + candidatePix[7] + ">"; 
output3.innerHTML = candidateNames[14] + "<br><img src= ../candidates/pix/" + candidatePix[14] + ">"; 