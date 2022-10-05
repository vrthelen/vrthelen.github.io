let sq = document.querySelector('#square');

function changeCSS(bg,radius) {
    sq.style.backgroundColor = bg;
    sq.style.borderRadius = radius;
    sq.style.border = '10px dashed #333';
    sq.style.left = '100px';
    sq.style.top = '100px';
    sq.style.borderColor = '#000000';
    sq.style.alignItems='center';
}