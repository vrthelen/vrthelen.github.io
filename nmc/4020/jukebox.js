let juke = document.querySelector('#juke');
let song1 = document.querySelector('#song1');
let song2 = document.querySelector('#song2');
let song3 = document.querySelector('#song3');
let song4 = document.querySelector('#song4');
let song5 = document.querySelector('#song5');
let song6 = document.querySelector('#song6');

let music = new Audio();

function player(tune){
    juke.innerHTML = "<audio controls autoplay src=" + tune + " type='audio/m4a'></audio>";
}

let divArray = ["songone","songtwo","songthree","songfour","songfive","songsix"]

function playSong(num,aSong){
    music.src = aSong;
    music.play();
    for (let i = 0; i < 6; i++) {
        document.getElementById(divArray[i]).disabled = true; // disable the song as it plays
    }
}


music.addEventListener('ended', songOver); // listen for audio ended event

function songOver() {
    for (let i = 0; i < 6; i++) {
        document.getElementById(divArray[i]).disabled = false; // enable songs after played
    }
}

function pauseAudio() {
    music.pause();
}
function playAudio() {
    music.play();
}
function stopAudio() {
    music.pause();
    music = new Audio();
    songOver();
}







