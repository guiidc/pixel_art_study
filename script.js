const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const btnclearBoard = document.querySelector('#clear-board')
const black = 'rgb(0, 0, 0)';

function selectPalette(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
    selectedColor = event.target.style.background
}

let selectedColor = black;

function paintPixels(event) {
    event.target.style.background = selectedColor
}

function coloringColorPalettes(index) {
    if (index === 0) {
        return black;
    }
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);
    return `rgb(${r}, ${g}, ${b})`
}

function createcolorPalette() {
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        if (i === 0) {
            div.classList.add('selected');
        }
        div.classList.add('color');
        colorPalette.appendChild(div);
        div.style.background = coloringColorPalettes(i);
        div.addEventListener('click', selectPalette);
    }
}
createcolorPalette();

function createPixelsBoard() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        pixelBoard.appendChild(div);
        div.addEventListener('click', paintPixels);
    }
}
createPixelsBoard();

const white = 'rgb(255, 255, 255)';

function colorWhitePaint() {
    const  allWhiteColor = document.querySelectorAll('.pixel')
    for (let i = 0; i < allWhiteColor.length; i++)
    allWhiteColor[i].style.background = white
}

btnclearBoard.addEventListener('click', colorWhitePaint)



