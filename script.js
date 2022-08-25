const colorPalette = document.querySelector('#color-palette')
const pixelBoard = document.querySelector('#pixel-board')
const btnclearBoard = document.querySelector('#clear-board')
const black = 'rgb(0, 0, 0)'

function generateRandomColors(index) {
    if (index === 0) {
        return black;
    }
    const r = Math.floor(Math.random() * 255 + 1)
    const g = Math.floor(Math.random() * 255 + 1)
    const b = Math.floor(Math.random() * 255 + 1)
    return `rgb(${r}, ${g}, ${b})`
}

function getBackgroundColor(event) {
    selectedColor = event.target.style.background
    const selected = document.querySelector('.selected')
    selected.classList.remove('selected')
    event.target.classList.add('selected')
}

function createColorPalette() {
    for (let i = 0; i < 4; i++) {
        const div = document.createElement('div')
        if (i === 0) {
            div.classList.add('selected')
        }
        div.addEventListener('click', getBackgroundColor)
        div.classList.add('color')
        colorPalette.appendChild(div)
        div.style.background = generateRandomColors(i)
    }
}
createColorPalette()

let selectedColor = black;

function paint(event) {
    event.target.style.background = selectedColor
}

function createPixelsBoard() {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div')
        div.classList.add('pixel')
        div.addEventListener('click', paint);
        pixelBoard.appendChild(div)
    }
}
createPixelsBoard()

const white = 'rgb(255, 255, 255)';

function pixelsWhite(){
    const allPixels = document.querySelectorAll('.pixel')
    for (let i = 0; i < allPixels.length; i++){
        allPixels[i].style.background = white
    }
}
btnclearBoard.addEventListener('click', pixelsWhite)



