const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board')
// const btnClearBoard = document.querySelector('#clear-board')
const black = 'rgb(0, 0, 0)';

let selectedColor = black;

function getBackgroundColor(event) {
    selectedColor = event.target.style.background
    const selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    event.target.classList.add('selected')
}

function paint(event) {
    event.target.style.background = selectedColor
}

function generateRandomColors(index) {
    if (index === 0) {
        return black
    }
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    return `rgb(${r}, ${g}, ${b})`
}

function createPaletteColor() {
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        if (i === 0) {
            div.classList.add('selected')
        }
        div.addEventListener('click', getBackgroundColor)
        div.classList.add('color');
        div.style.background = generateRandomColors(i)
        colorPalette.appendChild(div);
    }
}
createPaletteColor();

function createPixels() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        div.addEventListener('click', paint);
        div.classList.add('pixel');
        pixelBoard.appendChild(div);
    }
}
createPixels()

const white = 'rgb(255, 255, 255)';
function pixelsWhite() {
    const allPixels = document.querySelectorAll('.pixel')
    for (let i = 0; i < allPixels.length; i++) {
        allPixels[i].style.background = white
    }
}

btnClearBoard.addEventListener('click', pixelsWhite)




